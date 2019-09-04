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

    public function store(CommentCreateRequest $request)
    {
    	$comment = $this->comment_service->create($request);
    	$comment->time = $comment->created_at->diffForHumans();

    	return response([
    		'data' => $comment
    	], 200);
    }
}
