<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Services\CommunityService;

class CommunityApiController extends Controller
{
	public $communityService;

	public function __construct(communityService $communityService)
	{
		$this->communityService = $communityService;
	}

	public function index(Request $request)
	{
		$communities = $this->communityService->paginate(10);

		return response()->json($communities);
	}
}
