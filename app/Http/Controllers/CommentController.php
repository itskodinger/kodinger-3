<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\CommentService;

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

    public function destroy($id)
    {
    	$comment = $this->commentService->model()->find($id);

        if(!$comment)
        {
            flash('Comment not found')->error();
            return redirect()->back();
        }

		$comment->delete();

        flash('Comment deleted successfully')->success();

        return redirect()->back();
    }
}
