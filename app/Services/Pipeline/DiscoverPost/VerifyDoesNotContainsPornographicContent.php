<?php 

namespace App\Services\Pipeline\DiscoverPost;

use Closure;
use App\Services\Post\DiscoverPost;

class VerifyDoesNotContainsPornographicContent {

    /**
     * Handle the pipe.
     * 
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle($passable, Closure $next) {

        $post = $passable->getPost();

        $pages = \nl_array($post->pages);
        $lists = file_get_contents(
            sprintf("%s/%s", storage_path("wordlists"), 'porn.list')
        );

        foreach($pages as $page) {

            $url = parse_url($page);

            if(isset($url['host'])) {
                $domain = $url['host'];

                if(strpos($lists, $domain)) {
                    $passable->setStatus(DiscoverPost::CONTAINS_PORNOGRAPHIC);
                }
            }

        }

        return $next($passable);
    }
}
