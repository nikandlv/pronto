<?php

namespace App;

use App\pronto\traits\canUploadFiles;
use App\pronto\traits\hasUserSettings;
use App\pronto\users\UserRoleManager;
use Cassandra\Collection;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\HasApiTokens;
use App\Settings;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens, hasUserSettings, canUploadFiles;

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
        if ($this->isAdmin()) {
            return 'api/admins/' . $this->id;
        }
        return 'api/users/' . $this->id;
    }

    /**
     * get path to user related settings
     *
     * @return string
     */
    public function settingsPath()
    {
        if ($this->isAdmin()) {
            return '/api/settings/admins/' . $this->id;
        }

        return '/api/settings/users/' . $this->id;
    }

    /**
     * check user is admin or not
     *
     * @return bool
     */
    public function isAdmin()
    {
        return $this->role === UserRoleManager::ROLE_ADMIN;
    }

    /**
     * get all medias related to user
     *
     * @return HasMany
     */
    public function medias()
    {
        return $this->hasMany(File::class,'owner_id');
    }


    /**
     * get all attachments related to user
     *
     * @return HasMany
     */
    public function attachments()
    {
        return $this->hasMany(File::class, 'owner_id');
    }
}
