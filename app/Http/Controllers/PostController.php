<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;
use Requests\PostDiscoverCreateRequest;
use Requests\PostCreateRequest;
use Requests\PostUpdateRequest;

class PostController extends Controller
{
	public $postService;

	public function __construct(PostService $postService)
	{
		$this->postService = $postService;
	}

    public function index()
    {
    	$posts = $this->postService->paginate();

        return view('posts.index', compact('posts'));
    }

    public function edit($id)
    {
    	$post = $this->postService->model()->find($id);

        return view('posts.edit', compact('post'));
    }

    public function create()
    {
        return view('posts.create');
    }

	public function store(PostCreateRequest $request)
	{
		$this->postService->create($request);

		flash('Post created successfully');

		return redirect()->route('post.index');
	}

	public function storeDiscover(PostDiscoverCreateRequest $request)
	{
		$this->postService->createDiscover($request);

		return response(['status' => 'ok'], 200);
	}

	public function update($id, PostUpdateRequest $request)
	{
		$this->postService->findAndUpdate($id, $request);

		flash('Post updated successfully');

		return redirect()->route('post.index');
	}

	public function publish($id)
	{
		$this->postService->publish($id);

		flash('Post published successfully');

		return redirect()->route('post.index');
	}

	public function destroy($id)
	{
		$this->postService->delete($id);

		flash('Post deleted successfully')->success();

		return redirect()->route('post.index');
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
}
