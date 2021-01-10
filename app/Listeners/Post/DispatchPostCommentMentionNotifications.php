<?php

namespace App\Listeners\Post;

use App\Events\Post\PostCommentAdded;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DispatchPostCommentMentionNotifications
{
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
     * @param  PostCommentAdded  $event
     * @return void
     */
    public function handle(PostCommentAdded $event)
    {
        //
    }
}
