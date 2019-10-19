<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Support\Facades\Validator;

class PostsController extends Controller
{
    public function store()
    {
        $validator = Validator::make(request()->all() , [
           'title' => 'required|min:5|max:255',
            'body' => 'required'
        ])->validate();


        Post::create([
            'title' => \request()->title,
            'body' => \request()->body
        ]);

        return response()->json(['message' => 'post created successfully']);
    }
}
