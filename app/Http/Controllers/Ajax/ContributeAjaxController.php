<?php

namespace App\Http\Controllers\Ajax;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Services\ContributeService;
use Requests\ContributeCreateRequest;

class ContributeAjaxController extends Controller
{

	public $contributeService;

	/**
	 * Construct
	 * @param ContributeService $contributeService Contribute service layer
	 */
	public function __construct(ContributeService $contributeService)
	{
		$this->contributeService = $contributeService;
	}

	/**
	 * Store contribute
	 * @param  ContributeCreateRequest $request Form request
	 * @return redirect
	 */
	public function store(ContributeCreateRequest $request)
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
}
