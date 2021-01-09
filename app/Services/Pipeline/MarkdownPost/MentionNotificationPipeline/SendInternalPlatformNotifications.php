<?php

namespace App\Services\Pipeline\MarkdownPost\MentionNotificationPipeline;

use Closure;
use App\Contracts\Post\Markdown\MentionNotificationScenario;
use App\NotificationSystem;

class SendInternalPlatformNotifications {

    protected $notificationKind = 'post_mention';

    /**
     * Handle the pipe.
     *
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle(MentionNotificationScenario $scenario, Closure $next) {

        $post = $scenario->getPost();

        if( ! $post->isMarkdownPost() ) return $next($scenario);

        foreach($scenario->getAllMentionedUsers() as $user) {
            $payload = [
                'post_id' => $post->id
            ];

            NotificationSystem::create([
                'from_user_id' => $scenario->getAuthor()->id,
                'to_user_id'   => $user->id,
                'payload'      => json_encode($payload),
                'kind'         => $this->notificationKind
            ]);
        }


        return $next($scenario);
    }
}
