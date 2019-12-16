<?php

namespace App\Exceptions;

use Exception;

class EmptyUrlException extends Exception
{
    /**
     * Build the Exception class.
     * 
     * @return Exception
     */
    public function __construct() {
        return parent::__construct("Empty URL Provided.");
    }
}
