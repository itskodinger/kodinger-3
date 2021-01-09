<?php

namespace App\Listeners\Post\Markdown;

use App\Contracts\Post\Markdown\CommentAddedScenario;
use App\Events\Post\Markdown\MarkdownPostCommentAdded;
use App\Services\Pipeline\MarkdownPost\CommentAddedNotificationPipeline\SendInternalPlatformNotification;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Pipeline\Pipeline;

class DispatchCommentNotification
{

    /**
     * The comment added pipeline.
     *
     * @var  array $pipes
     */
    protected $pipes = [
        SendInternalPlatformNotification::class
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
     * @param  MarkdownPostCommentAdded  $event
     * @return void
     */
    public function handle(MarkdownPostCommentAdded $event)
    {
        $comment = $event->comment;
        $post    = $event->post;

        $commentAddedScenario = app(CommentAddedScenario::class)
                                    ->setPost($post)
                                    ->setPostAuthor($post->user)
                                    ->setComment($comment)
                                    ->setCommentAuthor($comment->user);

        app(Pipeline::class)
            ->send($commentAddedScenario)
            ->through($this->pipes)
            ->thenReturn();
    }
}
