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
        URL::forceSchema('https');
        
        \Carbon\Carbon::setLocale(config('app.locale'));

        Blade::component('components.button');
        Blade::component('components.card');
        Blade::include('components.field');
        Blade::include('layouts.sidebar');
        Blade::include('layouts.rightbar');
        Blade::component('components.field', 'fieldblock');
        Blade::if('isme', function($user) {
            return $user->isme;
        });

        Blade::directive('route', function($expression) {
            return "<?php echo route($expression); ?>";
        });

        Paginator::defaultView('pagination::default');
    }
}
