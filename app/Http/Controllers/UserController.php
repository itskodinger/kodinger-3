<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Services\UserService;
use Requests\UserUpdateRequest;

class UserController extends Controller
{
	public $userService;

	public function __construct(UserService $userService)
	{
		$this->userService = $userService;
	}

	public function index()
	{
		$users = $this->userService->paginate(10);

		return view('users.index', compact('users'));
	}

	public function edit($id)
	{
		$user = $this->userService->find($id);
		
		return view('users.edit', compact('user'));
	}

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
}
