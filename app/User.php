<?php

namespace App;

use Cassandra\Collection;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Settings;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * get user path
     *
     * @return string
     */
    public function path()
    {
        return 'api/users/' . $this->id;
    }

    public function updateSettings($settings)
    {
        foreach ($settings as $key => $value) {
            $this->settings()->updateOrCreate([
                'user_id'=> $this->id,
                'key' => $key,
                'value' => $value
            ]);
        }
    }

    public function settings()
    {
        return $this->hasMany(Settings::class, 'user_id', 'id');
    }
}
