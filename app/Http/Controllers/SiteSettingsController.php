<?php

namespace App\Http\Controllers;

use App\SiteSetting;
use App\User;
use Illuminate\Http\Request;

class SiteSettingsController extends Controller
{
    public function store(User $admin)
    {
        $attributes = \request()->validate([
            'settings' => 'required|array'
        ]);

        $settings = $attributes['settings'];

        foreach ($settings as $key => $value) {
            SiteSetting::create([
                'key' => $key,
                'value'=> $value
            ]);
        }

        return response(['message' => 'site setting updated successfully']);
    }
}
