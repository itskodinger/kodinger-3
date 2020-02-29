<?php

namespace App\Http\Controllers\Ajax;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Services\CommunityService;

class CommunityAjaxController extends Controller
{
	public $communityService;

	/**
	 * Construct
	 * @param communityService $communityService Community service layer
	 */
	public function __construct(communityService $communityService)
	{
		$this->communityService = $communityService;
	}

	/**
	 * Community data
	 * @param  Request $request Request
	 * @return JSON
	 */
	public function index(Request $request)
	{
		$communities = $this->communityService->paginate(8);

		return response()->json($communities);
	}
}
