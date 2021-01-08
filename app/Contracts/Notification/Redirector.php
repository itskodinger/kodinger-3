<?php

namespace App\Contracts\Notification;

use App\NotificationSystem;

interface Redirector {

    /**
     * Generate redirect url.
     *
     * @param  NotificationSystem $notification
     * @return string
     */
    public function generateRedirectUrl(NotificationSystem $notification);
}
