<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Events\Post\{
    PostCommentAdded,
    Discover\DiscoverPostCreated,
    Markdown\MarkdownPostPublished,
};
use App\Listeners\Post\{
    DispatchPostCommentAddedNotification,
    DispatchPostCommentMentionNotifications,
    Discover\FetchDiscoverPostUrlPreview,
    Markdown\DispatchMentionNotifications,

};

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        DiscoverPostCreated::class => [
            FetchDiscoverPostUrlPreview::class
        ],
        MarkdownPostPublished::class => [
            DispatchMentionNotifications::class,
        ],
        PostCommentAdded::class => [
            DispatchPostCommentAddedNotification::class,
            DispatchPostCommentMentionNotifications::class
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
