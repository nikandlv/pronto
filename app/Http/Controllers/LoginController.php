<?php

namespace App\Http\Controllers;

use App\Contracts\InternalRequest;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{

    public function login()
    {
        $attributes = $this->validateData();

        if ($this->isAlreadyMember($attributes)) {
            $data = $this->generateData($attributes);

            return response($this->generateToken($data));
        }

        return response([
            'message' => 'The email you entered does not belong to an account, please try again!'
        ]);
    }

    private function validateData()
    {
        return $this->validate(\request() , [
            'email' => 'required|email',
            'password' => 'required|string|min:5|max:255'
        ]);
    }

    private function generateData($attributes)
    {
        return [
            'grant_type' => env('PASSPORT_GRANT_TYPE'),
            'client_id' => env('PASSPORT_CLIENT_ID'),
            'client_secret' => env('PASSPORT_CLIENT_SECRET'),
            'username' => $attributes['email'],
            'password' => $attributes['password']
        ];
    }

    private function generateToken(array $data)
    {
        $respone =  app(InternalRequest::class)->request('POST' , '/oauth/token', $data);
        return $respone->getContent();
    }

    private function isAlreadyMember($user)
    {
        return DB::table('users')
            ->where('email' , $user['email'] )
            ->exists();
    }
}
