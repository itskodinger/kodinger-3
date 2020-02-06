<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PostImage extends Model
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
        'id', 'post_id', 'image_url'
    ];

    /**
     * Get the caption relationship.
     * 
     * @return mixed
     */
    public function caption() {
        return $this->hasOne(PostImageCaption::class);
    }

}
