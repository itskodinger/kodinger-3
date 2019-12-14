<?php 

namespace App\Services\Pipeline\DiscoverPost;

use Closure;

class VerifyDoesNotContainsBadWords {

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
