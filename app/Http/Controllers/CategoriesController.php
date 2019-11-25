<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function store()
    {
        $attributes = \request()->validate([
            'title' => 'required|string|alpha|min:4|max:50'
        ]);

        Category::create($attributes);

        return response(['message' => 'category created successfully', 'status' => 201]);
    }
}
