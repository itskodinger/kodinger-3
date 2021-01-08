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

	/**
	 * Construct
	 * @param PostService $postService Post service layer
	 * @param TagService  $tagService  Tag service layer
	 */
	public function __construct(PostService $postService, TagService $tagService)
	{
		$this->postService = $postService;
		$this->tagService = $tagService;
	}

	/**
	 * Index page
	 * @param  Request $request Request
	 * @return view
	 */
    public function index(Request $request)
    {
    	$posts = $this->postService->model()->orderBy('created_at', 'DESC')->paginate(10);

        return view('posts.index', compact('posts'));
    }

    /**
     * Edit post
     * @param  Integer $id Post ID
     * @return view
     */
    public function edit($id)
    {
    	$post = $this->postService->model()->find($id);

        return view('posts.edit', compact('post'));
    }

    /**
     * Create post
     * @return view
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * Store post
     * @param  PostCreateRequest $request Form request
     * @return redirect
     */
	public function store(PostCreateRequest $request)
	{
		$this->postService->create($request);

		flash('Post created successfully');

		return redirect()->route('post.index');
	}

	/**
	 * Update post
	 * @param  Integer            $id     Post ID
	 * @param  PostUpdateRequest $request Form request
	 * @return redirect
	 */
	public function update($id, PostUpdateRequest $request)
	{
		$this->postService->findAndUpdate($id, $request);

		flash('Post updated successfully');

		return redirect()->route('post.index');
	}

	/**
	 * Publish post
	 * @param  Integer $id Post ID
	 * @return redirect
	 */
	public function publish($id)
	{
		$this->postService->publish($id);

		flash('Post published successfully');

		return redirect()->route('post.index');
	}

	/**
	 * Delete post
	 * @param  Integer $id Post ID
	 * @return redirect
	 */
	public function destroy($id)
	{
		$this->postService->delete($id);

		flash('Post deleted successfully')->success();

		if(!auth()->user()->hasRole('admin'))
			return redirect()->route('single', auth()->user()->username);

		return redirect()->route('post.index');
	}
}
