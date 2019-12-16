<?php 

namespace App\Services;

use App\Exceptions\EmptyUrlException;

class UrlRedirector {

    /**
     * The Target Url.
     * 
     * @var  string $url
     */
    protected $url;

    /**
     * The Url Referer.
     * 
     * @var  string $referer
     */
    protected $referer;

    /**
     * Build the class.
     * 
     * @param  string $url
     * @return void
     */
    public function __construct($url) {
        $this->url = $url;
    }

    /**
     * Get Url.
     * 
     * @return string|null
     */
    public function getUrl() {
        return $this->url;
    }

    /**
     * Get Encrypted Url.
     * 
     * @return string|null
     */
    public function getEncryptedUrl() {
        if(!is_null($this->url)) return encrypt($this->url);
    }

    /**
     * Add Referer.
     * 
     * @param  string $referer
     * @return self 
     */
    public function addReferer($referer) {
        $this->referer = $referer;

        return $this;
    }

    /**
     * Redirect to RedirectorPage.
     * 
     * @return Illuminate\Http\Response
     * @throws EmptyUrlException         Throwed when the URL is empty.
     */
    public function toRedirectorPage() {
        return redirect($this->getRedirectorPageUrl());
    }

    /**
     * Get redirector URL.
     * 
     * @return string
     * @throws EmptyUrlException         Throwed when the URL is empty.
     */
    public function getRedirectorPageUrl() {
        if(is_null($this->url)) throw new EmptyUrlException();

        return route('leave.kodinger', ['q' => $this->getEncryptedUrl()]);
    }
}