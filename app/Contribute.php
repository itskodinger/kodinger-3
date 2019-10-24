<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contribute extends Model
{
	protected $table = 'contributes';
	protected $fillable = [
		'user_id',
		'row_id',
		'model',
		'column_name',
		'value',
		'note',
		'status'
	];

	public function user()
	{
		return $this->belongsTo('App\User');
	}

	public function post()
	{
		return $this->belongsTo('App\Post', 'row_id');
	}
}
