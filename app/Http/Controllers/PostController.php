<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\PostService;

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
        return view('upload');
    }

	public function store(Request $request)
	{
		$this->postService->create($request);

		flash('Post created successfully');

		return redirect()->route('post.index');
	}

	public function update($id, Request $request)
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

	public function recommend(Request $request)
	{
		
	}
}
