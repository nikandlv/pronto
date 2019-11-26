<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\categoriesResource;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{

    /**
     * get all categories
     *
     */
    public function index()
    {
        $categories = Category::paginate(5);

        return CategoryResource::collection($categories);
    }

    /**
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
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
}
