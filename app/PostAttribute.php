<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostAttribute extends Model
{
    /**
     * Define the fillable attributes.
     * 
     * @var  array $fillable
     */
    protected $fillable = [
        'post_id', 'key', 'value', 'description', 'kind', 'escaped'
    ];

}
