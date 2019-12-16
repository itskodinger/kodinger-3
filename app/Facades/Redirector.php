<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class Redirector extends Facade {

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
     * Return the container binding.
     * 
     * @return string
     */
    protected static function getFacadeAccessor() {
        return 'url-redirector';
    }

}