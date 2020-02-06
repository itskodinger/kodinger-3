<?php

namespace App\Contracts\Post;

use App\Tag;

interface Post {

    /**
     * Set the post id.
     * 
     * @param  string|int $id
     * @return self
     */
    public function setId($id);

    /**
     * Set the post title.
     * 
     * @param  string $title
     * @return self
     */
    public function setTitle($title = 'Untitled');

    /**
     * Set the post slug.
     * 
     * @param  string $slug
     * @return self
     */
    public function setSlug($slug = null);

    /**
     * Set the Post status.
     * 
     * @param  string $status
     * @return self
     */
    public function setStatus($status);
    
    /**
     * Add tag.
     * 
     * @param  Tag $tag
     * @return self
     */
    public function addTag(Tag $tag);

    /**
     * Add tags.
     * 
     * @param  array<Tag> $tags
     * @return self
     */
    public function addTags(array $tags = []);

    /**
     * Add the design keyword.
     * 
     * @param  string $keyword
     * @return self
     */
    public function addDesignKeyword($keyword = null);

    /**
     * Add Image.
     * 
     * @param  PostImage $postImage
     * @return self
     */
    public function addPostImage(PostImage $postImage);

    /**
     * Add Reference Url.
     * 
     * @param  string $referenceUrl
     * @return self
     */
    public function addReferenceUrl($referenceUrl);

    /**
     * Add Inspiration Url.
     * 
     * @param  string $inspirationUrl
     * @return self
     */
    public function addInspirationUrl($inspirationUrl);

    /**
     * Add Tutorial Url.
     * 
     * @param  string $tutorialUrl
     * @return self
     */
    public function addTutorialUrl($tutorialUrl);

    /**
     * Add Community Url.
     * 
     * @param  string $communityUrl
     * @return self
     */
    public function addCommunityUrl($communityUrl);

    /**
     * Add Demo Url.
     * 
     * @param  string $demoUrl
     * @return self
     */
    public function addDemoUrl($demoUrl);

    /**
     * Get the post id.
     * 
     * @return string|int|null
     */
    public function getId();

    /**
     * Get the Post Title.
     * 
     * @return string|null
     */
    public function getTitle();

    /**
     * Get the Post Slug.
     * 
     * @return string|null
     */
    public function getSlug();

    /**
     * Get the Post status.
     * 
     * @return string|null
     */
    public function getStatus();

    /**
     * Get the post tag.
     * 
     * @return array
     */
    public function getPostTags();

    /**
     * Get the post design keyword.
     * 
     * @return string|null
     */
    public function getDesignKeyword();

    /**
     * Get the Post Images.
     * 
     * @return array
     */
    public function getPostImages();

    /**
     * Get the references url.
     * 
     * @return array
     */
    public function getReferencesUrl();

    /**
     * Get the inspirations url.
     * 
     * @return array
     */
    public function getInspirationsUrl();

    /**
     * Get the tutorials url.
     * 
     * @return array
     */
    public function getTutorialsUrl();

    /**
     * Get the communities url.
     * 
     * @return array
     */
    public function getCommunitiesUrl();

    /**
     * Get the demos url.
     * 
     * @return array
     */
    public function getDemosUrl();

}