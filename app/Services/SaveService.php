<?php

namespace Services;

use App\Save;

class SaveService 
{
	public function model()
	{
		return new Save;
	}

	public function create($request)
	{
		$input = $request->all();
		$input['user_id'] = auth()->user()->id;

		$check = $this->model()
					->whereUserId($input['user_id'])
					->whereModel($request->model)
					->whereMethod($request->method)
					->whereRowId($request->row_id);

		if($check->count() > 0) {
			$check->delete();
			return false;
		}

		return $this->model()->create($input);
	}
}