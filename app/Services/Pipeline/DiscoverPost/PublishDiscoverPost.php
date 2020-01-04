<?php 

namespace App\Services\Pipeline\DiscoverPost;

use Closure;
use App\PostAttribute;
use App\Contracts\Post\PostAttribute as PostAttributeContract;

class PublishDiscoverPost {

    /**
     * Handle the pipe.
     * 
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle($passable, Closure $next) {

        $post       = $passable->getPost();
        $attributes = $passable->getAttributes();

        foreach($attributes as $attribute) {

            if($attribute instanceof PostAttributeContract) {

                $dd = app(PostAttribute::class)->create([
                    'post_id' => $post->id,
                    'key' => $attribute->getKey(),
                    'value' => $attribute->getValue(),
                    'description' => $attribute->getDescription(),
                    'kind' => $attribute->getKind(),
                    'escaped' => $attribute->getEscaped()
                ]);

            }
        }

        return $next($passable);
    }
}
