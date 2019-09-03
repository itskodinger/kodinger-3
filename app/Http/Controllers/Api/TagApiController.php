<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Services\TagService;

class TagApiController extends Controller
{
	public $tagService;

	public function __construct(TagService $tagService)
	{
		$this->tagService = $tagService;
	}

	public function index()
	{
		return $this->tagService->select();
	}
}