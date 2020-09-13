<?php

namespace Services;

use App\UserSetting;

class UserSettingService
{
	public function model()
	{
		return new UserSetting;
	}

	public function sync($user_id, $name, $value, $flag=null, $options=null)
	{
		return $this->model()->updateOrCreate([
			'user_id' => $user_id,
			'name' => $name,
		],
		[
			'value' => $value,
			'flag' => $flag,
			'options' => $options,
		]);
	}
}
