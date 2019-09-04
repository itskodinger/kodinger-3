<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\CommentService;
use Requests\CommentCreateRequest;

class CommentController extends Controller
{

	public $comment_service;

	public function __construct(CommentService $comment_service)
	{
		$this->comment_service = $comment_service;
	}

	public function index($post_id)
	{
		$comments = $this->comment_service->take($post_id, 0, 10);

		return response([
			'data' => $comments
		], 200);
	}

    public function store(CommentCreateRequest $request)
    {
    	$comment = $this->comment_service->create($request);
    	$comment->time = $comment->created_at->diffForHumans();

    	return response([
    		'data' => $comment
    	], 200);
    }

    public function destroy(Request $request)
    {
    	$comment = $this->comment_service->find($request->id);

    	if($comment->user_id == auth()->user()->id) {
    		$comment->delete();

    		return response([
    			'status' => true
    		], 200);
    	}

    	return response([
    		'status' => false
    	], 200);
    }
}
