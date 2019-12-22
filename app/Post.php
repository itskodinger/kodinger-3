<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use GrahamCampbell\Markdown\Facades\Markdown;
use Postcard;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
	use SoftDeletes;
	
	protected $table = 'posts';
	protected $fillable = [
		'title',
		'slug',
		'content',
		'keyword',
		'images',
		'inspirations',
		'pages',
		'tutorials',
		'helps',
		'examples',
		'status',
		'views',
		'user_id',
		'type'
	];

    protected $appends = [
    	'time', 
    	'markdown', 
    	'markdown_truncate', 
    	'is_mine', 
    	'is_post_saved', 
    	'is_post_loved',
    	'post_card'
    ];

    public function getIsPostSavedAttribute()
    {
    	return in_array($this->id, user_post_saves());
    }

    public function getIsPostLovedAttribute()
    {
    	return in_array($this->id, user_post_loves());
    }

    public function getImagesAttribute($value)
    {
    	return nl_array($value);
    }

    public function getInspirationsAttribute($value)
    {
    	return nl_array($value);
    }

    public function getPagesAttribute($value)
    {
    	return nl_array($value);
    }

    public function getTutorialsAttribute($value)
    {
    	return nl_array($value);
    }

    public function getHelpsAttribute($value)
    {
    	return nl_array($value);
    }

    public function getExamplesAttribute($value)
    {
    	return nl_array($value);
    }

    public function getTimeAttribute()
    {
    	return $this->created_at->diffForHumans();
    }

    public function getMarkdownAttribute()
    {
        return Markdown::convertToHtml($this->content ?? '');
    }

    public function getMarkdownTruncateAttribute()
    {
        return utf8_encode(truncate(Markdown::convertToHtml($this->content ?? ''), 100));
    }

    public function getIsMineAttribute()
    {
        return auth()->check() && auth()->id() == $this->user_id;
    }

    public function getPostCardAttribute()
    {
    	if($this->type == 'link') {
	        return Postcard::create($this);
    	}

    	return [];
    }

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

	public function attributes() {
		return $this->hasMany(PostAttribute::class);
	}
}
