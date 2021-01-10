<?php 

namespace App\Services\Pipeline\Post\CommentAddedNotificationPipeline;

use Closure;

class SendCommentRepliedInternalPlatformNotification {

    /**
     * Handle the pipe.
     * 
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle($passable, Closure $next) {

        //

        return $next($passable);
    }
}
