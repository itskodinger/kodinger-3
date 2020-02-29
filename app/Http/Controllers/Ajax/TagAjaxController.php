<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Controllers\Controller;
use Services\TagService;
use Illuminate\Http\Request;

class TagAjaxController extends Controller
{
	public $tagService;

	/**
	 * Construct
	 * @param TagService $tagService Tag service layer
	 */
	public function __construct(TagService $tagService)
	{
		$this->tagService = $tagService;
	}

	/**
	 * I forgot about this
	 * @return JSON
	 */
	public function index()
	{
		return $this->tagService->select();
	}

	/**
	 * Search tag by keyword
	 * @param  Request $request Request
	 * @return JSON
	 */
	public function search(Request $request)
	{
		$tags = $this->tagService->search($request->value);

		return response($tags->toArray());
	}
}