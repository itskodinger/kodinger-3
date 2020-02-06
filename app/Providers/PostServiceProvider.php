<?php

namespace App\Providers;

use App\Services\Post\DiscoverPost;
use App\Services\Post\PostAttribute;
use Illuminate\Support\ServiceProvider;
use App\Contracts\Post\Post as PostContract;
use App\Contracts\Post\PostImage as PostImageContract;
use App\Contracts\Post\DiscoverPost as DiscoverPostContract;
use App\Contracts\Post\PostAttribute as PostAttributeContract;
use App\Services\Post\PostImage;
use App\Services\Post\Postcard;
use App\Services\Post\Post;

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

        $this->app->bind(
            PostContract::class,
            Post::Class
        );

        $this->app->bind(
            PostImageContract::class,
            PostImage::class
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
