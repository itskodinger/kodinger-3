<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;
use Illuminate\Pagination\Paginator;
use URL;

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
        \Doctrine\DBAL\Types\Type::addType('uuid', 'Ramsey\Uuid\Doctrine\UuidType');
        
        if(env('APP_ENV') == 'production')
        {
            URL::forceScheme('https');
        }

        \Carbon\Carbon::setLocale(config('app.locale'));

        Blade::component('components.button');
        Blade::component('components.card');
        Blade::include('components.field');
        Blade::include('layouts.sidebar');
        Blade::include('layouts.rightbar');
        Blade::include('layouts.alert');
        Blade::include('layouts.useralert');
        Blade::component('components.field', 'fieldblock');

        Blade::if('isme', function($user) {
            return $user->isme;
        });

        Blade::directive('firstName', function($expression) {
            return "<?php echo auth()->user()->first_name; ?>";
        });

        Blade::directive('route', function($expression) {
            return "<?php echo route($expression); ?>";
        });

        Blade::directive('docs', function($expression) {
            return "<?php echo route('larecipe.show', ['1.0', $expression]); ?>";
        });

        Blade::directive('api', function($expression) {
            return "<?php echo route('api.' . $expression); ?>";
        });

        Blade::directive('current', function($expression) {
            return "<?php echo request()->fullUrlWithQuery($expression); ?>";
        });

        Blade::directive('currentRemove', function($expression) {
            return "<?php echo rtrim(url(request()->path()) . '?' . http_build_query(array_except(request()->all(), $expression)), '?'); ?>";
        });

        Paginator::defaultView('pagination::default');
    }
}
