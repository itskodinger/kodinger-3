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
    Markdown\MarkdownPostCommentReplied,
};
use App\Listeners\Post\{
    DispatchPostCommentAddedNotification,
    Discover\FetchDiscoverPostUrlPreview,
    Markdown\DispatchMentionNotifications,
    Markdown\DispatchCommentRepliedNotification,

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
        ],
        MarkdownPostCommentReplied::class => [
            DispatchCommentRepliedNotification::class,
        ]
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
