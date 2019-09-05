<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
	protected $table = 'posts';
	protected $fillable = [
		'title',
		'slug',
		'content',
		'images',
		'inspirations',
		'pages',
		'tutorials',
		'helps',
		'examples',
		'status',
		'views',
		'user_id'
	];

	public function tags()
	{
		return $this->hasMany('App\PostTag');
	}

	public function user()
	{
		return $this->hasOne('App\User', 'id', 'user_id');
	}

	public function comments()
	{
		return $this->hasMany('App\Comment');
	}
}
