<?php

// original code from
// https://medium.com/@kiddy.xyz/tutorial-login-laravel-dengan-socialite-facebook-twitter-google-github-linkedin-5743fb97fa2b

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use File;

class AuthController extends Controller
{

    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from provider.  Check if the user already exists in our
     * database by looking up their provider_id in the database.
     * If the user exists, log them in. Otherwise, create a new user then log them in. After that
     * redirect them to the authenticated users homepage.
     *
     * @return Response
     */
    public function handleProviderCallback($provider)
    {
        $user = Socialite::driver($provider)->user();
        $authUser = $this->findOrCreateUser($user, $provider);
        
        Auth::login($authUser, true);

        return redirect('/');
    }

    /**
     * If a user has registered before using social auth, return the user
     * else, create a new user object.
     * @param  $user Socialite user object
     * @param $provider Social auth provider
     * @return  User
     */
    public function findOrCreateUser($user, $provider)
    {
        $authUser = User::where('provider_id', $user->id)->first();
        if ($authUser) {
            return $authUser;
        }
        else{
            $fileContents = file_get_contents($user->getAvatar());
            File::put(storage_path('app/public/avatar/' . $user->getId() . ".jpg"), $fileContents);
            $data = User::create([
                'name'     => $user->name,
                'email'    => !empty($user->email)? $user->email : '' ,
                'username' => $user->nickname,
                'provider' => $provider,
                'provider_id' => $user->id,
                'avatar' => $user->getId() . '.jpg',
                'bio' => $user->user['bio'],
                'link' => $user->user['blog'],
                'location' => $user->user['location'],
                'hireable' => $user->user['hireable'],
                'github' => $user->user['html_url'],
                'company' => $user->user['company'],
            ]);
            return $data;
        }
    }
}