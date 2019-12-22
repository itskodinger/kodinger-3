<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use GrahamCampbell\Markdown\Facades\Markdown;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;

    protected $table = 'comments';
    protected $fillable = [
		'reply_id',
		'content',
		'pinned',
		'user_id',
		'post_id',
    ];

    protected $appends = ['time', 'markdown', 'is_mine'];

    public function getTimeAttribute()
    {
    	return $this->created_at->diffForHumans();
    }

    public function getMarkdownAttribute()
    {
        return Markdown::convertToHtml($this->content);
    }

    public function getIsMineAttribute()
    {
        return auth()->check() && auth()->id() == $this->user_id;
    }

    public function user()
    {
    	return $this->belongsTo('App\User');
    }

    public function post()
    {
        return $this->belongsTo('App\Post');
    }

    public function reply()
    {
        return $this->belongsTo('App\Comment', 'reply_id')->withTrashed();
    }
}
