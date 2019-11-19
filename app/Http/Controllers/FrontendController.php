<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;
use Services\UserService;
use Requests\SettingUpdateRequest;

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

			$posts = $user->posts()->paginate(10);

			return view('profile', compact('user', 'posts'));
		}

		return view('single', compact('post'));
	}

	public function setting()
	{
		$user = auth()->user();

		return view('setting', compact('user'));
	}

	public function setting_update(SettingUpdateRequest $request)
	{
		$setting = $this->userService->setting($request);

		if(!$setting)
			return redirect()->back()->withErrors();

		flash()->success('User setting saved successfully');

		return redirect()->back();
	}
}
