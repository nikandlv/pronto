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
    public function handle($request, Closure $next, $role)
    {

//        role is a string changing it to role numbers defined in the RoleManger File
        switch ($role) {
            case 'admin' :
                $role = UserRoleManager::ROLE_ADMIN;
                break;
            case 'member' :
                $role = UserRoleManager::ROLE_MEMBER;
                break;
            case 'author' :
                $role = UserRoleManager::ROLE_AUTHOR;
                break;
        }

        if (auth()->user()->role === $role) {
            return $next($request);
        }
    }
}
