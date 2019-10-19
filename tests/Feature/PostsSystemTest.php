<?php

namespace Tests\Feature;

use App\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostsSystemTest extends TestCase
{
    use RefreshDatabase;
    /** @test * */
    public function a_user_can_make_a_new_post()
    {
        $this->withoutExceptionHandling();
//        given  : we have a post
        $post = factory(Post::class)->create();
//        when : user tries to save it
        $this->postJson('/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ]);

        $this->assertDatabaseHas('posts', [
            'title' => $post->title,
            'body' => $post->body
        ]);
//        then : there must be a post related to the field in the database
    }
}
