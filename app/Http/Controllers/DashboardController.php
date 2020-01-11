<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
	/**
	 * Dashboard index
	 * @return view
	 */
	public function index()
	{
		return view('dashboard');
	}
}
