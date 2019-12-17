<?php

namespace App\Providers;

use App\Services\Post\DiscoverPost;
use App\Services\Post\PostAttribute;
use Illuminate\Support\ServiceProvider;
use App\Contracts\Post\DiscoverPost as DiscoverPostContract;
use App\Contracts\Post\PostAttribute as PostAttributeContract;
use App\Services\Post\Postcard;

class PostServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            DiscoverPostContract::class,
            DiscoverPost::class
        );

        $this->app->bind(
            PostAttributeContract::class,
            PostAttribute::class
        );

        $this->app->bind(
            'postcard',
            Postcard::class
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
