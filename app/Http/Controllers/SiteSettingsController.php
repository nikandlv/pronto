<?php

namespace App\Http\Controllers;

use App\SiteSetting;
use App\User;
use Illuminate\Http\Request;

class SiteSettingsController extends Controller
{
    /**
     * to validate incoming site requests
     *
     * @param SiteSetting $siteSetting
     * @return mixed
     */
    public function valdateSettings(SiteSetting $siteSetting)
    {
        $rules = array_fill_keys($siteSetting->alloweds, 'sometimes|string');

        return \request()->validate($rules);
    }

    /**
     * store site settings
     *
     * @param SiteSetting $siteSetting
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function store(SiteSetting $siteSetting)
    {
        $attributes = $this->valdateSettings($siteSetting);

        $siteSetting->updateGlobalSettings($attributes);

        return response(['message' => 'site setting updated successfully']);
    }
}
