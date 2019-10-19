<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function store()
    {
        Post::create([
            'title' => \request()->title,
            'body' => \request()->body
        ]);
    }
}
