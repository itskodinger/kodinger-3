<?php

namespace App\Http\Controllers;

use Embed\Embed;
use Illuminate\Http\Request;

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
    public function __invoke(Request $request) {
        if( ! $request->has('q') ) return abort(404);

        $url = parse_url($request->q);

        if(isset($url['host'])) {

            $this->url = $request->q;

        }
        else
        {
            try {

                $decryptedUrl = decrypt($request->q);
                $parsedUrl    = parse_url($decryptedUrl);

                if(!isset($parsedUrl['host'])) return abot(404);

                $this->url = $decryptedUrl;

                return $this->showRedirectorPage();

            } catch(\Exception $e) {

                return abort(404);

            }
        }

    }

    /**
     * Show the redirector page. 
     * 
     * @return View
     */
    protected function showRedirectorPage() {
        $parsedUrl = parse_url($this->url);

        // Need to optimize this!!!
        $redirectData = [
            'whitelisted_domain' => false,
            'url'                => $this->url,
            'preview'            => Embed::create($this->url)
        ];

        // Redirect to the url if it on the whitelisted domain.
        if(in_array($parsedUrl['host'], $this->whitelist)) return redirect()->away($this->url);

        return view('redirect', compact('redirectData'));

    }
}
