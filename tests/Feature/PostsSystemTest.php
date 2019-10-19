<?php

namespace Tests\Feature;

use App\Post;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostsSystemTest extends TestCase
{
    use RefreshDatabase;
    /** @test **/
    public function a_user_can_make_a_new_post_an_get_json_response()
    {
        $post = factory(Post::class)->create();

        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ])->assertJson(['message' => 'post created successfully']);

        $this->assertDatabaseHas('posts', [
            'title' => $post->title,
            'body' => $post->body
        ]);
    }

    /** @test **/
    public function a_post_needs_title_and_body()
    {
//        given :  we have a post with bad title
        $post = factory(Post::class)->create(['title' => '']);

//        when : when user wants to save the post

        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ])->assertExactJson([
            'errors' => [
                'title' => ["The title field is required."]
            ],
            "message" => "The given data was invalid."
        ]);
//        then : an validation error will be thrown
    }


}
