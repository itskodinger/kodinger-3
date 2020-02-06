<?php 

namespace  App\Contracts\Post;

interface PostImage {

    /**
     * Set the image url.
     * 
     * @param  string $imageUrl
     * @return self
     */
    public function setImageUrl($imageUrl);

    /**
     * Set the image caption.
     * 
     * @param  string $caption
     * @return self
     */
    public function setCaption($caption);

    /**
     * Get the image url.
     * 
     * @return string|null
     */
    public function getImageUrl();

    /**
     * Get the image caption.
     * 
     * @return string|null
     */
    public function getCaption();

}