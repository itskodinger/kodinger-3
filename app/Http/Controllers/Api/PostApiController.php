<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Requests\PostDiscoverCreateRequest;
use Requests\PostCreateRequest;
use App\Http\Controllers\Controller;
use Services\PostService;

class PostApiController extends Controller
{
	public $postService;

	/**
	 * Construct
	 * @param PostService $postService Post service layer
	 */
	public function __construct(PostService $postService)
	{
		$this->postService = $postService;
	}

	/**
	 * Create a new post
	 * @param  PostCreateRequest $request [description]
	 * @return JSON
	 */
	public function store(Request $request)
	{
		sleep(5);
		return response()->json(['res' => $request->image->getClientOriginalName()]);
	}

	/**
	 * Get link details: title and URL
	 * @param  Request $request Request
	 * @return JSON
	 */
    public function getLinkInfo(Request $request)
    {
    	$data = get_data($request->url);
    	
    	$doc = new \DOMDocument();
    	@$doc->loadHTML($data);
    	$nodes = $doc->getElementsByTagName('title');
    	$title = determine_page_title($nodes->item(0)->nodeValue, $request->url);

    	return response([
    		'url' => $request->url,
    		'title' => $title
    	], 200);
    }

    /**
     * Posts data
     * @param  Request $request Request
     * @return JSON
     */
	public function posts(Request $request)
	{		
		$posts = $this->postService->content(10, $request);

		return response()->json($posts);
	}

	/**
	 * I forgot about this
	 * @param  Request $request Request
	 * @return JSON
	 */
	public function both(Request $request)
	{
		$posts = $this->postService->both(10, $request);

		return response()->json($posts);
	}

	/**
	 * Discover data
	 * @param  Request $request Request
	 * @return JSON
	 */
	public function discover(Request $request)
	{
		$posts = $this->postService->discover(10, $request);

		return response()->json($posts);
	}

	/**
	 * Store a new discover data
	 * @param  PostDiscoverCreateRequest $request Form request
	 * @return JSON
	 */
	public function storeDiscover(PostDiscoverCreateRequest $request)
	{
		$post = $this->postService->createDiscover($request);

		return response()->json($post);
	}

	/**
	 * Get post details
	 * @param  String  $slug    Post's slug
	 * @param  Request $request Request
	 * @return JSON
	 */
	public function show($slug, Request $request)
	{
		$post = $this->postService->findBySlug($slug, true);

		return response()->json(['data' => $post]);
	}
}
