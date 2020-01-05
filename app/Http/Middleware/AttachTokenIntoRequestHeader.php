<?php

namespace App\Http\Middleware;

use Closure;

class AttachTokenIntoRequestHeader
{
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

        if (!$request->bearerToken()) {

            if ($request->hasCookie(self::TOKEN_NAME)) {

                $token = $request->cookie(self::TOKEN_NAME);

                $request->headers->add(['Authorization' => 'Bearer ' . $token]);
            }

        }

        return $next($request);
    }
}
