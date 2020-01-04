<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;

class AttachTokenIntoResponseCookie
{
    /**
     * Ignore thie paths.
     *
     * @var array $except
     */
    protected $except = [
        'auth'
    ];

    /**
     * Kodinger's Token Name
     *
     * @var  string
     */
    protected const TOKEN_NAME = 'kodinger_token';

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $tokenCookie = $request->cookie(self::TOKEN_NAME);
        $segments    = $request->segments();

        if(!empty($segments) && in_array($segments[0], $this->except)) {
            return  $next($request);
        }

        $response = $next($request);

        if($response instanceof Response) {

            if(Auth::check()) {
                return $response->cookie(
                    self::TOKEN_NAME, $tokenCookie ?? Auth::user()->createToken('Kodinger HTTP Token')->accessToken
                );
            }

        }


        return  $next($request);
    }
}
