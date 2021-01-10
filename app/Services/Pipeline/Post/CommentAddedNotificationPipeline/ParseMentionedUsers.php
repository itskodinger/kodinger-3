<?php

namespace App\Services\Pipeline\Post\CommentAddedNotificationPipeline;

use Closure;
use App\User;
use App\Contracts\Post\Concerns\WithMentionedUsers;
use App\Contracts\Post\Markdown\CommentAddedScenario;

class ParseMentionedUsers {

    /**
     * Handle the pipe.
     *
     * @param  mixed    $passable
     * @param  Closure  $next
     */
    public function handle(CommentAddedScenario $scenario, Closure $next) {

        $pattern = '/(^|\s)@(\w*[a-zA-Z_]+\w*)/m';

        if( ! $scenario instanceof WithMentionedUsers ) return $next($scenario);

        preg_match_all($pattern, $scenario->getCommet()->content, $matches, PREG_SET_ORDER, 0);

        $extractedUsernames = collect($matches)->map(function($group) {
            if( count($group) == 3 ) return $group[2];
        });

        $users = app(User::class)->whereIn('username', $extractedUsernames)->get();

        foreach($users as $user) {

            if( $user->id === $scenario->getCommentAuthor()->id ) continue;

            $scenario->addMentionedUser($user);
        }

        return $next($scenario);
    }
}
