<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
	protected $table = 'notifications';
	protected $fillable = [
		'user_id',
		'from_user_id',
		'message',
		'priority',
		'route',
		'route_params',
		'namespace',
	];
}
