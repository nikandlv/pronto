<?php

namespace Tests\Feature;

use App\Http\Resources\PostResource;
use App\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostsSystemTest extends TestCase
{
    use RefreshDatabase;
//    HELPER FUNCTIONS
    public function newPost($post = null)
    {
        $post = $post!==null ? $post : factory(Post::class)->create();

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
        $post1 = $this->newPost()->toArray();
        $post2 = $this->newPost()->toArray();

        $this->getJson('/api/posts')->assertJson([ 'data' => [$post1, $post2]]);
    }

    /** @test **/
    public function an_specific_post_can_be_fetched()
    {
        $this->withoutExceptionHandling();
        $post = $this->newPost();
        $postArray = $post->toArray();

        $this->getJson('/api/posts/' . $post->id)->assertJson($postArray);
    }

    /** @test **/
    public function a_post_can_be_updated()
    {
        $this->withoutExceptionHandling();
        $post1 = $this->newPost();
        $post2 = factory(Post::class)->create();

        $this->putJson('/api/posts/' . $post1->id, [
            'title' => $post2->title,
            'body' => $post2->body
        ])->assertStatus(200);

        $this->assertDatabaseHas('posts' , [
           'title' => $post2->title,
           'body' => $post2->body
        ]);
    }

    /** @test **/
    public function a_title_and_a_body_is_needed_for_updating_a_post()
    {
        $post1 = $this->newPost();
        $post2 = factory(Post::class)->create(['title' => '']);

        $this->putJson('/api/posts/' . $post1->id, [
            'title' => $post2->title,
            'body' => $post2->body
        ])->assertJsonValidationErrors('title');
//        get : validation error
    }
}
