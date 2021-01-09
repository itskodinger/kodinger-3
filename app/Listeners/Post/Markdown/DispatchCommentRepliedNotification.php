<?php

namespace App\Listeners\Post\Markdown;

use App\Events\Post\Markdown\MarkdownPostCommentReplied;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DispatchCommentRepliedNotification
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
     * @param  MarkdownPostCommentReplied  $event
     * @return void
     */
    public function handle(MarkdownPostCommentReplied $event)
    {
        //
    }
}
