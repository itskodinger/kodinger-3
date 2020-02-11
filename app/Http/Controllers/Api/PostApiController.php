<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Requests\PostDiscoverCreateRequest;
use Requests\PostCreateRequest;
use Requests\PostUpdateRequest;
use Requests\PostCheckSlugRequest;
use Requests\PostUploadImageRequest;
use App\Http\Controllers\Controller;
use Services\PostService;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

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
		return response()->json(['status' => false, 'message' => 'Slug available to use']);
	}

	/**
	 * Create a new post
	 * @param  Request $request [description]
	 * @return JSON
	 */
	public function store(PostCreateRequest $request)
	{
		$input = $request->all();

		$id = Str::uuid();
		$user = auth()->user();

		$input['id'] = $id;
		$input['public_folder'] = $user->id . Str::random(10);

		// create new post
		$this->postService->create($input);

		return response()->json([
			'status' => true,
			'data' => $input
		]);
	}

	public function update(Request $request, $id) 
	{
		$input = $request->all();

		if($id) {
			$this->postService->findAndUpdate($id, $input);

			return response()->json([
				'status' => true,
				'data' => $input
			]);
		}
	}

	/**
	 * Upload post image
	 * @param  PostUploadImageRequest $request [description]
	 * @return JSON
	 */
	public function uploadImage(PostUploadImageRequest $request)
	{
		$public_folder = $request->public_folder;
		$user = auth()->user();
		// post id
		$id = $request->id;
		$post = $this->postService->find($id);

		$base = 'posts/';
		$name = $request->name;
		$path = $base . $public_folder . '/' . $name;
		$url = space_url($path);

		// Add to content directly => bugs!
		// $size = $request->size;
		// $status = $request->status;
		// $data = [
		// 	'url' => $url,
		// 	'name' => $name,
		// 	'size' => $size,
		// 	'status' => $status,
		// ];
		// $content = $post->content ?? [$data];
		// $post_content = $post->content;
		// $content = ($post_content ?? '') . $name;

		// if(!is_array($content))
		// {
		// 	$content = json_decode($content);
		// 	array_push($content, $data);
		// }

		// $content = json_encode($content);

		// $this->postService->findAndUpdate($id, [
		// 	'content' => $content
		// ]);

		// upload image
		Storage::disk('spaces')->putFileAs($base . $public_folder, $request->image, $name, 'public');

		return response()->json([
			// 'content' => $content,
			// 'post_content' => $post_content,
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
