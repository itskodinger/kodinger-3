<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Services\CommentService;
use Requests\CommentCreateRequest;

class CommentApiController extends Controller
{

	public $commentService;

	public function __construct(CommentService $commentService)
	{
		$this->commentService = $commentService;
	}

	public function index(Request $request, $post_id)
	{
		$comments = $this->commentService->take($post_id, $request->offset ?? 0, $request->take ?? 10);

		return response([
			'data' => $comments,
			'count' => count($comments),
			'total' => $this->commentService->total($post_id)
		], 200);
	}

    public function store(CommentCreateRequest $request)
    {
    	$comment = $this->commentService->create($request);
    	$comment->time = $comment->created_at->diffForHumans();

    	return response([
    		'data' => $comment
    	], 200);
    }

    public function destroy(Request $request)
    {
    	$comment = $this->commentService->find($request->id);

    	if($comment->user_id == auth()->user()->id) {
    		$comment->delete();

    		return response([
    			'status' => true
    		], 200);
    	}
    }
}
