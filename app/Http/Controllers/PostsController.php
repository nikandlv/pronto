<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function store()
    {
        $attributes = \request()->validate([
            'title' => 'required|min:5|max:255',
            'body' => 'required'
        ]);


        Post::create([
            'title' => $attributes->title,
            'body' => $attributes->body
        ]);
    }
}
