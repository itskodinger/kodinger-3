<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Post\Markdown\MentionNotificationScenario;
use App\Contracts\Post\Markdown\MentionNotificationScenario as MarkdownMentionContract;

class NotificationServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            MarkdownMentionContract::class,
            MentionNotificationScenario::class
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
