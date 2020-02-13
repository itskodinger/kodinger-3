<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\ContributeService;
use Services\PostService;
use Requests\ContributeCreateRequest;

class ContributeController extends Controller
{
	public $contributeService;
	public $postService;

	/**
	 * Construct
	 * @param ContributeService $contributeService Contribute service layer
	 * @param PostService       $postService       Post service layer
	 */
	public function __construct(ContributeService $contributeService, PostService $postService)
	{
		$this->contributeService = $contributeService;
		$this->postService = $postService;
	}

	/**
	 * Index page
	 * @return view
	 */
	public function index()
	{
		$contributes = $this->contributeService->paginate();

		return view('contribute.index', compact('contributes'));
	}

	/**
	 * Create contribute
	 * @param  Request $request Request
	 * @param  String  $slug    Post slug
	 * @return view
	 */
	public function create(Request $request, $slug)
	{
		$col = $request->col;

		if(!in_array($col, recommend_fields())) return abort(404);

		$post = $this->postService->findBySlug($slug);
		$allowed = $post->user_id == auth()->user()->id ? false : true;

		if(!$post)
			return abort(404);

		return view('contribute.create', compact('post', 'col', 'allowed'));
	}

	/**
	 * Merge contribute data
	 * @param  Request 	$request Request
	 * @param  Integer  $id     Contribute ID
	 * @return redirect
	 */
	public function merge(Request $request, $id)
	{
		$merge = $this->contributeService->merge($id);

		if(!$merge) {
	 		flash('Merge kontribusi gagal.')->error();
			return redirect()->back();
		}

 		flash('Merge kontribusi berhasil.')->success();

		return redirect()->back();
	}

	/**
	 * Reject contribute request
	 * @param  Request 	$request Request
	 * @param  Integer  $id      Contribute ID
	 * @return redirect
	 */
	public function reject(Request $request, $id)
	{
		$merge = $this->contributeService->reject($id, $request);

		if(!$merge) {
	 		flash('Reject kontribusi gagal.')->error();
			return redirect()->back();
		}

 		flash('Reject kontribusi berhasil.')->success();

		return redirect()->back();
	}

	/**
	 * Delete contribute
	 * @param  Integer $id Contribute ID
	 * @return redirect
	 */
	public function destroy($id)
	{
		$this->contributeService->destroy($id);

 		flash('Hapus kontribusi berhasil.')->success();

		return redirect()->back();
	}
}
