<?php

namespace App\Listeners\Post\Discover;

use App\Events\Post\Discover\DiscoverPostCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Jobs\FetchDiscoverUrlPreview;

class FetchDiscoverPostUrlPreview
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  DiscoverPostCreated  $event
     * @return void
     */
    public function handle(DiscoverPostCreated $event)
    {
        $post = $event->post;

        FetchDiscoverUrlPreview::dispatch($post);

    }
}
