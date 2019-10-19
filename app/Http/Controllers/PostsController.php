<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function store(Post $post)
    {
        $attributes = \request()->validate([
            'title' => 'required|min:5|max:255',
            'body' => 'required'
        ]);


        $post->title = $attributes['title'];
        $post->body = $attributes['body'];

        if ($post->save()) {
            return [
                'status' => 201,
                'post' => [
                    'title' => $post->title,
                    'body' => $post->body
                ],
                'message' => 'post has been created successfully'
            ];
        }
    }
}
