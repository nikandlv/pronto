<?php

namespace Tests\Feature;

use App\Post;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostsSystemTest extends TestCase
{
    use RefreshDatabase;
//    HELPER FUNCTIONS
    public function newPost($post = null)
    {
        $post = $post!==null ? $post : factory(Post::class)->create();

        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ]);

        return $post;
    }

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

    /** @test **/
    public function a_post_can_be_deleted()
    {
        $this->withoutExceptionHandling();
//        given : we have a post
        $post = $this->newPost();
//        when : request is sent to delete the post with method of delete
        $this->deleteJson('/api/posts/' . $post->id)->assertStatus(200)->assertJson(['message' => 'post deleted successfully']);
        $this->assertDatabaseMissing('posts', [
            'id' => $post->id,
            'title' => $post->title,
            'body' => $post->body
        ]);
//        then : the post must be deleted => it means there must be a message returned with status code and database check

    }
}
