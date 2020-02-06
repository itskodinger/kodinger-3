<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PostImageCaption extends Model
{

    use SoftDeletes;

    /**
     * Disable the incrementing.
     * 
     * @var  bool
     */
    public $incrementing = false;
    /**
     * Define the fillable attributes for the model.
     * 
     * @var  array $fillable
     */
    protected $fillable = [
        'id', 'post_image_id', 'caption'
    ];

    /**
     * Get the post image relationship.
     * 
     * @return mixed
     */
    public function image() {
        return $this->belongsTo(PostImage::class);
    }
}
