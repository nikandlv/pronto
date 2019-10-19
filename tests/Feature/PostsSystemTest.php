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
        ])->assertExactJson([
            'status' => 201,
            'post' => [
                'title' => $post->title,
                'body' => $post->body
            ],
            'message' => 'post has been created successfully'
        ]);

        $this->assertDatabaseHas('posts', [
            'title' => $post->title,
            'body' => $post->body
        ]);
    }

    /** @test **/
    public function a_post_needs_title_and_body()
    {
        $post = factory(Post::class)->create(['title' => '']);

        $this->expectException(ValidationException::class);
        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ])->isInvalid();
    }


}
