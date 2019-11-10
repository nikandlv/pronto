<?php

namespace App\Http\Controllers;

use App\SiteSetting;
use App\User;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SiteSettingsController extends Controller
{
    /**
     * to validate incoming site requests
     *
     * @param SiteSetting $siteSetting
     * @return mixed
     */
    public function validateSettings(SiteSetting $siteSetting)
    {
        $rules = array_fill_keys($siteSetting->allowed_keys, 'sometimes|string');

        return \request()->validate($rules);
    }

    /**
     * store site settings
     *
     * @param SiteSetting $siteSetting
     * @return ResponseFactory|Response
     */
    public function store(SiteSetting $siteSetting)
    {
        $attributes = $this->validateSettings($siteSetting);

        $siteSetting->updateGlobalSettings($attributes);

        return response(['message' => 'site setting updated successfully']);
    }
}
