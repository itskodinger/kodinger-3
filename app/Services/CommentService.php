<?php

namespace Services;

use App\Comment;

class CommentService 
{
	public function take($post_id, $start, $end)
	{
		return Comment::with('user')->wherePostId($post_id)->offset($start)->take($end)->get();
	}

	public function create($request)
	{
		$input = $request->all();
		$input['user_id'] = auth()->user()->id;

		return Comment::create($input);
	}
}