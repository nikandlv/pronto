<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $data = [
            'grant_type' => config('passport.grant_type'),
            'client_id' => config('passport.client_id'),
            'client_secret' => config('passport.client_secret'),
            'username' => 'test@example.com',
            'password' => 'password',
            'scope' => '',
        ];


    }
}
