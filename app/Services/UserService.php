<?php

namespace Services;

use App\User;

class UserService
{
	public function model()
	{
		return new User;
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