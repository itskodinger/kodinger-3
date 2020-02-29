<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Contracts\Auth\Factory as Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Kodinger's Token Name
     *
     * @var  string
     */
    protected const TOKEN_NAME = 'kodinger_token';

    /**
     * The AuthFactory implemented instance.
     *
     * @var  AuthFactory $authFactory
     */
    protected $auth;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @param  AuthFactory $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->middleware('guest')->except('logout');

        $this->auth = $auth;
    }

	/**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function logout(Request $request)
    // {

    //     $guards = array_keys(config('auth.guards'));

    //     foreach($guards as $guard) {

    //         if(
    //             method_exists($this->auth->guard($guard), 'logout') &&
    //             $this->auth->guard($guard)->check()
    //         ) {

    //             $this->auth->shouldUse($guard);

    //             $this->auth->guard($guard)->logout();

    //         }

    //     }

    //     $request->session()->invalidate();

    //     return $this->loggedOut($request) ?: redirect('/')->cookie(
    //             self::TOKEN_NAME,
    //             'UNAUTHENTICATED'
    //         );
    // }
}
