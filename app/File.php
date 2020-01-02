<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = ['name' , 'path' , 'owner_id', 'type'];
}
