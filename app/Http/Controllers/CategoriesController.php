<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoryResource;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class CategoriesController extends Controller
{

    /**
     * get all categories
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        $categories = Category::paginate(5);

        return CategoryResource::collection($categories);
    }

    /**
     * @return ResponseFactory|Response
     */
    public function store()
    {

        $attributes = \request()->validate([
            'title' => 'required|string|alpha_dash|min:4|max:50',
            'parent_id' => 'sometimes|numeric'
        ]);

        Category::create($attributes);

        return response(['message' => 'category created successfully', 'status' => 201]);
    }

    public function update(Category $category)
    {
        $category->update(\request()->all());
    }
}
