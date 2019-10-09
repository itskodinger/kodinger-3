<?php

namespace Services;

use App\Post;
use App\PostTag;
use App\Tag;

class PostService
{
	public function model()
	{
		return Post::with(['tags', 'tags.tag', 'user', 'comments']);
	}

	public function paginate($num=10, $request=false)
	{
		$posts = $this->model();

		if($request) {
			$req_search = $request['search'] ?? null;
			if($req_search)
				$posts = $posts->where('title', 'like', '%'. $req_search .'%');

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

	public function create($request)
	{
		$dir = str_slug($request->title, '-');

		$input = $request->all();
		$input['status'] = 'draft';
		$input['views'] = 0;
		$input['user_id'] = auth()->user()->id;

		$data = $this->model()->create($input);
		foreach($request->tags as $tag)
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

	public function findBySlug($slug)
	{
		$post = $this->model()->whereSlug($slug)->first();

		return $post;
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