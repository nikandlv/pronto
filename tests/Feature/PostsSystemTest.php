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
    public function a_user_can_make_a_new_post()
    {
//        given  : we have a post
        $post = factory(Post::class)->create();
//        when : user tries to save it
        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ]);

        $this->assertDatabaseHas('posts', [
            'title' => $post->title,
            'body' => $post->body
        ]);
//        then : there must be a post related to the field in the database
    }

    /** @test **/
    public function a_post_needs_title_and_body()
    {
        $this->withoutExceptionHandling();
//        given : we have a post that it's title or it's body is null
        $post = factory(Post::class)->create(['title' => '']);
//        when : a user tries to save this post
        $this->expectException(ValidationException::class);
        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ])->isInvalid();
//        then : it must get an error in the session that title or body is required
    }
}
