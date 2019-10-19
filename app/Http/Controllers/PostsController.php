<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;

class PostsController extends Controller
{
    /**
     * To store a post
     *
     * @return JsonResponse
     */
    public function store()
    {
        $validator = Validator::make(request()->all(), [
            'title' => 'required|min:5|max:255',
            'body' => 'required'
        ])->validate();


        Post::create([
            'title' => \request()->title,
            'body' => \request()->body
        ]);

        return response()->json(['message' => 'post created successfully']);
    }


    /**
     * To delete a post
     *
     * @param Post $post
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(Post $post)
    {
        if ($post->delete()) {
            return response()->json(['message' => 'post deleted successfully']);
        }
    }
}
