<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Services\PostService;

class PostApiController extends Controller
{
	public $postService;

	public function __construct(PostService $postService)
	{
		$this->postService = $postService;
	}

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

	public function posts(Request $request)
	{		
		$posts = $this->postService->content(10, $request);

		return response()->json($posts);
	}

	public function both(Request $request)
	{
		$posts = $this->postService->both(10, $request);

		return response()->json($posts);
	}

	public function discover(Request $request)
	{
		$posts = $this->postService->discover(10, $request);

		return response()->json($posts);
	}

	public function show($slug, Request $request)
	{
		$post = $this->postService->findBySlug($slug, true);

		return response()->json(['data' => $post]);
	}
}
