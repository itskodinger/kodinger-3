<?php 

namespace App\Services\Pipeline\DiscoverPost;

use Closure;

class CheckStringOnWordlist {

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
