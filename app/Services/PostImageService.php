<?php

namespace Services;

use DB;
use Str;
use App\Tag;
use App\Save;
use App\PostImage;
use App\PostAttribute;
use App\PostTag;
use App\Contribute;
// use App\Events\Post\Discover\DiscoverPostCreated;
use App\Jobs\FetchDiscoverUrlPreview;
use Services\UserService;

class PostImageService
{
	protected $init;
	protected $postService;

	public function __construct(PostService $postService) {
		$this->postService = $postService;
	}

	public function model()
	{
		return PostImage::with($this->with());
	}

	public function emptyModel()
	{
		return new PostImage;
	}

	protected function with($parent=false, $arr2=[])
	{
		return array_merge([
			($parent ? $parent . '.' : '') . 'caption', 
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

	public function create($request, $arr=[])
	{
		$input = $request->all();
		$input['id'] = Str::uuid()->toString();

        $data = $this->model()->create($input);

		return $data;
	}

	public function findAndUpdate($id, $request)
	{
		$input = $request->all();
	
		$data = $this->model()->find($id);

		$data->update($input);

		return $data;
    }

	public function delete($id)
	{
		$post = $this->model()->find($id);

		return $post->delete($id);
	}
}

