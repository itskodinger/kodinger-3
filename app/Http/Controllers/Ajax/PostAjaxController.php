<?php

namespace App\Http\Controllers\Ajax;

use App\Events\Post\Markdown\MarkdownPostPublished;
use Illuminate\Http\Request;
use Requests\PostDiscoverCreateRequest;
use Requests\PostCreateRequest;
use Requests\PostUpdateRequest;
use Requests\PostCheckSlugRequest;
use Requests\PostUploadImageRequest;
use Requests\PostPublishRequest;
use App\Http\Controllers\Controller;
use Services\PostService;
use Illuminate\Support\Str;
use App\Utils\Kdgrdown;

class PostAjaxController extends Controller
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
		return response()->json(['status' => false, 'message' => 'Slug available to use']);
	}

	/**
	 * Create a new post
	 * @param  Request $request
	 * @return JSON
	 */
	public function store(PostCreateRequest $request)
	{
		$post = $this->postService->create($request, [
			'id' => Str::uuid(),
			'public_folder' => auth()->user()->id . Str::random(10)
		]);

		if(!$post)
		{
			return response()->json([
				'status' => false
			])->status(500);
		}

		return response()->json([
			'status' => true,
			'data' => [
				'id' => $post->id,
				'public_folder' => $post->public_folder
			]
		]);
	}

	/**
	 * Update post
	 * @param  Request $request
	 * @param  String  $id
	 * @return JSON
	 */
	public function update(Request $request, $id)
	{
		$post = $this->postService->findAndUpdate($id, $request);

		if(!$post)
		{
			return response()->json([
				'status' => false
			])->status(500);
		}

		return response()->json([
			'status' => true
		]);
	}

	/**
	 * Publish post
	 * @param  PostPublishRequest $request
	 * @param  String  $id
	 * @return JSON
	 */
	public function publish(PostPublishRequest $request, $id)
	{
		$post = $this->postService->publish($id, $request);

		if(!$post)
		{
			return response()->json([
				'status' => false
			])->status(500);
		}

		return response()->json([
			'status' => true
		]);
	}

	/**
	 * Upload post image
	 * @param  PostUploadImageRequest $request
	 * @return JSON
	 */
	public function uploadImage(PostUploadImageRequest $request)
	{
		$image = $this->postService->uploadImage($request);

		return response()->json([
			'status' => true,
			'data' => $image
		]);
	}

	/**
	 * Delete post image
	 * @param  Request $request
	 * @return JSON
	 */
	public function deleteImage(Request $request)
	{
		// delete image
		$image = $this->postService->deleteImage($request);

		return response()->json([
			'status' => true,
			'message' => 'Image deleted successfully'
		]);
	}

	/**
	 * Edit post
	 * @param  Request $request
	 * @param  String  $id
	 * @return JSON
	 */
	public function edit(Request $request, $id)
	{
		$post = $this->postService->find($id);

		return response()->json(['data' => $post]);
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
     * Parse markdown from client
     *
     * @param Request $request Request
     * @return JSON
     */
    public function markdown(Request $request)
    {
    	return response()->json([
    		'parsed' => (new Kdgrdown(['safe' => true]))->text($request->caption ?? $request->content)
    	]);
    }

    /**
     * Parse markdown from client (Not safe)
     *
     * @param Request $request Request
     * @return JSON
     */
    public function markdownNotSafe(Request $request)
    {
    	return response()->json([
    		'parsed' => (new Kdgrdown())->text($request->caption ?? $request->content)
    	]);
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

	public function timeline(Request $request)
	{
		$posts = $this->postService->timeline(10, $request);

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
		$post = $this->postService->findBySlugAll($slug, true);

		return response()->json(['data' => $post]);
	}
}
