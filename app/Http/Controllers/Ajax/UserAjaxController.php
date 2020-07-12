<?php

namespace App\Http\Controllers\Ajax;

use Services\UserService;
use App\Http\Controllers\Controller;

class UserAjaxController extends Controller
{
	public $userService;

	public function __construct(UserService $userService)
	{
		$this->userService = $userService;
	}

	public function index()
	{
		$users = $this->userService->userList(16);

		return response()->json($users);
	}
}