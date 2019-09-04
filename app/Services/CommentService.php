<?php

namespace Services;

use App\Comment;
use GrahamCampbell\Markdown\Facades\Markdown;

class CommentService 
{
	public function find($id)
	{
		return Comment::find($id);
	}

	public function attrs($comment)
	{
		$comment->content = Markdown::convertToHtml($comment->content);
		$comment->time = $comment->created_at->diffForHumans();
		$comment->avatar = $comment->user->the_avatar;
		$comment->username = $comment->user->the_username;
		$comment->is_mine = $comment->user_id == auth()->user()->id;

		return $comment;
	}

	public function take($post_id, $start, $end)
	{
		$comments = Comment::with('user')->wherePostId($post_id)->offset($start)->take($end)->get();
		$comments->each(function($item) {
			return $this->attrs($item);
		});
		return $comments;
	}

	public function create($request)
	{
		$input = $request->all();
		$input['user_id'] = auth()->user()->id;

		$comment = Comment::create($input);
		$comment = $this->attrs($comment);

		return $comment;
	}
}