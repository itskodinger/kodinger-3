<?php

namespace App\Services\Pipeline\Post\CommentAddedNotificationPipeline;

use Closure;
use App\NotificationSystem;
use App\Contracts\Post\Markdown\CommentAddedScenario;

class SendInternalPlatformNotification {

    /**
     * The notification kind.
     *
     * @var  string
     */
    protected const NOTIFICATION_KIND = 'post_comment';


    /**
     * Handle the pipe.
     *
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle(CommentAddedScenario $scenario, Closure $next) {

        if( $scenario->getCommentAuthor()->id == $scenario->getPostAuthor()->id ) return $next($scenario);

        app(NotificationSystem::class)->create([
            'from_user_id' => $scenario->getCommentAuthor()->id,
            'to_user_id'   => $scenario->getPostAuthor()->id,
            'kind'         => self::NOTIFICATION_KIND,
            'payload'      => json_encode([
                'post_id'    => $scenario->getPost()->id,
                'comment_id' => $scenario->getCommet()->id
            ])
        ]);

        return $next($scenario);
    }
}
