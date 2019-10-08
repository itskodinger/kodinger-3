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

	public function index(Request $request)
	{
		$posts = $this->postService->paginate(10, $request);

		return view('welcome', compact('posts'));
	}

	public function single($slug)
	{
		$post = $this->postService->findBySlug($slug);

		if(!$post)
		{
			$user = $this->userService->findByUsername($slug);

			return view('profile', compact('user'));
		}

		return view('single', compact('post'));
	}

	public function tag($slug)
	{
	}
}
