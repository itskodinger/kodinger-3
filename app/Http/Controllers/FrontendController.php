<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;

class FrontendController extends Controller
{
	protected $postService;

	public function __construct(PostService $postService)
	{
		$this->postService = $postService;
	}

	public function index()
	{
		$posts = $this->postService->paginate(10);

		return view('welcome', compact('posts'));
	}

	public function single($slug)
	{
		$post = $this->postService->findBySlug($slug);

		return view('single', compact('post'));
	}

	public function tag($slug)
	{
	}
}
