<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';
    protected $fillable = [
		'reply_id',
		'content',
		'pinned',
		'user_id',
		'post_id',
    ];

    public function getTimeAttribute()
    {
    	return $this->created_at->diffForHumans();
    }
}
