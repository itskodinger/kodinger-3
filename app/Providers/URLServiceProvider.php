<?php

namespace App\Providers;

use App\Services\UrlRedirector;
use Illuminate\Support\ServiceProvider;

class URLServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'url-redirector',
            UrlRedirector::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
