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
     * A new User can be created
     *
     * @return ResponseFactory|Response
     */
    public function store()
    {
        $attributes = \request()->validate([
            'name' => 'required|string|min:5|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:5|max:255|confirmed'
        ]);


        User::create([
            'name' => $attributes['name'],
            'email' => $attributes['email'],
            'password' => $attributes['password']
        ]);

        return  response(['message' => 'account created successfully!']);
    }

    public function destroy()
    {
        auth()->user()->token()->revoke();

        return \response([
            'message' => 'User have been logged out!'
        ]);
    }
}
