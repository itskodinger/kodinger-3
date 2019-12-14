<?php 

namespace App\Services\Pipeline\DiscoverPost;

use Closure;
use App\Services\Post\DiscoverPost;

class SetDiscoverPostStatus {

    /**
     * Handle the pipe.
     * 
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle($passable, Closure $next) {

        $post = $passable->getPost();

        $post->update([
            'status' => (is_null($passable->getStatus()) ? DiscoverPost::PUBLISHED : $passable->getStatus())
        ]);

        return $next($passable);
    }
}
