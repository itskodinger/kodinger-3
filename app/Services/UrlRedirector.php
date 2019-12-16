<?php 

namespace App\Services;

use App\Exceptions\EmptyUrlException;

class UrlRedirector {

    /**
     * UTM Type Source.
     * 
     * @var string
     */
    public const UTM_SOURCE = 'utm_source';

    /**
     * UTM Type Medium.
     * 
     * @var  string 
     */
    public const UTM_MEDIUM = 'utm_medium';

    /**
     * UTM Type Content.
     * 
     * @var  string
     */
    public const UTM_CONTENT = 'utm_content';

    /**
     * UTM Type Campaign.
     * 
     * @var  string
     */
    public const UTM_CAMPAIGN = 'utm_campaign';

    /**
     * Allowed UTM Types.
     * 
     * @var string $allowedUtm
     */
    protected $allowedUtm = [
        self::UTM_SOURCE,
        self::UTM_MEDIUM,
        self::UTM_CONTENT,
        self::UTM_CAMPAIGN
    ];

    /**
     * The UTM.
     * 
     * @var array $utm
     */
    protected $utm = [];

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
     * Set the URL.
     * 
     * @param  string $url
     * @return self
     */
    public function setUrl($url) {
        $this->url = $url;

        return $this;
    }

    /**
     * Get Url.
     * 
     * @return string|null
     */
    public function getUrl() {

        if(empty($this->utm)) return $this->url;

        return sprintf("%s?%s", $this->url, http_build_query($this->utm));
    }

    /**
     * Get Encrypted Url.
     * 
     * @return string|null
     */
    public function getEncryptedUrl() {
        if(!is_null($this->url)) return encrypt($this->getUrl());
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

    /**
     * Add UTM parameter.
     * 
     * @param  string  $utmValue
     * @param  string  $utmType
     * @return self
     */
    public function addUTM($utmValue, $utmType) {
        if( ! isset($utmType, $this->allowedUtm)) return $this;

        $this->utm[$utmType] = $utmValue;

        return $this;
    }

    /**
     * Convert the url to string.
     * 
     * @return string
     */
    public function __toString() {
        return $this->getRedirectorPageUrl();
    }
}