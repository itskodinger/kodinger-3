<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;
use Services\UserService;
use Services\TagService;
use Services\ContributeService;
use Services\CommentService;
use Services\CommunityService;
use Requests\SettingUpdateRequest;

class FrontendController extends Controller
{
	protected $postService;
	protected $userService;
	protected $contributeService;
	protected $commentService;
	protected $communityService;
	protected $tagService;

	/**
	 * Construct
	 * @param PostService       $postService       Post service layer
	 * @param UserService       $userService       User service layer
	 * @param ContributeService $contributeService Contribute service layer
	 * @param CommentService    $commentService    Comment service layer
	 * @param CommunityService  $communityService  Community service layer
	 * @param TagService        $tagService        Tag service layer
	 */
	public function __construct(
		PostService $postService, 
		UserService $userService, 
		ContributeService $contributeService, 
		CommentService $commentService, 
		CommunityService $communityService,
		TagService $tagService
	)
	{
		$this->postService = $postService;
		$this->userService = $userService;
		$this->contributeService = $contributeService;
		$this->commentService = $commentService;
		$this->communityService = $communityService;
		$this->tagService = $tagService;
	}

	/**
	 * Index page
	 * @param  Request $request Request
	 * @return view
	 */
	public function index(Request $request)
	{
		$posts = $this->postService->content(10, $request);

		if(!$posts)
			return abort(404);

		return view('welcome', compact('posts'));
	}

	/**
	 * Community page
	 * @return view
	 */
	public function community()
	{
		$communities = $this->communityService->paginate();

		return view('community', compact('communities'));
	}

	/**
	 * Discover page
	 * @param  Request $request Request
	 * @return view
	 */
	public function discover(Request $request)
	{
		$posts = $this->postService->discover(10, $request);

		if(!$posts)
			return abort(404);

		return view('discover', compact('posts'));
	}

	/**
	 * About page
	 * @return view
	 */
	public function about()
	{
		return view('about');
	}

	/**
	 * Contact page
	 * @return view
	 */
	public function contact()
	{
		return view('contact');
	}

	/**
	 * Single page (currently: user or post detail)
	 * @param  String  $slug    User's username or post's slug
	 * @param  Request $request Request
	 * @return mix
	 */
	public function single($slug, Request $request)
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

	/**
	 * Profile page: loved posts
	 * @param  String  $slug    User's username
	 * @param  Request $request Request
	 * @return view
	 */
	public function profileLoves($slug, Request $request)
	{
		$user = $this->userService->findByUsername($slug);

		$posts = $this->postService->myLovesBySlug($user, $request);

		if($request->ajax) {
			return response()->json($posts);
		}

		return view('loves', compact('posts', 'user'));
	}

	/**
	 * Profile page: saved posts
	 * @param  Request $request Request
	 * @return view
	 */
	public function profileSaves(Request $request)
	{
		$user = auth()->user();

		$posts = $this->postService->mySavesBySlug($user, $request);

		if($request->ajax) {
			return response()->json($posts);
		}

		return view('saves', compact('posts', 'user'));
	}

	/**
	 * User's discussions page
	 * @param  String $slug User's username
	 * @return view
	 */
	public function discuss($slug)
	{
		$user = $this->userService->findByUsername($slug);
		$comments = $this->commentService->mine($user->id);

		return view('discuss', compact('comments', 'user'));
	}

	/**
	 * User setting page
	 * @return view
	 */
	public function setting()
	{
		$user = auth()->user();

		return view('setting', compact('user'));
	}

	/**
	 * Update setting
	 * @param  SettingUpdateRequest $request Form request
	 * @return redirect
	 */
	public function settingUpdate(SettingUpdateRequest $request)
	{
		$setting = $this->userService->setting($request);

		if(!$setting)
			return redirect()->back()->withErrors();

		flash()->success('Profile berhasil diperbarui');

		return redirect()->back();
	}

	/**
	 * User's contributions page
	 * @param  String $slug User's username
	 * @return view
	 */
	public function contributes($slug)
	{
		$user = $this->userService->findByUsername($slug);
		$contributes = $this->contributeService->byUser($slug);

		return view('contributes', compact('contributes', 'user'));
	}

	/**
	 * User's post contributions page
	 * @param  String $slug User's username
	 * @return view
	 */
	public function contributesMyPosts()
	{
		$user = auth()->user();
		$contributes = $this->contributeService->onMyPosts();

		$myposts = true;

		return view('contributes', compact('contributes', 'user', 'myposts'));
	}

	/**
	 * Search Page
	 * @return view
	 */
	public function search(Request $request)
	{
		$types = search_types();
		$type = $request->type ?? 'post';
		$search = [['name' => 'Search', 'search' => true]];
		$tags = $this->tagService->popular([5, 5]);

		$pluck = $tags->pluck('name')->all();
		$tag = $request->tag;
		if($tag && !in_array($tag, $pluck))
			$tags = array_merge([['name' => $tag]], $tags->toArray());
		else
			$tags = $tags->toArray();

		$tags = array_merge($search, $tags);

		return view('search', compact('types', 'type', 'tags', 'tag'));
	}

	/**
	 * Delete confirmation page
	 * @param  String $slug Post's slug
	 * @return view
	 */
	public function deletePost($slug)
	{
		$post = $this->postService->findBySlug($slug);

		if(!$post->is_mine)
			return abort(404);

		$post_card = optional($post->post_card)->toArray();

		return view('delete_post', compact('post', 'post_card'));
	}

	/**
	 * Create a new post
	 * @return view
	 */
	public function post($id=false)
	{
		if(!auth()->check()) return abort(403);

		if($id) 
		{
			$post = $this->postService->find($id);

			if($post->user_id !== auth()->user()->id && !auth()->user()->can('post-update')) 
				return abort(403);
		}

		return view('post_form');
	}
}
