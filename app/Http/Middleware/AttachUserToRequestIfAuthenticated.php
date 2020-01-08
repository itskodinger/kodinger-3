<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use Laravel\Passport\Guards\TokenGuard;

class AttachUserToRequestIfAuthenticated
{

    /**
     * The AuthFactory.
     *
     * @var  AuthFactory $auth
     */
    protected $auth;

    /**
     * Build the middleware.
     *
     * @param  Auth $auth
     * @return void
     */
    public function __construct(Auth $auth) {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        $guards = array_keys(config('auth.guards'));

        foreach($guards as $guard) {
            if($this->auth->guard($guard)->check()) {
                $this->auth->shouldUse($guard);
            }
        }

        return $next($request);
    }
}
