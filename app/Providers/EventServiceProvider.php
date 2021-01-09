<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Events\Post\{
    Discover\DiscoverPostCreated,
    Markdown\MarkdownPostPublished,
    Markdown\MarkdownPostCommentAdded,
    Markdown\MarkdownPostCommentReplied,
};
use App\Listeners\Post\{
    Discover\FetchDiscoverPostUrlPreview,
    Markdown\DispatchMentionNotifications,
    Markdown\DispatchCommentNotification,
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
        MarkdownPostCommentAdded::class => [
            DispatchCommentNotification::class,
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
