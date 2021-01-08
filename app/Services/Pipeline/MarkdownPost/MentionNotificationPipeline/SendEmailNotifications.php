<?php 

namespace App\Services\Pipeline\MarkdownPost\MentionNotificationPipeline;

use Closure;

class SendEmailNotifications {

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
