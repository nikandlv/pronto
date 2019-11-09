<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StartupController extends Controller
{
    public function index()
    {
        $finalData = [];
//        handling user json
        if (auth()->guest()) {
            return response(['message' => 'Unauthenticated']);
        }

        $finalData['user'] = auth()->user()->toArray();

//        handling settings array
        $finalData['settings'] = auth()->user()->settings->toArray();

        return $finalData;
    }
}
