<?php

namespace App\Registries;

use App\Contracts\Notification\Redirector;

class NotificationRedirectorRegistry {

    protected $redirector = [];

    public function register($key, Redirector $redirector, $override = false) {
        if( $this->has($key) ) {
            $this->redirector[$key] = ($override) ? $redirector : $this->get($key);
        }
        else
        {
            $this->redirector[$key] = $redirector;
        }
    }

    public function has($key) {
        return (bool) isset($this->redirector[$key]);
    }

    public function get($key) {
        if( $this->has($key) ) return $this->redirector[$key];
    }

    public function all() {
        return $this->redirector;
    }
}
