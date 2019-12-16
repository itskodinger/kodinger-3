<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class Postcard extends Facade {

    /**
     * Return the container bindinf value.
     * 
     * @return string
     */
    protected static function getFacadeAccessor() {
        return 'postcard';
    }
}