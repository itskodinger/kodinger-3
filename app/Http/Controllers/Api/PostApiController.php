<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Requests\PostDiscoverCreateRequest;
use Requests\PostCreateRequest;
use Requests\PostCheckSlugRequest;
use App\Http\Controllers\Controller;
use Services\PostService;
use Illuminate\Support\Str;

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
	 * Check slug
	 * @param  Request $request
	 * @return JSON
	 */
	public function checkSlug(PostCheckSlugRequest $request) 
	{
		$slug = $request->slug;

		if($this->postService->checkSlug($slug))
		{
			return response()->json(['status' => true, 'message' => 'Slug already exists']);
		}

		return response()->json(['status' => false, 'message' => 'Slug available to use']);
	}

	/**
	 * Create a new post
	 * @param  Request $request [description]
	 * @return JSON
	 */
	public function store(Request $request)
	{
		$input = $request->all();
		$id = $input['id'] ?? false;

		if(!$id) {
			$id = Str::uuid();
			$input['id'] = $id;

			// create new post
			// code here
		}

		// update post
		// code here

		return response()->json([
			'status' => true,
			'data' => $input
		]);
	}

	/**
	 * Upload post image
	 * @param  Request $request [description]
	 * @return JSON
	 */
	public function uploadImage(Request $request)
	{
		$public_folder = $request->public_folder;
		$slug = $request->slug;
		$user = auth()->user();
		// post id
		$id = $request->id;

		// create post
		if(!$id)
		{
			$id = Str::uuid();

			// creating post
			// code here
		}

		if(!$public_folder)
		{
			$public_folder = $slug ?? $user->username . '-' . uniqid();
		}

		$name = $request->image->getClientOriginalName();
		$path = $public_folder . '/' . $name;
		$url = $path; // change letter

		// upload image
		// code here

		sleep(2);

		return response()->json([
			'post_id' => $id,
			'public_folder' => $public_folder,
			'name' => $name,
			'url' => $url,
			'path' => $path,
		]);
	}

	/**
	 * Delete post image
	 * @param  Request $request [description]
	 * @return JSON
	 */
	public function deleteImage(Request $request)
	{
		$public_folder = $request->public_folder;

		// delete image
		// code here
		sleep(2);
		
		return response()->json([
			'status' => true,
			'message' => 'Image deleted successfully'
		]);
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
