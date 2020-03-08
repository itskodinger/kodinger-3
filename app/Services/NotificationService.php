<?php

namespace App\Services;

use App\Notification;

class NotificationService 
{
	public function create($data)
	{
		if(!is_array($data))
			return abort(500, 'Data must be an array');

		$notification = Notification::create($data);

		return $notification;
	}

	public function notifComment($post, $model)
	{
		return $this->create([
			'user_id' => $post->user_id,
			'from_user_id' => auth()->id,
			'model' => $model,
			'model_id' => $model->id,
			'route' => 'single',
			'route_params' => json_encode(['slug', $post->slug])
		]);
	}
}