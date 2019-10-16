<?php

namespace Services;

use App\User;

class UserService
{
	public function model()
	{
		return new User;
	}

	public function find($id)
	{
		return $this->model()->find($id);
	}

	public function paginate($num=10)
	{
		return $this->model()->paginate($num);
	}

	public function findByUsername($username)
	{
		if(strpos($username, '@') > -1) 
		{
			// remove @ sign
			$username = str_replace('@', '', $username);
		}

		return $this->model()->whereUsername($username)->first();
	}
}