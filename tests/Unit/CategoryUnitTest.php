<?php

namespace Tests\Unit;

use App\Category;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryUnitTest extends TestCase
{
    use RefreshDatabase;

    public function makeCategory($category = null)
    {
        $category = $category === null ? factory(Category::class)->create() : $category;

        return $category;
    }

    public function a_category_knows_its_sub_categories()
    {
        $parentCategory = $this->makeCategory();

        $subCategory = $this->makeCategory(
            factory(Category::class)
                ->create(
                    ['parent_id' => $parentCategory->id]
                )
        );

        $this->assertInstanceOf(Collection::class, $parentCategory->subCategories);

    }

    /** @test **/
    public function a_category_knows_its_parent_category()
    {
        $parentCategory = $this->makeCategory();

        $subCategory = $this->makeCategory(
            factory(Category::class)
                ->create(
                    ['parent_id' => $parentCategory->id]
                )
        );

        $this->assertInstanceOf(Category::class, $subCategory->parentCategory);
    }
}
