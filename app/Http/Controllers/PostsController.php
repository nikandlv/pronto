<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

class PostsController extends Controller
{

    /**
     * To Get all posts
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $post = Post::all();

        return PostResource::collection($post);
    }


    /**
     * To get a specific post
     *
     * @param Post $post
     * @return PostResource
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * To store a post
     *
     * @return JsonResponse
     */
    public function store()
    {
        $attributes = request()->validate([
            'title' => 'required|min:5|max:255',
            'body' => 'required'
        ]);


        Post::create([
            'title' => $attributes['title'],
            'body' => $attributes['body']
        ]);

        return response()->json(['message' => 'post created successfully']);
    }

    public function update(Post $post)
    {
        $attributes = request()->validate([
            'title' => 'required|min:5|max:255',
            'body' => 'required'
        ]);
        $post->title = $attributes['title'];
        $post->body = $attributes['body'];

        $post->save();
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
