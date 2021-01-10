<?php

namespace App\Services\Pipeline\Post\CommentAddedNotificationPipeline;

use Closure;
use App\NotificationSystem;
use App\Contracts\Post\Concerns\HasParentComment;
use App\Contracts\Post\Markdown\CommentAddedScenario;

class SendInternalPlatformNotification {

    /**
     * The notification kind.
     *
     * @var  string
     */
    protected const NOTIFICATION_KIND_POST_COMMENT = 'post_comment';

    /**
     * The notification kind.
     *
     * @var  string
     */
    protected const NOTIFICATION_KIND_COMMENT_REPLY = 'comment_reply';

    /**
     * Handle the pipe.
     *
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle(CommentAddedScenario $scenario, Closure $next) {




        $notificationKind = ($scenario instanceof HasParentComment && ! is_null($scenario->getParentComment()))
            ? self::NOTIFICATION_KIND_COMMENT_REPLY
            : self::NOTIFICATION_KIND_POST_COMMENT;

        if(
            $scenario->getCommentAuthor()->id == $scenario->getPostAuthor()->id &&
            $notificationKind == self::NOTIFICATION_KIND_POST_COMMENT
        ) return $next($scenario);

        if(
            $scenario instanceof HasParentComment &&
            ! is_null($scenario->getParentCommentAuthor()) &&
            $scenario->getParentCommentAuthor()->id == $scenario->getCommentAuthor()->id
        ) return $next($scenario);


        if( $notificationKind == self::NOTIFICATION_KIND_POST_COMMENT ) {

            app(NotificationSystem::class)->create([
                'from_user_id' => $scenario->getCommentAuthor()->id,
                'to_user_id'   => $scenario->getPostAuthor()->id,
                'kind'         => $notificationKind,
                'payload'      => json_encode([
                    'post_id'    => $scenario->getPost()->id,
                    'comment_id' => $scenario->getCommet()->id
                ])
            ]);

        }

        if( $notificationKind == self::NOTIFICATION_KIND_COMMENT_REPLY ) {

            app(NotificationSystem::class)->create([
                'from_user_id' => $scenario->getCommentAuthor()->id,
                'to_user_id'   => $scenario->getParentCommentAuthor()->id,
                'kind'         => $notificationKind,
                'payload'      => json_encode([
                    'post_id'    => $scenario->getPost()->id,
                    'comment_id' => $scenario->getCommet()->id
                ])
            ]);
        }

        return $next($scenario);
    }
}
