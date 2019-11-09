<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    protected $fillable = ['key', 'value' , 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
