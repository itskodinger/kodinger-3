<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'username', 'avatar', 'provider', 'provider_id',
        'bio',
        'link',
        'location',
        'hireable',
        'github',
        'company',

    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function save_posts()
    {
        return $this->hasMany('App\Save', 'user_id')->whereMethod('save')->whereModel('Post');
    }

    public function love_posts()
    {
        return $this->hasMany('App\Save', 'user_id')->whereMethod('love')->whereModel('Post');
    }

    public function getTheUsernameAttribute()
    {
        return '@' . $this->username;
    }

    public function getFirstNameAttribute()
    {
        if(strpos($this->name, ' ') > -1)
        {
            return (explode(' ', $this->name))[0];
        }
        
        return $this->name;
    }

    public function getTheAvatarAttribute()
    {
        if(!$this->avatar)
            return 'https://ui-avatars.com/api/?name=' . $this->name;

        return url('storage/avatar/' . $this->avatar);
    }
}
