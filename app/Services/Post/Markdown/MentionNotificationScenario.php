<?php

namespace App\Services\Post\Markdown;

use App\User;
use App\Post;
use App\Contracts\Post\Markdown\MentionNotificationScenario as MentionNotificationScenarioContract;

class MentionNotificationScenario implements MentionNotificationScenarioContract {

    /**
     * The Author.
     *
     * @var  User $user
     */
    protected $user;

    /**
     * The Post.
     *
     * @var  post $post
     */
    protected $post;

    /**
     * The Mentioned Users.
     *
     * @var  array $mentionedUsers
     */
    protected $mentionedUsers = [];

    /**
     * Set the user who mentions & create the post.
     *
     * @param  User $user
     * @return self
     */
    public function setAuthor(User $user) {
        $this->author = $user;

        return $this;
    }

    /**
     * Get the user who mentions & create the post.
     *
     * @return User|null
     */
    public function getAuthor() {
        return $this->author;
    }

    /**
     * Set the Post.
     *
     * @param  Post $post
     * @return self
     */
    public function setPost(Post $post) {
        $this->post = $post;

        return $this;
    }

    /**
     * Get the Post.
     *
     * @return Post|null
     */
    public function getPost() {
        return $this->post;
    }

    /**
     * Add mentioned user.
     *
     * @param  User $user
     * @return self
     */
    public function addMentionedUser(User $user) {
        $this->mentionedUsers[] = $user;

        return $this;
    }

    /**
     * Get all mentioned users.
     *
     * @return array
     */
    public function getAllMentionedUsers() {
        return $this->mentionedUsers;
    }
}
