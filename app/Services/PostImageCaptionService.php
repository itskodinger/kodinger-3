<?php

namespace Services;

use Str;
use App\PostImageCaption;

class PostImageCaptionService
{
	protected $init;

	public function model()
	{
		return PostImageCaption::with($this->with());
	}

	public function emptyModel()
	{
		return new PostImageCaption;
	}

	protected function with($parent=false, $arr2=[])
	{
		return array_merge([
			($parent ? $parent . '.' : '') . 'image', 
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

