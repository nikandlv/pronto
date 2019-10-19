<?php

namespace Tests\Feature;

use App\Post;
use Illuminate\Http\Resources\Json\Resource;
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
        $post = factory(Post::class)->create(['title' => '']);

        $this->postJson('/api/posts' , [
            'title' => $post->title,
            'body' => $post->body
        ])->assertExactJson([
            'errors' => [
                'title' => ["The title field is required."]
            ],
            "message" => "The given data was invalid."
        ]);
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
//        given : we have a post saved in the past
        $post1 = $this->newPost();
//        when : we get request for /posts
        $this->assertInstanceOf(Resource::class, $this->getJson('/api/posts'));
//        then : we must get all the posts back
    }
}
