<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategorySystemTest extends TestCase
{
    use RefreshDatabase;

    /** @test **/
    public function a_category_can_be_made()
    {
        $this->withoutExceptionHandling();

        $this->postJson('/api/categories/', [
            'title' => 'funny',
        ])->assertStatus(201);

        $this->assertDatabaseHas('categories', [
            'title' => 'funny',
        ]);
    }
}
