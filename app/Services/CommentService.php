<?php

namespace Services;

use App\Comment;
use GrahamCampbell\Markdown\Facades\Markdown;

class CommentService 
{
	public function model()
	{
		return Comment::with('user', 'post', 'post.user', 'reply', 'reply.user');
	}

	public function find($id)
	{
		return $this->model()->find($id);
	}

	public function total($post_id, $user_id=false)
	{
		$comments = $this->model();
		if($post_id == 'mine')
			$comments = $comments->whereUserId($user_id);
		else
			$comments = $comments->wherePostId($post_id);

		return $comments->count();
	}

	public function paginate($limit=5)
	{
		return $this->model()->orderBy('created_at', 'desc')->paginate($limit);
	}

	public function latest($limit=5)
	{
		return $this->model()->orderBy('created_at', 'desc')->take($limit)->get();
	}

	public function mine($id)
	{
		return $this->model()->whereUserId($id)->orderBy('created_at', 'desc')->paginate(10);
	}

	// // move to eloquent soon
	// public function attrs($comment)
	// {
	// 	$comment->content = $comment->markdown;
	// 	$comment->time = $comment->time;
	// 	$comment->avatar = $comment->user->the_avatar;
	// 	$comment->username = $comment->user->username;
	// 	$comment->is_mine = $comment->is_mine;

	// 	return $comment;
	// }

	public function take($post_id, $user_id, $start, $end)
	{
		$comments = $this->model();

		if($post_id == 'mine')
			$comments = $comments->whereUserId($user_id);
		else
			$comments = $comments->wherePostId($post_id);

		$comments = $comments->offset($start)->take($end)->orderBy('created_at', 'desc')->get();

		return $comments;
	}

	public function create($request)
	{
		$input = $request->all();
		$input['user_id'] = auth()->user()->id;

		$comment = $this->model()->create($input);

		return $this->model()->find($comment->id);
	}
}