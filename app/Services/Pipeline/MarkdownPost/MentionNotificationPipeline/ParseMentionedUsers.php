<?php

namespace App\Services\Pipeline\MarkdownPost\MentionNotificationPipeline;

use App\Contracts\Post\Markdown\MentionNotificationScenario;
use App\User;
use Closure;

class ParseMentionedUsers {

    /**
     * Handle the pipe.
     *
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle(MentionNotificationScenario $scenario, Closure $next) {

        $pattern = '/(^|\s)@(\w*[a-zA-Z_]+\w*)/m';
        $post    = $scenario->getPost();

        if( ! $post->isMarkdownPost() ) return $next($scenario);


        preg_match_all($pattern, $post->content, $matches, PREG_SET_ORDER, 0);

        $extractedUsernames = collect($matches)->map(function($group) {
            if( count($group) == 3 ) return $group[2];
        });

        $users = app(User::class)->whereIn('username', $extractedUsernames)->get();

        foreach($users as $user) {

            if( $user->id === $scenario->getAuthor()->id ) continue;

            $scenario->addMentionedUser($user);
        }


        return $next($scenario);
    }
}
