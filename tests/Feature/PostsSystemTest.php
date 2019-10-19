<?php

namespace Tests\Feature;

use App\Http\Resources\PostResource;
use App\Post;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Util\Json;
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
        $post = factory(Post::class)->create(['title' => '']);

        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ])->assertJsonValidationErrors('title');
    }

    /** @test **/
    public function a_post_can_be_deleted()
    {
        $post = $this->newPost();

        $this->deleteJson('/api/posts/' . $post->id)->assertStatus(200)->assertJson(['message' => 'post deleted successfully']);
        $this->assertDatabaseMissing('posts', [
            'id' => $post->id,
            'title' => $post->title,
            'body' => $post->body
        ]);
    }

    /** @test **/
    public function all_posts_can_be_fetched()
    {
        $this->withoutExceptionHandling();

        $post1 = $this->newPost();

        $response = $this->getJson('api/posts')->assertStatus(200);
    }

    /** @test **/
    public function an_specific_post_can_be_fetched()
    {
        $this->withoutExceptionHandling();
        $post = $this->newPost();
        $this->getJson('/api/posts/' . $post->id)->assertStatus(200);
    }

    /** @test **/
    public function a_post_can_be_updated()
    {
        $this->withoutExceptionHandling();
//        given : we have a post saved in the Db in the past
        $post = $this->newPost();
        $post2 = factory(Post::class)->create();

//        when : we put request to update the field in the database

        $this->putJson('/api/posts/' . $post->id, [])->assertStatus(200);
        $this->assertDatabaseMissing('posts', [
            'title' => $post->title,
            'body' => $post->body
        ]);

        $this->assertDatabaseHas('posts' , [
           'title' => $post2->title,
           'body' => $post2->body
        ]);
//        then : the database must have been updated and status code 200 returned too
    }
}
