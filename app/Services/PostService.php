<?php

namespace Services;

use DB;
use App\Tag;
use App\Save;
use App\Post;
use App\PostAttribute;
use App\PostTag;
use App\Contribute;
// use App\Events\Post\Discover\DiscoverPostCreated;
use App\Jobs\FetchDiscoverUrlPreview;
use Services\UserService;

class PostService
{
	protected $init;
	protected $userService;

	public function __construct(UserService $userService) {
		$this->userService = $userService;
	}

	public function model()
	{
		return Post::with($this->with());
	}

	public function emptyModel()
	{
		return new Post;
	}

	public function checkSlug($slug)
	{
		return $this->model()->whereSlug($slug)->count();
	}

	protected function with($parent=false, $arr2=[])
	{
		return array_merge([
			($parent ? $parent . '.' : '') . 'tags', 
			($parent ? $parent . '.' : '') . 'tags.tag', 
			($parent ? $parent . '.' : '') . 'user', 
			($parent ? $parent . '.' : '') . 'attributes', 
		], $arr2);
	}

	public function find($id)
	{
		return $this->model()->find($id);
	}

	public function total()
	{
		return $this->model()->count();
	}

	public function discover($num, $request)
	{
		$discover = $this->model()->whereType('link');

		if(isset($request->search))
		{
			$discover = $discover->whereHas('attributes', function($q) use($request) {
				$q->where('value', 'like',  '%' . $request->search . '%');
			});
		}

		$tag = $request->tag ?? null;
		if($tag) {
			$tag = Tag::whereName($tag)->first();

			if(!$tag) 
				return false;

			$tag_id = $tag->id;

			$discover = $discover->whereHas('tags', function($q) use($tag_id) {
				$q = $q->whereTagId($tag_id);
			});
		}

		return $discover->orderBy('created_at', 'desc')->paginate($num);
	}

	public function myLovesBySlug($user, $request)
	{
		$posts = $user->lovePosts()->with($this->with('post', ['post']))->paginate(10);	

		return $posts;
	}

	public function mySavesBySlug($user, $request)
	{
		$posts = $user->savePosts()->with($this->with('post', ['post']))->paginate(10);	

		return $posts;
	}

	public function createDiscover($request)
	{
		$adds = [
			'slug' => uniqid(), 
			'type' => 'link',
			'tags' => explode(',', $request->tags),
			'status' => 'processing'
		];

		$post = $this->create($request, $adds);

		// pusher is too expensive
		// event(
		// 	new DiscoverPostCreated($post)
		// );
		
		FetchDiscoverUrlPreview::dispatch($post);

		return $post->load($this->with());
	}

	public function content(...$args)
	{
		$this->init = $this->model()->whereType(null);

		return $this->paginate(...$args);
	}

	public function both(...$args)
	{
		$this->init = $this->model();

		return $this->paginate(...$args);
	}

	public function paginate($num=10, $request=false)
	{
		$posts = $this->init ?? $this->emptyModel();

		$req_search = $request['search'] ?? null;
		$req_type = $request['type'] ?? null;
		$req_tag = $request['tag'] ?? null;
		
		if($request) {
			if($req_search) {
				$posts = $posts->where('title', 'like', '%'. $req_search .'%');
			}

			if($req_type) {
				$req_type = $req_type == 'content' ? null : $req_type;
				$posts = $posts->whereType($req_type);
			}

			if($req_tag) {
				$tag = Tag::whereName($req_tag)->first();

				if(!$tag) 
					return false;

				$tag_id = $tag->id;

				$posts = $posts->whereHas('tags', function($q) use($tag_id) {
					$q = $q->whereTagId($tag_id);
				});
			}

			if(isset($request->username)) {
				$posts = $posts->whereHas('user', function($query) use($request) {
					return $query->whereUsername($request->username);
				});
			}
		}

		$posts = $posts->orderBy('created_at', 'desc')->paginate($num);

		$posts->appends(['search' => $req_search, 'type' => $req_type]);

		return $posts;
	}

	public function create($request, $arr=[])
	{
		if(is_array($request)) {
			$input = $request;
		}else{
			$input = $request->all();
		}

		$tags = $arr['tags'] ?? $request->tags ?? false;
		$input['status'] = 'draft';
		$input['views'] = 0;
		$input['user_id'] = auth()->user()->id;

		$input = array_merge($input, $arr);

		$data = $this->model()->create($input);

		if($tags) {
			foreach($tags as $tag)
			{
				PostTag::create([
					'post_id' => $data->id,
					'tag_id' => $tag
				]);
			}
		}

		return $data;
	}

	public function findAndUpdate($id, $request)
	{
		if(is_array($request)) {
			$input = $request;
		}else{
			$input = $request->all();
		}
	
		$data = $this->model()->find($id);

		// temp solution: need better solution
		if(isset($input['tags'])) {
			PostTag::wherePostId($id)->delete();
			foreach($input['tags'] as $tag)
			{
				PostTag::create([
					'post_id' => $id,
					'tag_id' => $tag
				]);
			}			
		}

		$data->update($input);

		return $data;
	}

	public function findBySlug($slug, $views=false)
	{
		$post = $this->model()->whereSlug($slug)->first();

		if($post && $views) {
			$post->update(['views' => ($post->views ?? 0) + 1]);
		}

		return $post;
	}

	public function popular()
	{
		$posts = $this->model()->orderBy('views', 'desc')->first();

		return $posts;
	}

	public function loved($take=5)
	{
		$posts = Save::whereModel('Post')
						->whereMethod('love')
						->groupBy('row_id')
						->select('row_id', DB::raw('count(row_id) as total'))
						->orderBy('total', 'desc')
						->with('post')
						->whereHas('post', function($query) {
							return $query->whereNull('type');
						})
						->take($take)
						->get();

		return $posts;
	}

	public function publish($id)
	{
		$post = $this->model()->find($id);

		$update = $post->update(['status' => 'publish']);

		return $update;
	}

	public function delete($id)
	{
		$post = $this->model()->find($id);

		return $post->delete($id);
	}
}
