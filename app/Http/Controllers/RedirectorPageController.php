<?php

namespace App\Http\Controllers;

use Embed\Embed;
use Illuminate\Http\Request;
use Services\PostService;

class RedirectorPageController extends Controller
{

    /**
     * The Redirect URL.
     * 
     * @var  string $url
     */
    protected $url;

    /**
     * Kodinger Whitelist Domains.
     * 
     * @var array $whitelist
     */
    protected $whitelist = [
        'kodinger.com',
        'blog.kodinger.com',
        'v3.kodinger.com',
        'uarnix.com'
    ];

    /**
     * Handle the request.
     * 
     * @param  Illuminate\Http\Request    $request
     * @return Illuminate\Http\Response
     */
    public function __invoke(Request $request, PostService $postService) {
        if( ! $request->has('go') ) return abort(404);

        $url = parse_url($request->go);

        if(isset($url['host'])) {

            $this->url = $request->go;

        }
        else
        {
            try {

                $decryptedUrl = decrypt($request->go);
                $decryptedUrl = explode('|', $decryptedUrl);
                $postId = $decryptedUrl[0];
                $parsedUrl    = parse_url($decryptedUrl[1]);

                $post = $postService->find($postId, true);

                if(!isset($parsedUrl['host'])) return abort(404);

                $this->url = $decryptedUrl[1];

                return $this->showRedirectorPage();

            } catch(\Exception $e) {

                if($e instanceof \Embed\Exceptions\InvalidUrlException) {
                    return $this->showRedirectorPage(true);
                }

                return abort(404);

            }
        }

    }

    /**
     * Show the redirector page. 
     * 
     * @param  bool  $ignorePreview To ignore the preview fetcher.
     * @return View
     */
    protected function showRedirectorPage($ignorePreview = false) {
        $parsedUrl = parse_url($this->url);


        // Need to optimize this!!!
        $redirectData = [
            'whitelisted_domain' => false,
            'url'                => $this->url . '?ref=kodinger'
        ];

        if(!$ignorePreview) {
            $redirectData['preview'] = Embed::create($this->url);
        }

        // Redirect to the url if it on the whitelisted domain.
        if(in_array($parsedUrl['host'], $this->whitelist)) return redirect()->away($this->url);

        return view('redirect', compact('redirectData'));

    }
}
