<?php 

namespace App\Services\Pipeline\DiscoverPost;

use Closure;
use App\Services\Post\DiscoverPost;

class VerifyDoesNotContainsPornographicContent {

    /**
     * Ignore this domain list.
     * 
     * @var  array $ignore
     */
    protected $ignore = [
        'dev.to',
        'stackoverflow.com',
        'css-tricks.com',
        'getbootstrap.com',
        'codepen.io',
        'getstisla.com'
    ];

    /**
     * Handle the pipe.
     * 
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle($passable, Closure $next) {

        $post = $passable->getPost();

        $pages = $post->pages;
        $lists = file_get_contents(
            sprintf("%s/%s", storage_path("wordlists"), 'porn.list')
        );

        foreach($pages as $page) {

            $url = parse_url($page);

            if(isset($url['host'])) {
                $domain = $url['host'];

                if(strpos($lists, $domain) && ! in_array($domain, $this->ignore)) {
                    $passable->setStatus(DiscoverPost::CONTAINS_PORNOGRAPHIC);
                }
            }

        }

        return $next($passable);
    }
}
