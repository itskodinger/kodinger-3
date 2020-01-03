<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Services\CommentService;

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
}
