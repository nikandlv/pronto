<?php

namespace App\Http\Middleware;

use App\pronto\users\UserRoleManager;
use Closure;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next, $roles)
    {

        $required_roles = explode(',', $roles);

        foreach ($required_roles as $key => $role) {
            //        role is a string changing it to role numbers defined in the RoleManger File
            switch ($role) {
                case 'admin':
                    $required_roles[$key] = UserRoleManager::ROLE_ADMIN;
                    break;
                case 'member':
                    $required_roles[$key] = UserRoleManager::ROLE_MEMBER;
                    break;
                case 'author':
                    $required_roles[$key] = UserRoleManager::ROLE_AUTHOR;
                    break;
            }
        }

        if (in_array(auth()->user()->role, $required_roles)) {
            return $next($request);
        }

        return response(['status' => 403]);
    }
}
