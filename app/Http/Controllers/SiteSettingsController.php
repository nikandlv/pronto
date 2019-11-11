<?php

namespace App\Http\Controllers;

use App\SiteSetting;
use App\User;
use Illuminate\Http\Request;

class SiteSettingsController extends Controller
{

    public function __construct()
    {
        $allowed = ['language'];
        $this->rules = array_fill_keys($allowed, 'sometimes|string');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate($this->rules);

        foreach ($attributes as $key => $value) {
            $setting = SiteSetting::firstOrNew([
                'key' => $key,
            ]);
            $setting->value = $value;
            $setting->save();
        }

        return response(['message' => 'site setting updated successfully']);
    }
}
