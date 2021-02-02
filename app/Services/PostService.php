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
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Image;
use App\Events\Post\Markdown\MarkdownPostPublished;
use Carbon\Carbon;

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

	private function _draftedPosts()
	{
		return $this->model()->whereStatus('draft')->whereUserId(auth()->user()->id);
	}

	public function draftedPostsCount()
	{
		return $this->_draftedPosts()->count();
	}

	public function hasDraftedPosts()
	{
		return $this->_draftedPosts()->count() > 0 ? true : false;
	}

	public function draftedPosts()
	{
		return $this->_draftedPosts()->get();
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

	public function find($id, $views=false)
	{
		$post = $this->model()->find($id);

		if($post && $views) {
			$post->update(['views' => ($post->views ?? 0) + 1]);
		}

		return $post;
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

		return $discover->orderBy('published_at', 'desc')->paginate($num);
	}

	public function myLovesBySlug($user, $request)
	{
		$posts = $user->lovePosts()->with($this->with('post', ['post']))
				->has('post')
				->paginate(10);

		return $posts;
	}

	public function mySavesBySlug($user, $request)
	{
		$posts = $user->savePosts()->with($this->with('post', ['post']))
				->has('post')
				->paginate(10);

		return $posts;
	}

	public function createDiscover($request)
	{
		$adds = [
			'id' => Str::uuid(),
			'slug' => uniqid(),
			'type' => 'link',
			'tags' => explode(',', $request->tags),
			'status' => 'processing',
			'published_at' => Carbon::now()
		];

		$request->merge([
			'pages' => filter_var($request->pages, FILTER_SANITIZE_SPECIAL_CHARS)
		]);

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
		$this->init = $this->model()->whereStatus('publish');

		return $this->paginate(...$args);
	}

	public function both(...$args)
	{
		$status = request()->status ?? 'publish';

		$this->init = $this->model()->whereStatus($status);

		return $this->paginate(...$args);
	}

	public function timeline(...$args)
	{
		$status = request()->status ?? 'publish';

		$this->init = $this->model()->whereStatus($status)->where(function($query) {
			$query->orWhereNull('type');
			$query->orWhere('type', 'link');
			$query->orWhere('type', 'markdown');
		});

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
				$req_type = $req_type == 'slide' ? null : $req_type;
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

			if(isset($request->status))
			{
				$posts = $posts->whereStatus($request->status);
			}

			if(isset($request->sort))
			{
				if($request->sort == 'popular')
					$posts = $posts->orderBy('views', 'desc');
				else
					$posts = $posts->orderBy('published_at', 'desc');
			}
		}

		$posts = $posts->paginate($num);

		$posts->appends(['search' => $req_search, 'type' => $req_type, 'status' => $request->status]);

		return $posts;
	}

	public function uploadImage($request)
	{
		$public_folder = $request->public_folder;
		$user = auth()->user();

		// post id
		$id = $request->id;
		$post = $this->find($id);

		$base = 'posts/';
		$name = safe_file_name(pathinfo($request->name, PATHINFO_FILENAME)) . '-' . uniqid() . '.' . $request->image->getClientOriginalExtension();
		$path = $base . $public_folder . '/' . $name;
		$url = space_url($path);

		$blurry_folder = 'px';
		$blurry_path = $base . $public_folder . '/' . $blurry_folder;

		$video_thumbnail = $request->video_thumbnail;
		$image = $request->image;
		$image_ext = $image->getClientOriginalExtension();

		if($video_thumbnail)
		{
			$video_thumbnail = str_replace('data:image/png;base64,', '', $video_thumbnail);
			$video_thumbnail = base64_decode($video_thumbnail);
			$video_thumbnail_name = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME) . '.png';
			$video_path = $base . $public_folder . '/' . $video_thumbnail_name;
			Storage::disk('spaces')->put($video_path, $video_thumbnail, 'public');
		}

		$blurry = Image::make($video_thumbnail ? $video_thumbnail : $image);
		$blurry->fit(30);
		$blurry = $blurry->stream($video_thumbnail ? 'png' : $image_ext, 20)->detach();

		// create sub-directory
		Storage::disk('spaces')->makeDirectory($blurry_path);

		// upload media (image/video)
		Storage::disk('spaces')->putFileAs($base . $public_folder, $image, $name, 'public');
		// upload blurry
		Storage::disk('spaces')->put($blurry_path . '/' . ($video_thumbnail ? $video_thumbnail_name : $name), $blurry, 'public');

		$output = [
			'post_id' => $id,
			'public_folder' => $public_folder,
			'name' => $name,
			'url' => $url,
			'path' => $path
		];

		if($video_thumbnail)
		{
			$output['video_thumbnail_url'] = space_url($video_path);
			$output['video_thumbnail_name'] = $video_thumbnail_name;
		}

		return $output;
	}

	public function deleteImage($request)
	{
		$base_path = 'posts/' . $request->public_folder . '/';
		$path = $base_path . $request->name;
		$path_blurry = $base_path . 'px/' . $request->name;

		Storage::disk('spaces')->delete($path);
		Storage::disk('spaces')->delete($path_blurry);
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

	public function publish($id, $request)
	{

        // need better approach, to trigger only on first publish.
        $needToTriggerEvent = false;

		$post = $this->find($id);

		if(strtoupper($post->status) == 'DRAFT' && !$post->published_at)
		{

            $needToTriggerEvent = true;

			$request = $request->merge(['published_at' => Carbon::now()]);
		}

		$publishedPost = $this->findAndUpdate($id, $request);

        if( $needToTriggerEvent ) {

            event(
                new MarkdownPostPublished($publishedPost)
            );

        }

        return $publishedPost;
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
		$post = $this->model()->whereSlug($slug)->whereStatus('publish')->first();

		if($post && $views) {
			$post->update(['views' => ($post->views ?? 0) + 1]);
		}

		return $post;
	}

	public function findBySlugAll($slug)
	{
		$post = $this->model()->whereSlug($slug)->first();

		return $post;
	}

	public function popular($first=true, $limit=5)
	{
		$posts = $this->model()->orderBy('views', 'desc')->whereStatus('publish')->whereNull('type');

		if($first)
			$posts = $posts->first();
		else
			$posts = $posts->take($limit)->get();

		return $posts;
	}

	public function getByAuthor($id, $limit=5)
	{
		$posts = $this->model()->orderBy('views', 'desc')->whereStatus('publish')->whereUserId($id)->where(function($query) {
			$query->whereNull('type');
			$query->orWhere('type','markdown');
		})->take($limit)->get();

		return $posts;
	}

	public function random()
	{
		$posts = $this->model()->withoutTrashed()->inRandomOrder()->where('status', 'publish');

		return $posts->first();
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
							$query->whereNull('type');
							$query->orWhere('type', 'markdown');
						})
						->take($take)
						->get();

		return $posts;
	}

	// public function publish($id)
	// {
	// 	$post = $this->model()->find($id);

	// 	$update = $post->update(['status' => 'publish']);

	// 	return $update;
	// }

	public function delete($id)
	{
		$post = $this->model()->find($id);

		return $post->delete($id);
	}
}
