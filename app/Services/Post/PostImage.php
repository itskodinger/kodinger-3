<?php 

namespace  App\Services\Post;

use App\Contracts\Post\PostImage as PostImageContract;

final class PostImage implements PostImageContract {

    /**
     * The Image Url.
     * 
     * @var  string $imageUrl
     */
    protected $imageUrl;

    /**
     * The Image Caption.
     * 
     * @var  string $caption
     */
    protected $caption;

    /**
     * Set the image url.
     * 
     * @param  string $imageUrl
     * @return self
     */
    public function setImageUrl($imageUrl) {
        $this->imageUrl = $imageUrl;

        return $this;
    }

    /**
     * Set the image caption.
     * 
     * @param  string $caption
     * @return self
     */
    public function setCaption($caption) {
        $this->caption = $caption;

        return $this;
    }

    /**
     * Get the image url.
     * 
     * @return string|null
     */
    public function getImageUrl() {
        return $this->imageUrl;
    }

    /**
     * Get the image caption.
     * 
     * @return string|null
     */
    public function getCaption() {
        return $this->caption;
    }

}