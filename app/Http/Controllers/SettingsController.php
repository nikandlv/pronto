<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function store(User $user)
    {
        $settings = \request()->validate([
            'settings' => 'required|array'
        ]);

        $user->changeSettings($settings);
    }
}
