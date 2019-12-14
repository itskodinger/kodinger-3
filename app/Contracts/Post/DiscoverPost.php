<?php

namespace App\Contracts\Post;

use App\Post;
use App\Contracts\Post\PostAttribute;

interface DiscoverPost {

    /**
     * Set the Post.
     *
     * @param  Post $post
     * @return self
     */
    public function setPost(Post $post);

    /**
     * Set the post status.
     *
     * @param  string  $status
     * @return self
     */
    public function setStatus($status);

    /**
     * Add post attributes.
     *
     * @param  PostAttribute $attribute
     * @return self
     */
    public function addPostAttribute(PostAttribute $postAttribute);

    /**
     * Get the Post.
     *
     * @return Post|null
     */
    public function getPost();

    /**
     * Get the post status.
     *
     * @return string|null
     */
    public function getStatus();

    /**
     * Get the Post Attributes.
     *
     * @return array
     */
    public function getAttributes();
}
