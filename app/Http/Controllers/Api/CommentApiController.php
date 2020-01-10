<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Services\CommentService;
use Requests\CommentCreateRequest;

class CommentApiController extends Controller
{

	public $commentService;

	/**
	 * Construct
	 * @param CommentService $commentService Comment service layer
	 */
	public function __construct(CommentService $commentService)
	{
		$this->commentService = $commentService;
	}

	/**
	 * Index page
	 * @param  Request 	$request Request
	 * @param  Integer  $post_id Post ID
	 * @return JSON
	 */
	public function index(Request $request, $post_id)
	{
		$comments = $this->commentService->take($post_id, $request->offset ?? 0, $request->take ?? 10);

		return response([
			'data' => $comments,
			'count' => count($comments),
			'total' => $this->commentService->total($post_id)
		], 200);
	}

	/**
	 * Store a comment
	 * @param  CommentCreateRequest $request Form request
	 * @return JSON
	 */
    public function store(CommentCreateRequest $request)
    {
    	$comment = $this->commentService->create($request);
    	$comment->time = $comment->created_at->diffForHumans();

    	return response([
    		'data' => $comment
    	], 200);
    }

    /**
     * Delete a comment
     * @param  Request $request Request
     * @return JSON
     */
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
