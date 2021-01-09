<?php

namespace App\Http\Controllers;

use App\NotificationSystem;
use App\Registries\NotificationRedirectorRegistry;
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
    protected $notificationRedirectorRegistry;

	/**
	 * Construct
	 * @param PostService       $postService       Post service layer
	 * @param UserService       $userService       User service layer
	 * @param ContributeService $contributeService Contribute service layer
	 * @param CommentService    $commentService    Comment service layer
	 * @param CommunityService  $communityService  Community service layer
	 * @param TagService        $tagService        Tag service layer
     * @param NotificationRedirectorRegistry $notificationRedirectorRegistry
	 */
	public function __construct(
		PostService $postService,
		UserService $userService,
		ContributeService $contributeService,
		CommentService $commentService,
		CommunityService $communityService,
        TagService $tagService,
        NotificationRedirectorRegistry $notificationRedirectorRegistry
	)
	{
		$this->postService = $postService;
		$this->userService = $userService;
		$this->contributeService = $contributeService;
		$this->commentService = $commentService;
		$this->communityService = $communityService;
		$this->tagService = $tagService;
        $this->notificationRedirectorRegistry = $notificationRedirectorRegistry;
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
	 * Users page
	 * @return view
	 */
	public function users()
	{
		return view('users');
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
	 * Single page (currently: only for user (post moved to singlePost method))
	 * @param  String  $slug    User's username or post's slug
	 * @param  Request $request Request
	 * @return mix
	 */
	public function single($slug, Request $request)
	{
		// temporary redirect
		$post = $this->postService->findBySlugAll($slug, true);
		if($post)
		{
			return redirect()->route('post.show', [$post->user->username, $post->slug]);
		}

		$user = $this->userService->findByUsername($slug);

		if(!$user) return abort(404);

		$posts = $user->posts()->paginate(10);

		return view('profile', compact('user', 'posts'));
	}

	public function singlePost($username, $slug)
	{
		$post = $this->postService->findBySlugAll($slug, true);

		if(!$post || ($post && $post->user->username !== $username))
		{
			return abort(404);
		}

		if(($post->user_id !== auth()->id() && $post->status == 'draft') || $post->type == 'link') return abort(404);

		$posts = $this->postService->getByAuthor($post->user->id);

		if(count($posts) < 2)
		{
			$posts = $this->postService->popular(false);
		}

		return view('single', compact('post', 'posts'));
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
     * Profile page: notifications
     * @param Request $request Request
     * @return view
     */
    public function profileNotifications(Request $request)
    {
        // 'post_mention', 'post_comment', 'post_like', 'comment_mention', 'comment_reply'

        $user = auth()->user();

        $notifications = $user->notifications()->latest()->get();

        return view('notifications', compact('notifications', 'user'));
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

		if(is_array($setting) && isset($setting['error']) && $setting['error'] === true)
			return redirect()->back()->withErrors($setting['msg']);

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
		$datasources = search_datasource();
		$datasource = $request->datasource ?? 'post';
		$search = [['name' => 'Search', 'search' => true]];
		$tags = $this->tagService->popular([5, 5]);

		$pluck = $tags->pluck('name')->all();
		$tag = $request->tag;

		$tag_check = $this->tagService->exists($tag);

		if($tag && !$tag_check) return abort(404);

		if($tag && !in_array($tag, $pluck))
			$tags = array_merge([['name' => $tag]], $tags->toArray());
		else
			$tags = $tags->toArray();

		$tags = array_merge($search, $tags);

		return view('search', compact('datasources', 'datasource', 'tags', 'tag'));
	}

	/**
	 * Delete confirmation page
	 * @param  String $slug Post's slug
	 * @return view
	 */
	public function deletePost($slug)
	{
		$post = $this->postService->findBySlugAll($slug);

		if(!auth()->check() || (!$post->is_mine && !auth()->user()->can('post-update')))
			return abort(404);

		$post_card = optional($post->post_card)->toArray();

		return view('delete_post', compact('post', 'post_card'));
	}

	/**
	 * Create a new post
	 * @return view
	 */
	public function postSlide($id=false)
	{
		if(!auth()->check()) return abort(403);

		if($id)
		{
			$this->isAllowedEdit($id);
		}

		return view('post_slide');
	}

	/**
	 * New post
	 * @return view
	 */
	public function newPost($type=false)
	{
		return view('post_new', compact('type'));
	}

	private function isAllowedEdit($id)
	{
		$post = $this->postService->find($id);

		if($post->type == 'link') return abort(404);

		if($post->user_id !== auth()->user()->id && !auth()->user()->can('post-update'))
			return abort(403);
	}

	/**
	 * Markdown post
	 * @return view
	 */
	public function postMD($id=false)
	{
		if(!auth()->check()) return abort(403);

		if($id)
		{
			$this->isAllowedEdit($id);
		}

		return view('post_md', compact('id'));
	}

	public function postLink()
	{
		if(!auth()->check()) return abort(403);

		return view('post_link');
	}

	/**
	 * Scenes page
	 * @return  view
	 */
	public function scenes()
	{
		return view('scenes');
	}

	/**
	 * Scene page
	 * @return  view
	 */
	public function scene()
	{
		return view('scene');
	}

    public function openNotification($payload) {
        try {
            $notificationId = decrypt($payload);
            $notification = app(NotificationSystem::class)->findOrFail($notificationId);
        } catch(\Exception $e) {
            return abort(404);
        }

        if( $notification->status == 'UNREAD' ) {
            $notification->update(['status' => 'READ']);
        }

        if( ! $this->notificationRedirectorRegistry->has($notification->kind) )
            return abort(404);

        $redirectUrl = $this->notificationRedirectorRegistry
                            ->get($notification->kind)
                            ->generateRedirectUrl($notification);


        return redirect()->away($redirectUrl);

    }
}
