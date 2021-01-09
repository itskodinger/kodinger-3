<?php

namespace App\Services\Notification\Redirector;

use App\NotificationSystem;
use App\Contracts\Notification\Redirector;
use App\Post;

class PostCommentAddedRedirector implements Redirector {

    /**
     * Generate redirect url.
     *
     * @param  NotificationSystem $notification
     * @return string
     */
    public function generateRedirectUrl(NotificationSystem $notification) {
        $payload = json_decode($notification->payload, true);

        $post = app(Post::class)->find($payload['post_id']);

        return sprintf("%s#discuss-%s",
            route('post.show', [$post->user->username, $post->slug]),
            $payload['comment_id']
        );
    }
}
