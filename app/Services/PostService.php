<?php

namespace Services;

use DB;
use App\Tag;
use App\Save;
use App\Post;
use App\PostTag;
use App\Contribute;
use App\Events\Post\Discover\DiscoverPostCreated;

class PostService
{
	protected $init;

	public function model()
	{
		return Post::with(['tags', 'tags.tag', 'user', 'comments']);
	}

	public function find($id)
	{
		return $this->model()->find($id);
	}

	public function total()
	{
		return $this->model()->count();
	}

	public function discover(...$args)
	{
		$this->init = $this->model()->whereType('link');

		return $this->paginate(...$args);
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

		event(
			new DiscoverPostCreated($post)
		);

		return $post;
	}

	public function content(...$args)
	{
		$this->init = $this->model()->whereType(null);

		return $this->paginate(...$args);
	}

	public function paginate($num=10, $request=false)
	{
		$posts = $this->init ?? $this->model();

		if($request) {
			$req_search = $request['search'] ?? null;
			if($req_search) {
				$posts = $posts->where('title', 'like', '%'. $req_search .'%');
			}

			$req_tag = $request['tag'] ?? null;
			if($req_tag) {
				$tag = Tag::whereName($req_tag)->first();

				if(!$tag) 
					return false;

				$tag_id = $tag->id;

				$posts = $posts->whereHas('tags', function($q) use($tag_id) {
					$q = $q->whereTagId($tag_id);
				});
			}
		}

		$posts = $posts->orderBy('created_at', 'desc')->paginate($num);

		return $posts;
	}

	public function create($request, $arr=[])
	{
		$input = $request->all();
		$tags = $arr['tags'] ?? $request->tags;
		$input['status'] = 'draft';
		$input['views'] = 0;
		$input['user_id'] = auth()->user()->id;

		$input = array_merge($input, $arr);

		$data = $this->model()->create($input);
		foreach($tags as $tag)
		{
			PostTag::create([
				'post_id' => $data->id,
				'tag_id' => $tag
			]);
		}

		return $data;
	}

	public function findAndUpdate($id, $request)
	{
		$input = $request->all();
	
		$data = $this->model()->find($id);

		// temp solution: need better solution
		PostTag::wherePostId($id)->delete();
		foreach($request->tags as $tag)
		{
			PostTag::create([
				'post_id' => $id,
				'tag_id' => $tag
			]);
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