<?php

use App\Services\Notification\Redirector\PostCommentAddedRedirector;
use App\Services\Notification\Redirector\PostMentionRedirector;

return [
    'post_mention' => PostMentionRedirector::class,
    'post_comment'   => PostCommentAddedRedirector::class,
    'comment_reply'   => PostCommentAddedRedirector::class,
    'comment_mention'   => PostCommentAddedRedirector::class,
];
