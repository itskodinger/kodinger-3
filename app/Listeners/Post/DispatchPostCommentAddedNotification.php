<?php

namespace App\Listeners\Post;

use Illuminate\Pipeline\Pipeline;
use App\Events\Post\PostCommentAdded;
use App\Contracts\Post\Concerns\HasParentComment;
use App\Contracts\Post\Markdown\CommentAddedScenario;
use App\Services\Pipeline\Post\CommentAddedNotificationPipeline\ParseMentionedUsers;
use App\Services\Pipeline\Post\CommentAddedNotificationPipeline\SendInternalPlatformNotification;
use App\Services\Pipeline\Post\CommentAddedNotificationPipeline\SendMentionedInternalPlatformNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class DispatchPostCommentAddedNotification
{

    /**
     * The comment added pipeline.
     *
     * @var  array $pipes
     */
    protected $pipes = [
        ParseMentionedUsers::class,
        SendInternalPlatformNotification::class,
        SendMentionedInternalPlatformNotification::class
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
    public function handle(PostCommentAdded $event)
    {
        $comment = $event->comment;
        $post    = $event->post;

        $commentAddedScenario = app(CommentAddedScenario::class)
                                    ->setPost($post)
                                    ->setPostAuthor($post->user)
                                    ->setComment($comment)
                                    ->setCommentAuthor($comment->user);

        if( ! is_null($comment->reply) && $commentAddedScenario instanceof HasParentComment ) {
            $commentAddedScenario->setParentComment($comment->reply)
                                 ->setParentCommentAuthor($comment->reply->user);
        }

        app(Pipeline::class)
            ->send($commentAddedScenario)
            ->through($this->pipes)
            ->thenReturn();
    }
}
