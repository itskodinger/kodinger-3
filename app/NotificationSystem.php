<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NotificationSystem extends Model
{
    protected $fillable = [
        'from_user_id',
        'to_user_id',
        'kind',
        'payload',
        'status',
        'priority'
    ];

    public function from() {
        return $this->hasOne(User::class, 'id', 'from_user_id');
    }

    public function to() {
        return $this->hasOne(User::class, 'id', 'from_user_id');
    }
}
