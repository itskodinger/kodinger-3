<?php

namespace App\Contracts\Post\Markdown;

use App\User;
use App\Post;
use App\Comment;

interface CommentAddedScenario {

    /**
     * Set the user who commented.
     *
     * @param  User $user
     * @return self
     */
    public function setCommentAuthor(User $user);

    /**
     * Get the user who commented.
     *
     * @return User|null
     */
    public function getCommentAuthor();

    /**
     * Set the user who create the post.
     *
     * @param  User $user
     * @return self
     */
    public function setPostAuthor(User $user);

    /**
     * Get the user who create the post.
     *
     * @return User|null
     */
    public function getPostAuthor();

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
     * Set the Comment.
     *
     * @param  Comment $comment
     * @return self
     */
    public function setComment(Comment $comment);

    /**
     * Get the Comment.
     *
     * @return Comment|null
     */
    public function getCommet();
}
