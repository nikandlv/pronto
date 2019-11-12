<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SiteSetting extends Model
{
    protected $fillable = ['key', 'value'];

    public $alloweds = ['languages'];

    public function updateGlobalSettings($settings)
    {

        foreach ($settings as $key => $value) {
            $setting = SiteSetting::firstOrNew([
                'key' => $key,
            ]);
            $setting->value = $value;
            $setting->save();
        }
    }
}
