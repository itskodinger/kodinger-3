<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Community extends Model
{
    protected $table = 'communities';
    protected $fillable = [
    	'user_id',
    	'name',
    	'short_description',
    	'description',
    	'links',
    	'logo',
    	'logo_bg',
    	'member'
    ];

    public function parseUrl()
    {
    	return json_decode($this->links);
    }

    public function getWebsiteAttribute()
    {
    	return optional($this->parseUrl())->website;
    }

    public function getGithubAttribute()
    {
    	return optional($this->parseUrl())->github;
    }

    public function getTwitterAttribute()
    {
    	return optional($this->parseUrl())->twitter;
    }

    public function getFacebookAttribute()
    {
    	return optional($this->parseUrl())->facebook;
    }

    public function getTelegramAttribute()
    {
    	return optional($this->parseUrl())->telegram;
    }
}
