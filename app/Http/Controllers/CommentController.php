<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\CommentService;

class CommentController extends Controller
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
     * @return view
     */
    public function index()
    {
        $comments = $this->commentService->paginate();
        return view('comments.index', compact('comments'));
    }

    /**
     * Delete comment
     * @param  Integer $id Comment ID
     * @return redirect
     */
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
