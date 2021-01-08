<?php

namespace App\Contracts\Post\Markdown;

use App\User;
use App\Post;

interface MentionNotificationScenario {

    /**
     * Set the user who mentions & create the post.
     *
     * @param  User $user
     * @return self
     */
    public function setAuthor(User $user);

    /**
     * Get the user who mentions & create the post.
     *
     * @return User|null
     */
    public function getAuthor();

    /**
     * Set the Post.
     *
     * @param  Post $post
     * @return self
     */
    public function setPost(Post $post);

    /**
     * Get the Post.
     *
     * @return Post|null
     */
    public function getPost();

    /**
     * Add mentioned user.
     *
     * @param  User $user
     * @return self
     */
    public function addMentionedUser(User $user);

    /**
     * Get all mentioned users.
     *
     * @return array
     */
    public function getAllMentionedUsers();
}
