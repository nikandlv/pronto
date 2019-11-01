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
        User::create(\request()->all());

        return  response(['message' => 'account created successfully!']);
    }
}
