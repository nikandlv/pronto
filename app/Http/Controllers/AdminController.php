<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AdminController extends Controller
{
    /**
     * update a user data
     *
     * @return ResponseFactory|Response
     */
    public function update()
    {
        User::where('id' , \request('id'))
            ->update(\request()->all());

        return \response(['message' => 'user updated successfully']);
    }
}
