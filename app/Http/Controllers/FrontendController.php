<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;
use Services\UserService;

class FrontendController extends Controller
{
	protected $postService;
	protected $userService;

	public function __construct(PostService $postService, UserService $userService)
	{
		$this->postService = $postService;
		$this->userService = $userService;
	}

	public function index(Request $request, $tag = false)
	{
		$posts = $this->postService->paginate(10, $request->all() + ['tag' => $tag]);

		$popular = $this->postService->popular(1)[0];

		if(!$posts)
			return abort(404);

		return view('welcome', compact('posts', 'tag', 'popular'));
	}

	public function single($slug)
	{
		$post = $this->postService->findBySlug($slug, true);

		if(!$post)
		{
			$user = $this->userService->findByUsername($slug);

			if(!$user) return abort(404);

			return view('profile', compact('user'));
		}

		return view('single', compact('post'));
	}

	public function recommend(Request $request, $slug)
	{
		$col = $request->col;

		if(!in_array($col, recommend_fields())) return abort(404);

		$post = $this->postService->findBySlug($slug);

		if(!$post)
			return abort(404);

		return view('recommend', compact('post', 'col'));
	}
}
