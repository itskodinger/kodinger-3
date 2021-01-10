<?php

namespace App\Services\Post\Markdown;

use App\User;
use App\Post;
use App\Comment;
use App\Contracts\Post\Concerns\HasParentComment;
use App\Contracts\Post\Concerns\WithMentionedUsers;
use App\Contracts\Post\Markdown\CommentAddedScenario as CommentAddedScenarioContract;

class CommentAddedScenario
    implements CommentAddedScenarioContract, HasParentComment, WithMentionedUsers {

    /**
     * The Comment Author.
     *
     * @var  User $user
     */
    protected $commentAuthor;

    /**
     * The Post Author.
     *
     * @var  User $user
     */
    protected $postAuthor;

    /**
     * The parent comment author.
     *
     * @var  User $user
     */
    protected $parentCommentAuthor;

    /**
     * The Post.
     *
     * @var  Post $post
     */
    protected $post;

    /**
     * The Comment.
     *
     * @var  Comment $comment
     */
    protected $comment;

    /**
     * The parent comment.
     *
     * @var  Comment $parentComment
     */
    protected $parentComment;

    /**
     * Mentioned Users.
     *
     * @var array $mentionedUsers
     */
    protected $mentionedUsers = [];

    /**
     * Set the user who commented.
     *
     * @param  User $user
     * @return self
     */
    public function setCommentAuthor(User $user) {
        $this->commentAuthor = $user;

        return $this;
    }

    /**
     * Get the user who commented.
     *
     * @return User|null
     */
    public function getCommentAuthor() {
        return $this->commentAuthor;
    }

    /**
     * Set the user who create the post.
     *
     * @param  User $user
     * @return self
     */
    public function setPostAuthor(User $user) {
        $this->postAuthor = $user;

        return $this;
    }

    /**
     * Get the user who create the post.
     *
     * @return User|null
     */
    public function getPostAuthor() {
        return $this->postAuthor;
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
     * Set the Comment.
     *
     * @param  Comment $comment
     * @return self
     */
    public function setComment(Comment $comment) {
        $this->comment = $comment;

        return $this;
    }

    /**
     * Get the Comment.
     *
     * @return Comment|null
     */
    public function getCommet() {
        return $this->comment;
    }


    /**
     * Set parent comment.
     *
     * @param  Comment $comment
     * @return self
     */
    public function setParentComment(Comment $comment) {
        $this->parentComment = $comment;

        return $this;
    }

    /**
     * Get parent comment.
     *
     * @return Comment|null
     */
    public function getParentComment() {
        return $this->parentComment;
    }

    /**
     * Set parent comment author.
     *
     * @param  User $user
     * @return self
     */
    public function setParentCommentAuthor(User $user) {
        $this->parentCommentAuthor = $user;

        return $this;
    }

    /**
     * Get the parent comment author.
     *
     * @return  User|null
     */
    public function getParentCommentAuthor() {
        return $this->parentCommentAuthor;
    }


    /**
     * Add user to mentioned list.
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
