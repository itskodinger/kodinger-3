<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\UserService;
use Requests\UserUpdateRequest;

class UserController extends Controller
{
	public $userService;

	/**
	 * Construct
	 * @param UserService $userService User service layer
	 */
	public function __construct(UserService $userService)
	{
		$this->userService = $userService;
	}

	/**
	 * Index page
	 * @return view
	 */
	public function index()
	{
		$users = $this->userService->paginate(10);

		return view('users.index', compact('users'));
	}

	/**
	 * Edit page
	 * @param  Integer $id User ID
	 * @return view
	 */
	public function edit($id)
	{
		$user = $this->userService->find($id);
		
		return view('users.edit', compact('user'));
	}

	/**
	 * Update user
	 * @param  UserUpdateRequest $request Form request
	 * @param  Integer           $id      User ID
	 * @return redirect
	 */
	public function update(UserUpdateRequest $request, $id)
	{
		$update = $this->userService->findAndUpdate($request, $id);

		if(!$update)
		{
			flash('Failed')->danger();
			return back();
		}

		flash('Success')->success();
		return redirect()->route('user.index');
	}

	/**
	 * Delete user
	 * @param  Integer $id User ID
	 * @return redirect
	 */
	public function destroy($id)
	{
		$this->userService->destroy($id);

		flash('Success')->success();

		return back();
	}
}
