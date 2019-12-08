<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;
use Illuminate\Pagination\Paginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \Carbon\Carbon::setLocale(config('app.locale'));

        Blade::component('components.button');
        Blade::component('components.card');
        Blade::include('components.field');
        Blade::component('components.field', 'fieldblock');
        Blade::if('isme', function($user) {
            return $user->isme;
        });

        Paginator::defaultView('pagination::default');
    }
}
