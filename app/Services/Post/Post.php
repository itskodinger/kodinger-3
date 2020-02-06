<?php

namespace App\Services\Post;

use Str;
use App\Tag;
use App\Contracts\Post\PostImage;
use App\Contracts\Post\Post as PostContract;

final class Post implements PostContract {

    /**
     * The Post id.
     * 
     * @var  string|integer $id
     */
    protected $id;

    /**
     * The Post Title.
     * 
     * @var  string $title
     */
    protected $title;

    /**
     * The Post Slug.
     * 
     * @var  string $slug
     */
    protected $slug;

    /**
     * The Post status.
     * 
     * @var  string $status
     */
    protected $status;

    /**
     * The Post Tags.
     * 
     * @var  array<Tag> $tags
     */
    protected $tags = [];

    /**
     * The Post design keyword.
     * 
     * @var  string $designKeyword
     */
    protected $designKeyword;

    /**
     * The reference url list.
     * 
     * @var  array<string> $referencesUrl
     */
    protected $referencesUrl = [];

    /**
     * The inspiration url list.
     * 
     * @var  array<string> $inspirationsUrl
     */
    protected $inspirationsUrl = [];

    /**
     * The tutorial url list.
     * 
     * @var  array<string> $tutorialsUrl
     */
    protected $tutorialsUrl = [];

    /**
     * The communities url list.
     * 
     * @var  array<string> $communitiesUrl
     */
    protected $communitiesUrl = [];

    /**
     * The demo url list.
     * 
     * @var  array<string> $demosUrl
     */
    protected $demosUrl = [];

    /**
     * Set the post id.
     * 
     * @param  string|int $id
     * @return self
     */
    public function setId($id) {
        $this->id = $id;

        return $this;
    }

    /**
     * Set the Post status.
     * 
     * @param  string $status
     * @return self
     */
    public function setStatus($status) {
        $this->status = $status;

        return $this;
    }

    /**
     * Set the post title.
     * 
     * @param  string $title
     * @return self
     */
    public function setTitle($title = 'Untitled') {
        $this->title = $title;

        return $this;
    }

    /**
     * Set the post slug.
     * 
     * @param  string $slug
     * @return self
     */
    public function setSlug($slug = null) {
        $this->slug = Str::slug($slug);

        return $this;
    }
    
    /**
     * Add tag.
     * 
     * @param  Tag $tag
     * @return self
     */
    public function addTag(Tag $tag) {
        $this->tags[] = $tag;

        return $this;
    }

    /**
     * Add tags.
     * 
     * @param  array<Tag> $tags
     * @return self
     */
    public function addTags(array $tags = []) {
        $validTags = array_filter($tags, function($tag) {
            return $tag instanceof Tag;
        });

        $this->tags = array_merge($this->tags, $validTags);

        return $this;
    }

    /**
     * Add the design keyword.
     * 
     * @param  string $keyword
     * @return self
     */
    public function addDesignKeyword($keyword = null) {
        $this->designKeyword = $keyword;

        return $this;
    }

    /**
     * Add Image.
     * 
     * @param  PostImage $postImage
     * @return self
     */
    public function addPostImage(PostImage $postImage) {
        $this->postImages[] = $postImage;

        return $this;
    }

    /**
     * Add Reference Url.
     * 
     * @param  string $referenceUrl
     * @return self
     */
    public function addReferenceUrl($referenceUrl) {
        $this->referencesUrl[] = $referenceUrl;

        return $this;
    }

    /**
     * Add Inspiration Url.
     * 
     * @param  string $inspirationUrl
     * @return self
     */
    public function addInspirationUrl($inspirationUrl) {
        $this->inspirationsUrl[] = $inspirationUrl;
    }

    /**
     * Add Tutorial Url.
     * 
     * @param  string $tutorialUrl
     * @return self
     */
    public function addTutorialUrl($tutorialUrl) {
        $this->tutorialsUrl[] = $tutorialUrl;

        return $this;
    }

    /**
     * Add Community Url.
     * 
     * @param  string $communityUrl
     * @return self
     */
    public function addCommunityUrl($communityUrl) {
        $this->communitiesUrl[] = $communityUrl;

        return $this;
    }

    /**
     * Add Demo Url.
     * 
     * @param  string $demoUrl
     * @return self
     */
    public function addDemoUrl($demoUrl) {
        $this->demosUrl[] = $demoUrl;

        return $this;
    }

    /**
     * Get the post id.
     * 
     * @return string|int|null
     */
    public function getId() {
        return $this->id;
    }

    /**
     * Get the Post Title.
     * 
     * @return string|null
     */
    public function getTitle() {
        return $this->title;
    }

    /**
     * Get the Post Slug.
     * 
     * @return string|null
     */
    public function getSlug() {
        return $this->slug;
    }

    /**
     * Get the Post status.
     * 
     * @return string|null
     */
    public function getStatus() {
        return $this->status;
    }

    /**
     * Get the post tag.
     * 
     * @return array
     */
    public function getPostTags() {
        return $this->tags;
    }

    /**
     * Get the post design keyword.
     * 
     * @return string|null
     */
    public function getDesignKeyword() {
        return $this->designKeyword;
    }

    /**
     * Get the Post Images.
     * 
     * @return array
     */
    public function getPostImages() {
        return $this->postImages;
    }

    /**
     * Get the references url.
     * 
     * @return array
     */
    public function getReferencesUrl() {
        return $this->referencesUrl;
    }

    /**
     * Get the inspirations url.
     * 
     * @return array
     */
    public function getInspirationsUrl() {
        return $this->inspirationsUrl;
    }

    /**
     * Get the tutorials url.
     * 
     * @return array
     */
    public function getTutorialsUrl() {
        return $this->tutorialsUrl;
    }

    /**
     * Get the communities url.
     * 
     * @return array
     */
    public function getCommunitiesUrl() {
        return $this->communitiesUrl;
    }

    /**
     * Get the demos url.
     * 
     * @return array
     */
    public function getDemosUrl() {
        return $this->demosUrl;
    }

}