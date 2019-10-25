<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $http = new Client();

        $test = [
            'form_params' => [
                'grant_type' => config('passport.grant_type'),
                'client_id' => config('passport.client_id'),
                'client_secret' => config('passport.client_secret'),
                'username' => 'batz.brendan@example.com',
                'password' => 'password',
                'scope' => '',
            ]
        ];

//        dd($test);

        $response = $http->post('127.0.0.1:8000/oauth/token', $test);

        return $response->getBody();
    }
}
