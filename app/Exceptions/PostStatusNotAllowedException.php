<?php

namespace App\Exceptions;

use Exception;

class PostStatusNotAllowedException extends Exception
{
    /**
     * Build the exception.
     *
     * @param  string $status
     * @return Excepetion
     */
    public function __construct($status) {
        return parent::__construct(
            sprintf("Post status [%s] are not allowed.", $status)
        );
    }
}
