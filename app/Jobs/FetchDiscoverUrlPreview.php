<?php

namespace App\Jobs;

use App\Post;
use Embed\Embed;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Services\Pipeline\DiscoverPost\{
    GeneratePostAttributes,
    VerifyDoesNotContainsPornographicContent,
    VerifyDoesNotContainsBadWords,
    SetDiscoverPostStatus,
    PublishDiscoverPost,
};
use App\Contracts\Post\DiscoverPost;
use Illuminate\Pipeline\Pipeline;

class FetchDiscoverUrlPreview
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * The Post instance.
     * 
     * @var  Post $post
     */
    protected $post;

    /**
     * The pipes.
     * 
     * @var array $pipes
     */
    protected $pipes = [
        GeneratePostAttributes::class,
        VerifyDoesNotContainsPornographicContent::class,
        VerifyDoesNotContainsBadWords::class,
        SetDiscoverPostStatus::class,
        PublishDiscoverPost::class,
    ];

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Post $post)
    {
        $this->post = $post;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $discoverPost = app(DiscoverPost::class)
                            ->setPost($this->post);

        $finalPost    = app(Pipeline::class)
                        ->send($discoverPost)
                        ->through($this->pipes)
                        ->thenReturn();
    }
}
