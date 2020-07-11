<?php

namespace App\Services\Post;

use App\Post;
use App\PostAttribute;
use Illuminate\Support\Collection;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;

class Postcard implements Arrayable, Jsonable {

    /**
     * The Post data.
     * 
     * @var  Post $post
     */
    public $post;

    /**
     * The Post Attributes.
     * 
     * @var  Collection<PostAttribute> $attributes
     */
    public $attributes = [];

    /**
     * Create from Post.
     * 
     * @param  Post  $post
     * @return self
     */
    public function create(Post $post) {
        $this->post         = $post;
        $this->attributes   = $this->post->attributes;

        return $this;
    }

    /**
     * Get the post title.
     * 
     * @return string
     */
    public function getTitle() {
        $title  = $this->attributes->where('key', 'url-title')->first();

        if($title instanceof PostAttribute) return $title->value;

        return !$this->post->title ? get_title_by_url($this->getUrl()) : $this->post->title;
    }

    /**
     * Get the image thumbnail.
     * 
     * @return  string $image
     */
    public function getThumbnail() {
        $thumbnail = $this->attributes->where('key', 'url-thumbnail')->first();

        if($thumbnail instanceof PostAttribute)  return $thumbnail->value;

        return null;
    }

    /**
     * Get the default image thumbnail.
     * 
     * @return string
     */
    public function getDefaultThumbnail()
    {
        return 'https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/public/utils/404-image.png';
    }

    /**
     * Get the post description.
     * 
     * @return  string
     */
    public function getDescription() {
        $description  = $this->attributes->where('key', 'url-description')->first();

        if($description instanceof PostAttribute) return $description->value;

        return $this->post->content;
    }

    /**
     * Get the post url.
     * 
     * @return string
     */
    public function getPostUrl() {
        return route('post.show', [$this->post->user->username, $this->post->slug]);
    }

    /**
     * Determine if the post has embeddable code.
     * 
     * @return bool
     */
    public function hasEmbeddableCode() {
        $embeddable   = $this->attributes->where('key', 'url-embeddable-code')->first();

        return (bool) ($embeddable instanceof PostAttribute);
    }

    /**
     * Get embeddable code.
     * 
     * @return string
     */
    public function getEmbeddableCode() {
        $embeddable   = $this->attributes->where('key', 'url-embeddable-code')->first();

        if($this->hasEmbeddableCode()) return $embeddable->value;

    }

    private function getTheUrl()
    {
        $url = $this->attributes->where('key', 'url')->first();

        if($url instanceof PostAttribute) return $url->value; 

        if(is_null($this->post->pages)) return $this->post->pages;

        return nl_array_first($this->post->pages);        
    }

    /**
     * Get the Url.
     * 
     * @return string
     */
    public function getUrl() 
    {
        return route('leave.kodinger', ['go' => encrypt($this->post->id . '|' . $this->getTheUrl())]);
    }

    public function getHostname()
    {
        $url = parse_url($this->getTheUrl());

        return $url['host'] ?? 'Unknown';
    }

	/**
     * Get the instance as an array.
     *
     * @return array
     */
    public function toArray() {
        return [
            'hostname'            => $this->getHostname(),
            'url'                 => $this->getUrl(),
            'title'               => $this->getTitle(),
            'thumbnail'           => $this->getThumbnail(),
            'default_thumbnail'   => $this->getDefaultThumbnail(),
            'description'         => $this->getDescription(),
            'post_url'            => $this->getPostUrl(),
            'has_embeddable_code' => (bool) $this->hasEmbeddableCode(),
            'embeddable_code'     => $this->getEmbeddableCode()
        ];
    }

	/**
     * Convert the object to its JSON representation.
     *
     * @param  int  $options
     * @return string
     */
    public function toJson($options = 0) {
        return json_encode($this->toArray());
    }


}
