<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;
use Services\TagService;
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

    public function index(Request $request)
    {
    	$posts = $this->postService->paginate(10, $request);

        return view('posts.index', compact('posts'));
    }

	public function me(Request $request)
	{
		$posts = $this->postService->me(10, $request);

		return response()->json($posts);
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

		if(!auth()->user()->hasRole('admin'))
			return redirect()->route('single', auth()->user()->the_username);

		return redirect()->route('post.index');
	}
}
