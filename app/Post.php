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
        'id',
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
		'type',
        'public_folder'
	];

    protected $appends = [
        'tag_ids',
        'tagify',
    	'time', 
        'blurry_image',
    	'markdown', 
    	'markdown_truncate', 
    	'is_mine', 
    	'is_post_saved', 
    	'is_post_loved',
    	'post_card',
        'pages',
        'pages_object',
        'examples_object',
        'helps_object',
        'tutorials_object',
        'content_object',
        'post_type'
    ];

    public function getPostTypeAttribute()
    {
        return json_decode($this->content) ? 'json' : 'regular';
    }

    public function getIsPostSavedAttribute()
    {
    	return in_array($this->id, user_post_saves());
    }

    public function getIsPostLovedAttribute()
    {
    	return in_array($this->id, user_post_loves());
    }

    public function getRawImagesAttribute()
    {
        return array2nl($this->images);
    }

    public function getImagesAttribute($value)
    {
    	return nl_array($value);
    }

    public function getRawInspirationsAttribute()
    {
        return array2nl($this->inspirations);
    }

    public function getInspirationsAttribute($value)
    {
    	return nl_array($value);
    }

    public function getRawPagesAttribute()
    {
        return array2nl($this->pages);
    }

    public function getPagesAttribute($value)
    {
    	return nl_array($value);
    }

    public function getRawTutorialsAttribute()
    {
        return array2nl($this->tutorials);
    }

    public function getTutorialsAttribute($value)
    {
    	return nl_array($value);
    }

    public function getRawHelpsAttribute()
    {
        return array2nl($this->helps);
    }

    public function getHelpsAttribute($value)
    {
    	return nl_array($value);
    }

    public function getRawExamplesAttribute()
    {
        return array2nl($this->examples);
    }

    public function getExamplesAttribute($value)
    {
    	return nl_array($value);
    }

    public function getTimeAttribute()
    {
    	return $this->created_at->diffForHumans();
    }

    public function getContentObjectAttribute()
    {
        $content_object = json_decode($this->content);

        if($content_object)
        {
            return $content_object;
        }
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

    public function getTagIdsAttribute()
    {
        return $this->tags()->pluck('tag_id');
    }

    public function getTagifyAttribute()
    {
        return $this->hasMany('App\PostTag')
                    ->join('tags', 'post_tags.tag_id', 'tags.id')
                    ->select('tags.name as value', 'id')
                    ->get()
                    ->toArray();
    }

    public function getBlurryImageAttribute()
    {
        if(isset($this->images[0]))
        {
            $image = $this->images[0];

            $filename = pathinfo($image, PATHINFO_FILENAME);
            $extension = pathinfo($image, PATHINFO_EXTENSION);
            $dir = pathinfo($image, PATHINFO_DIRNAME);

            return $dir . '/px/' . $filename .'.'. $extension;
        }
    }

    public function getPagesObjectAttribute()
    {
        return link_nl2obj($this->raw_pages);
    }

    public function getTutorialsObjectAttribute()
    {
        return link_nl2obj($this->raw_tutorials);
    }

    public function getHelpsObjectAttribute()
    {
        return link_nl2obj($this->raw_helps);
    }

    public function getExamplesObjectAttribute()
    {
        return link_nl2obj($this->raw_examples);
    }

	public function user()
	{
		return $this->hasOne('App\User', 'id', 'user_id')->select([
			'id', 
			'name',
			'username',
			'avatar'
		]);
	}

	public function comments()
	{
		return $this->hasMany('App\Comment');
	}

	public function attributes() {
		return $this->hasMany(PostAttribute::class);
	}

    protected $casts = [
        'id' => 'string'
    ];

    public $incrementing = false;
}
