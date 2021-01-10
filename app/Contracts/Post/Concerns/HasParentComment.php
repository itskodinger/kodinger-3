<?php

namespace App\Contracts\Post\Concerns;

use App\User;
use App\Comment;

interface HasParentComment {

    /**
     * Set parent comment.
     *
     * @param  Comment $comment
     * @return self
     */
    public function setParentComment(Comment $comment);

    /**
     * Get parent comment.
     *
     * @return Comment|null
     */
    public function getParentComment();

    /**
     * Set parent comment author.
     *
     * @param  User $user
     * @return self
     */
    public function setParentCommentAuthor(User $user);

    /**
     * Get the parent comment author.
     *
     * @return  User|null
     */
    public function getParentCommentAuthor();
}
