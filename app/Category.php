<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['title', 'parent_id'];

    public function subCategories()
    {
        return $this->hasMany(Category::class, 'parent_id' , 'id');
    }
}
