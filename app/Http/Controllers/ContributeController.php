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

	public function __construct(ContributeService $contributeService, PostService $postService)
	{
		$this->contributeService = $contributeService;
		$this->postService = $postService;
	}

	public function index()
	{
		$contributes = $this->contributeService->paginate();

		return view('contribute.index', compact('contributes'));
	}

	public function create(Request $request, $slug)
	{
		$col = $request->col;

		if(!in_array($col, recommend_fields())) return abort(404);

		$post = $this->postService->findBySlug($slug);

		if(!$post)
			return abort(404);

		return view('contribute.create', compact('post', 'col'));
	}

	public function links(ContributeCreateRequest $request)
	{
		$links = json_decode($request->links);

		$col = $request->col;

		$linksstr = '';
		foreach($links as $link)
		{
			if($link)
				$linksstr .= $link . "\r\n";
		}

		$contribute = $this->contributeService->create([
			'user_id' => auth()->user()->id,
			'row_id' => $request->id,
			'model' => 'App\\Post',
			'column_name' => $col,
			'value' => $linksstr,
			'note' => '',
			'status' => 'draft'
		]);

		if($contribute)
			return response([
				'success' => true
			], 200);
		else
			return response([
				'success' => false
			], 500);
	}

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

	public function destroy($id)
	{
		$this->contributeService->destroy($id);

 		flash('Hapus kontribusi berhasil.')->success();

		return redirect()->back();
	}
}
