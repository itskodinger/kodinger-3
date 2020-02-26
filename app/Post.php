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
        'pages_object',
        'examples_object',
        'helps_object',
        'tutorials_object',
        'content_object',
        'post_type',
        'thumbnail',
        'thumbnail_type',
        'thumbnail_is_video',
        'first_slide_media',
        'first_slide_caption',
        'is_single_caption'
    ];

    public function getTitleAttribute($value)
    {
        return e($value);
    }

    public function getIsSingleCaptionAttribute()
    {
        if($this->type == 'link') return false;

        return optional($this->first_slide)->single_caption ? true : false;
    }

    public function getFirstSlideAttribute()
    {
        if($this->type == 'link') return false;

        $content = $this->content_object;
        if(!$content) return false;
        $first_slide = $content[0];

        return $first_slide;
    }

    public function getThumbnailAttribute()
    {
        if($this->type == 'link') return false;

        return $this->first_slide->video_thumbnail_url ?? $this->first_slide->url ?? '';
    }

    public function getThumbnailTypeAttribute()
    {
        if($this->type == 'link') return false;

        return pathinfo($this->thumbnail, PATHINFO_EXTENSION);
    }

    public function getThumbnailIsVideoAttribute()
    {
        if($this->type == 'link') return false;

        return is_video($this->thumbnail) ? true : false;
    }

    public function getFirstSlideMediaAttribute()
    {
        if($this->type == 'link') return false;

        return $this->first_slide->video_thumbnail_url ?? $this->first_slide->url ?? '';
    }

    public function getFirstSlideCaptionAttribute()
    {
        if($this->type == 'link') return false;

        return count($this->content_object) > 0 ? ($this->content_object[0]->caption ?? '') : '';
    }

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

    public function getImagesAttribute($value)
    {
    	return nl_array($value);
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
            $new_content_object = [];
            foreach($content_object as $k => $content)
            {
                $new_content_object[$k] = $content;
                if(isset($content->caption))
                {
                    $new_content_object[$k]->caption_raw = $content->caption;
                    $new_content_object[$k]->caption = $content->caption ? Markdown::convertToHtml($content->caption) : '';
                }
            }

            return $new_content_object;
        }else{
            return [];
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
        $image = $this->thumbnail;

        $filename = pathinfo($image, PATHINFO_FILENAME);
        $extension = pathinfo($image, PATHINFO_EXTENSION);
        $dir = pathinfo($image, PATHINFO_DIRNAME);

        return $dir . '/px/' . $filename .'.'. $extension;
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
