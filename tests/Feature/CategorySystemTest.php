<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategorySystemTest extends TestCase
{
    use RefreshDatabase;

    /** @test * */
    public function a_category_can_be_made()
    {
        $this->withoutExceptionHandling();

        $this->postJson('/api/categories/', [
            'title' => 'funny',
        ])->assertExactJson(['message' => 'category created successfully', 'status' => 201]);

        $this->assertDatabaseHas('categories', [
            'title' => 'funny',
        ]);
    }

    /** @test * */
    public function a_title_is_necessary_for_making_a_category()
    {
        $this->postJson('/api/categories/', [
            'title' => null,
        ])->assertJsonValidationErrors(['title']);
    }

    /** @test **/
    public function a_title_must_only_include_letters()
    {
        $this->postJson('/api/categories/', [
           'title' => 'this.is.a.bad.title'
        ])->assertJsonValidationErrors(['title']);
    }
}
