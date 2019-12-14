<?php

namespace App\Services\Post;

use App\Post;
use App\Contracts\Post\PostAttribute;
use App\Contracts\Post\DiscoverPost as DiscoverPostContract;
use App\Exceptions\PostStatusNotAllowedException;

class DiscoverPost implements DiscoverPostContract {

    /**
     * The Post instance.
     *
     * @var  Post $post
     */
    protected $post;

    /**
     * The status.
     *
     * @var  string $status
     */
    protected $status;

    /**
     * The Post Attributes.
     *
     * @var array $attributes
     */
    protected $attributes = [];

    /**
     * Post status CONTAINS_PORNOGRAPHIC.
     */
    public const CONTAINS_PORNOGRAPHIC = 'CONTAINS_PORNOGRAPHIC';

    /**
     * Post status CONTAINS_BADWORDS.
     */
    public const CONTAINS_BADWORDS = 'CONTAINS_BADWORDS';

    /**
     * Post status UNDER_REVIEW.
     */
    public const UNDER_REVIEW = 'UNDER_REVIEW';

    /**
     * Post status PUBLISHED.
     */
    public const PUBLISHED = 'publish';

    /**
     * Allowed Statusses.
     * 
     * @var  array $allowedStatus
     */
    protected $allowedStatus = [
        self::CONTAINS_BADWORDS,
        self::CONTAINS_PORNOGRAPHIC,
        self::UNDER_REVIEW,
        self::PUBLISHED
    ];

    /**
     * Set the Post.
     *
     * @param  Post $post
     * @return self
     */
    public function setPost(Post $post) {
        $this->post = $post;

        return $this;
    }

    /**
     * Set the post status.
     *
     * @param  string  $status
     * @return self
     */
    public function setStatus($status) {
        if(!in_array($status, $this->allowedStatus)) 
            throw new PostStatusNotAllowedException($status);

        $this->status = $status;

        return $this;
    }

    /**
     * Add post attributes.
     *
     * @param  PostAttribute $attribute
     * @return self
     */
    public function addPostAttribute(PostAttribute $postAttribute) {
        $this->attributes[] = $postAttribute;

        return $this;
    }

    /**
     * Get the Post.
     *
     * @return Post|null
     */
    public function getPost() {
        return $this->post;
    }

    /**
     * Get the post status.
     *
     * @return string|null
     */
    public function getStatus() {
        return $this->status;
    }

    /**
     * Get the Post Attributes.
     *
     * @return array
     */
    public function getAttributes() {
        return $this->attributes;
    }
}
