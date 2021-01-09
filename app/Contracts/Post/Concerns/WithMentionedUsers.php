<?php

namespace App\Contracts\Post\Concerns;

use App\User;

interface WithMentionedUsers {

    /**
     * Add user to mentioned list.
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
