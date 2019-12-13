<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\CommunityService;
use Requests\CommunityCreateRequest;
use Requests\CommunityUpdateRequest;

class CommunityController extends Controller
{
	public $communityService;

	public function __construct(communityService $communityService)
	{
		$this->communityService = $communityService;
	}

    public function index()
    {
    	$communities = $this->communityService->paginate();

        return view('communities.index', compact('communities'));
    }

    public function edit($id)
    {
    	$community = $this->communityService->model()->find($id);

        return view('communities.edit', compact('community'));
    }

    public function create()
    {
        return view('communities.create');
    }

	public function store(CommunityCreateRequest $request)
	{
		$this->communityService->create($request);

		flash('Community created successfully');

		return redirect()->route('community.index');
	}

	public function update($id, CommunityUpdateRequest $request)
	{
		$this->communityService->findAndUpdate($id, $request);

		flash('Community updated successfully');

		return redirect()->route('community.index');
	}

	public function destroy($id)
	{
		$this->communityService->delete($id);

		flash('Community deleted successfully')->success();

		return redirect()->route('community.index');
	}
}
