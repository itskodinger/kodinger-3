<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\CommentService;
use Requests\CommentCreateRequest;

class CommentController extends Controller
{

	public $commentService;

	public function __construct(CommentService $commentService)
	{
		$this->commentService = $commentService;
	}

    public function index()
    {
        $comments = $this->commentService->paginate();
        return view('comments.index', compact('comments'));
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

    	return response([
    		'status' => false
    	], 200);
    }
}
