<?php

namespace App\Http\Controllers;

use App\Contracts\InternalRequest;
use App\User;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Psy\Util\Json;

class AuthController extends Controller
{

    /**
     * to create a new user
     *
     * @return ResponseFactory|Response
     */
    public function store()
    {
        $attributes = \request()->validate([
            'name' => 'required|string|min:5|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:5|max:255'
        ]);


        User::create([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
            'password' => $attributes['password']
        ]);

        return  response(['message' => 'account created successfully!']);
    }
}
