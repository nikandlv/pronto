<?php


namespace App\pronto\traits;


use App\Settings;
use App\User;

trait hasSettings
{

    /**
     * get a specific setting value
     *
     * @param $key
     * @return mixed
     */
    public function settingValue($key)
    {
//       using index 0 cause plunk returns and array that it's first element is what we need
        return $this->settings()
            ->where('user_id', $this->id)
            ->where('key', $key)
            ->pluck('value')[0];
    }

    /**
     * get all current user settting
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function settings()
    {
        return $this->hasMany(Settings::class, 'user_id', 'id');
    }

    /**
     * update current user setting with given settings
     *
     * @param $settings
     */
    public function updateSettings($settings)
    {
        foreach ($settings as $key => $value) {
            $this->settings()->updateOrCreate([
                'user_id' => $this->id,
                'key' => $key,
                'value' => $value
            ]);
        }
    }
}
