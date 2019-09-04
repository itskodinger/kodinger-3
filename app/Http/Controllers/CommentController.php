<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\CommentService;
use Requests\CommentCreateRequest;
use GrahamCampbell\Markdown\Facades\Markdown;

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

		$comments->each(function($item) {
			$item->content = Markdown::convertToHtml($item->content);
			$item->time = $item->created_at->diffForHumans();
		});

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
}
