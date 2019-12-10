<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;
use Services\UserService;
use Services\ContributeService;
use Services\CommentService;
use Requests\SettingUpdateRequest;

class FrontendController extends Controller
{
	protected $postService;
	protected $userService;
	protected $contributeService;
	protected $commentService;

	public function __construct(PostService $postService, UserService $userService, ContributeService $contributeService, CommentService $commentService)
	{
		$this->postService = $postService;
		$this->userService = $userService;
		$this->contributeService = $contributeService;
		$this->commentService = $commentService;
	}

	public function index(Request $request, $tag = false)
	{
		$posts = $this->postService->paginate(10, $request->all() + ['tag' => $tag]);

		if(!$posts)
			return abort(404);

		return view('welcome', compact('posts', 'tag'));
	}

	public function community()
	{
		return view('construction');
	}

	public function discover(Request $request, $tag=false)
	{
		$posts = $this->postService->discover(10, $request->all() + ['tag' => $tag]);

		if(!$posts)
			return abort(404);

		return view('discover', compact('posts'));
	}

	public function about()
	{
		return view('about');
	}

	public function contact()
	{
		return view('contact');
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

	public function profileLoves($slug)
	{
		$user = $this->userService->findByUsername($slug);

		$posts = $user->lovePosts()->with('post')->paginate(10);	

		return view('loves', compact('posts', 'user'));
	}

	public function profileSaves()
	{
		$user = auth()->user();

		$posts = $user->savePosts()->with('post')->paginate(10);	

		return view('loves', compact('posts', 'user'));
	}

	public function discuss($slug)
	{
		$comments = $this->commentService->mine();
		$user = $this->userService->findByUsername($slug);

		return view('discuss', compact('comments', 'user'));
	}

	public function setting()
	{
		$user = auth()->user();

		return view('setting', compact('user'));
	}

	public function settingUpdate(SettingUpdateRequest $request)
	{
		$setting = $this->userService->setting($request);

		if(!$setting)
			return redirect()->back()->withErrors();

		flash()->success('User setting saved successfully');

		return redirect()->back();
	}

	public function contributes($slug)
	{
		$user = $this->userService->findByUsername($slug);
		$contributes = $this->contributeService->byUser($slug);

		return view('contributes', compact('contributes', 'user'));
	}
}
