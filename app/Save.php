<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Save extends Model
{
	public $incrementing = false;
	protected $table = 'saves';
	protected $fillable = [
		'model',
		'method',
		'row_id',
		'user_id',
	];
}
