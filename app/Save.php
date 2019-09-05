<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Save extends Model
{
	protected $table = 'saves';
	protected $fillable = [
		'model',
		'method',
		'row_id',
		'user_id',
	];
}
