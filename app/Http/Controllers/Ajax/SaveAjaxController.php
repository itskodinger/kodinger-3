<?php

namespace App\Http\Controllers\Ajax;

use Services\SaveService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SaveAjaxController extends Controller
{
    public $saveService;

    /**
     * Construct
     * @param SaveService $saveService Save service layer
     */
    public function __construct(SaveService $saveService)
    {
        $this->saveService = $saveService;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $save = $this->saveService->create($request);

        return response([
            'data' => $save,
            'status' => true,
            'saved' => is_object($save) ? true : false
        ], 200);
    }
}
