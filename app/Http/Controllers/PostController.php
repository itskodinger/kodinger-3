<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;
use Services\TagService;
use Requests\PostDiscoverCreateRequest;
use Requests\PostCreateRequest;
use Requests\PostUpdateRequest;

class PostController extends Controller
{
	public $postService;
	public $tagService;

	public function __construct(PostService $postService, TagService $tagService)
	{
		$this->postService = $postService;
		$this->tagService = $tagService;
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

	public function tags(Request $request)
	{
		$tags = $this->tagService->search($request->value);

		return response($tags->toArray());
	}
}
