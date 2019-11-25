<?php

namespace Tests\Feature;

use App\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategorySystemTest extends TestCase
{

    use RefreshDatabase;

    public function makeCategory($category = null)
    {
        $category = $category === null ? factory(Category::class)->create() : $category;

        return $category;
    }


    /** @test * */
    public function an_authenticated_user_can_make_a_category()
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

    /** @test * */
    public function a_title_must_only_include_letters_and_dashes()
    {
        $this->postJson('/api/categories/', [
            'title' => 'this.is.a.bad.title'
        ])->assertJsonValidationErrors(['title']);

        $this->postJson('/api/categories/', [
            'title' => 'this_is_a_good_title'
        ])->assertJsonMissingValidationErrors(['title']);
    }

    /** @test * */
    public function a_category_can_have_sub_categories()
    {
        $this->withoutExceptionHandling();

        $category = $this->makeCategory();

        $this->postJson('/api/categories/', [
            'title' => 'sub_title',
            'parent_id' => $category->id,
        ]);

        $this->assertInstanceOf(Collection::class, $category->subCategories);

        $this->assertDatabaseHas('categories', [
            'title' => 'sub_title',
            'parent_id' => $category->id
        ]);
    }

    /** @test * */
    public function the_parent_id_must_be_a_number()
    {
        $category = $this->makeCategory();

        $this->postJson('/api/categories/', [
            'title' => 'sub_title',
            'parent_id' => 'bad_id',
        ])->assertJsonValidationErrors(['parent_id']);
    }

    /** @test * */
    public function user_must_be_authenticated_to_make_a_category()
    {
        $this->postJson('/api/categories/', [
            'title' => 'funny'
        ])->assertUnauthorized();


    }
    
}
