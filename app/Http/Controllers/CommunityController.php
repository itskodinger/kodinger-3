<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\CommunityService;
use Requests\CommunityCreateRequest;
use Requests\CommunityUpdateRequest;

class CommunityController extends Controller
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
	 * Index page
	 * @return view
	 */
    public function index()
    {
    	$communities = $this->communityService->paginate();

        return view('communities.index', compact('communities'));
    }

    /**
     * Edit community
     * @param  Integer $id Community ID
     * @return view
     */
    public function edit($id)
    {
    	$community = $this->communityService->model()->find($id);

        return view('communities.edit', compact('community'));
    }

    /**
     * Create community
     * @return view
     */
    public function create()
    {
        return view('communities.create');
    }

    /**
     * Store community
     * @param  CommunityCreateRequest $request Form request
     * @return redirect
     */
	public function store(CommunityCreateRequest $request)
	{
		$this->communityService->create($request);

		flash('Community created successfully');

		return redirect()->route('community.index');
	}

	/**
	 * Update community
	 * @param  Integer                 $id      Community ID
	 * @param  CommunityUpdateRequest $request  Form request
	 * @return redirect
	 */
	public function update($id, CommunityUpdateRequest $request)
	{
		$this->communityService->findAndUpdate($id, $request);

		flash('Community updated successfully');

		return redirect()->route('community.index');
	}

	/**
	 * Delete community
	 * @param  Integer $id Community ID
	 * @return redirect
	 */
	public function destroy($id)
	{
		$this->communityService->delete($id);

		flash('Community deleted successfully')->success();

		return redirect()->route('community.index');
	}
}
