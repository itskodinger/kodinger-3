<?php

namespace App\Services\Pipeline\Post\CommentAddedNotificationPipeline;

use Closure;
use App\NotificationSystem;
use App\Contracts\Post\Concerns\WithMentionedUsers;
use App\Contracts\Post\Markdown\CommentAddedScenario;

class SendMentionedInternalPlatformNotification {

    /**
     * The notification kind.
     *
     * @var  string
     */
    protected const NOTIFICATION_KIND = 'comment_mention';

    /**
     * Handle the pipe.
     *
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle(CommentAddedScenario $scenario, Closure $next) {

        if( ! $scenario instanceof WithMentionedUsers  ) return $next($scenario);

        foreach($scenario->getAllMentionedUsers() as $user) {

            if( $user->id == $scenario->getCommentAuthor()->id ) continue;

            $payload = [
                'post_id' => $scenario->getPost()->id,
                'comment_id' => $scenario->getCommet()->id
            ];

            NotificationSystem::create([
                'from_user_id' => $scenario->getCommentAuthor()->id,
                'to_user_id'   => $user->id,
                'payload'      => json_encode($payload),
                'kind'         => self::NOTIFICATION_KIND
            ]);
        }

        return $next($scenario);
    }
}
