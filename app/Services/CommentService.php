<?php

namespace Services;

use App\Comment;

class CommentService 
{
	public function create($request)
	{
		$input = $request->all();
		$input['user_id'] = auth()->user()->id;

		return Comment::create($input);
	}
}