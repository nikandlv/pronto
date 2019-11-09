<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    /**
     * store a setting for given user
     *
     * @param User $user
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(User $user)
    {
//        we have settings key in the array for validation
        $settings = \request()->validate([
            'settings' => 'required|array'
        ]);

//        sending the actual setting to the update settings
        $user->updateSettings($settings['settings']);

        return response(['message' => 'setting updated successfully']);
    }
}
