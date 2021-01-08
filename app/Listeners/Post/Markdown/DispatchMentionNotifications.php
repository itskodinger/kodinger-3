<?php

namespace App\Listeners\Post\Markdown;

use Illuminate\Pipeline\Pipeline;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Events\Post\Markdown\MarkdownPostPublished;
use App\Contracts\Post\Markdown\MentionNotificationScenario;
use App\Services\Pipeline\MarkdownPost\MentionNotificationPipeline\ParseMentionedUsers;
use App\Services\Pipeline\MarkdownPost\MentionNotificationPipeline\SendEmailNotifications;
use App\Services\Pipeline\MarkdownPost\MentionNotificationPipeline\SendInternalPlatformNotifications;

class DispatchMentionNotifications
{
    /**
     * The Notification Pipeline.
     *
     * @var  array $pipes
     */
    protected $pipes = [
        ParseMentionedUsers::class,
        SendInternalPlatformNotifications::class,
        SendEmailNotifications::class,
    ];

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  MarkdownPostPublished  $event
     * @return void
     */
    public function handle(MarkdownPostPublished $event)
    {
        $post = $event->post;

        $mentionNotificationScenario = app(MentionNotificationScenario::class)
                                            ->setAuthor($post->user)
                                            ->setPost($post);

        app(Pipeline::class)
            ->send($mentionNotificationScenario)
            ->through($this->pipes)
            ->thenReturn();
    }
}
