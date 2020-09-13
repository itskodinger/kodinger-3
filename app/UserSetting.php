<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSetting extends Model
{
	protected $table = 'settings';
	protected $fillable = ['user_id', 'name', 'value', 'flag', 'options'];
}
