<?php 

namespace App\Services\Pipeline\DiscoverPost;

use Closure;
use Embed\Embed;
use App\Contracts\Post\PostAttribute;

class GeneratePostAttributes {

    /**
     * Embeddable providers.
     * 
     * @var array $embedableProviders
     */
    protected $embedableProviders = [
        'youtube', 
        'vimeo',
        'facebook'
    ];

    /**
     * Handle the pipe.
     * 
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle($passable, Closure $next) {

        $post = $passable->getPost();

        try {

            $preview = Embed::create(nl_array_first($post->pages));

            $passable->addPostAttribute(
                app(PostAttribute::class)
                    ->setKey('url')
                    ->setValue($preview->url)
                    ->setKind('link')
            );

            $passable->addPostAttribute(
                app(PostAttribute::class)
                    ->setKey('url-title')
                    ->setValue($preview->title)
                    ->setKind('title_text')
            );

            $passable->addPostAttribute(
                app(PostAttribute::class)
                    ->setKey('url-description')
                    ->setValue($preview->description)
                    ->setKind('description-text')
            );

            $passable->addPostAttribute(
                app(PostAttribute::class)
                    ->setKey('url-thumbnail')
                    ->setValue($preview->image)
                    ->setKind('image')
            );

            if(in_array(strtolower($preview->providerName), $this->embedableProviders) && !is_null($preview->code)) {
                $passable->addPostAttribute(
                    app(PostAttribute::class)
                        ->setKey('url-embeddable-code')
                        ->setValue($preview->code)
                        ->setKind('embbedable-video')
                        ->setEscaped(true)
                );
            }


        } catch(\Exception $e) {

            // should the exception be logged somehow?

            return $next($passable);

        } catch(\Throwable $t) {

            dd($t);

        } finally {

            return $next($passable);

        }

    }
}
