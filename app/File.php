<?php

namespace App;

use Facade\Ignition\Tabs\Tab;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Helper\Table;

class File extends Model
{
    protected $fillable = ['name' , 'path' , 'owner_id', 'type'];

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }


}
