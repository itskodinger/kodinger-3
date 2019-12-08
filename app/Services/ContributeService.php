<?php

namespace Services;

use App\Contribute;
use Services\UserService;

class ContributeService
{
	protected $userService;

	public function __construct(UserService $userService)
	{
		$this->userService = $userService;
	}

	public function model()
	{
		return Contribute::with(['user', 'post']);
	}

	public function find($id)
	{
		return $this->model()->find($id);
	}

	public function paginate($num=10, $instance=false)
	{
		$contributes = ($instance ? $instance : $this->model())->whereStatus(request()->status ?? 'draft');

		$contributes = $contributes->orderBy('created_at', 'desc')->paginate($num);

		return $contributes;
	}

	public function byUser($user)
	{
		$user = $this->userService->findByUsername($user);
		$contributes = $this->paginate(10, $this->model()->whereUserId($user->id));

		return $contributes;
	}

	public function create($request)
	{
		if(!is_array($request))
		{
			$input = $request->all();
			$input['status'] = 'draft';
			$input['user_id'] = auth()->user()->id;			
		}else{
			$input = $request;
		}

		$contribute = $this->model()->create($input);

		return $contribute;
	}

	public function findAndUpdate($id, $request)
	{
		if(is_array($request))
			$input = $request;
		else
			$input = $request->all();
	
		$data = $this->model()->find($id);

		$data->update($input);

		return $data;
	}

	public function merge($id)
	{
		$contribute = $this->find($id);

		$model = $contribute->model;

		$column = $contribute->column_name;
		$row = $model::find($contribute->row_id);
		$value = ($row->{$column} ? $row->{$column} . "\r\n" : '') . rtrim($contribute->value, "\r\n");

		$row->update([
			$column => $value
		]);

		return $contribute->update([
			'status' => 'merged',
			'note' => 'Merged by ' . auth()->user()->name . ' (#' . auth()->user()->id . ')'
		]);
	}

	public function reject($id, $request)
	{
		return $this->findAndUpdate($id, [
			'note' => $request->note,
			'status' => 'rejected'
		]);
	}

	public function destroy($id)
	{
		return $this->find($id)->delete();
	}
}
