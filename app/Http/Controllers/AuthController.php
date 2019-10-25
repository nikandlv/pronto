<?php

namespace App\Http\Controllers;

use App\Contracts\InternalRequest;
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

        $response = app(InternalRequest::class)->request('POST','/oauth/token',$data);
        if($response->status() === 200) {
            return 'ok!';
        } else {
            $error = new \stdClass();
            dd($response->content());
            return $error;
        }

    }
}
