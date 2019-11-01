<?php

namespace App\Http\Controllers;

use App\Contracts\InternalRequest;
use App\pronto\users\UserRoleManager;
use App\User;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Psy\Util\Json;

class AuthController extends Controller
{
    /**
     * get currently logged in user
     *
     * @return ResponseFactory|Response
     */
    public function index()
    {
        return \response(auth()->user()->toArray());
    }

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
            'password' => $attributes['password'],
            'role' => UserRoleManager::ROLE_MEMBER
        ]);

        return  response(['message' => 'account created successfully!']);
    }

    /**
     * logout the current logged in user
     *
     * @return ResponseFactory|Response
     */
    public function destroy()
    {
        auth()->user()->token()->revoke();

        return \response([
            'message' => 'User have been logged out!'
        ]);
    }
}
