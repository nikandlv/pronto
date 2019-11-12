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
     * @param array $roles
     * @return mixed
     */
    public function handle($request, Closure $next, ...$roles)
    {
        $roles = $this->changeRoleStringToNumber($roles);

        if (in_array(auth()->user()->role, $roles)) {
            return $next($request);
        }

        return response(['status' => 403]);
    }

    /**
     * changing given roles from routes to defined number in UserRoleManager
     *
     * @param $roles
     * @return mixed
     */
    public function changeRoleStringToNumber($roles)
    {
        if (in_array('admin', $roles)) {
            $index = array_search('admin', $roles);

            $roles[$index] = UserRoleManager::ROLE_ADMIN;
        }

        if (in_array('author', $roles)) {
            $index = array_search('author', $roles);

            $roles[$index] = UserRoleManager::ROLE_AUTHOR;
        }

        if (in_array('member', $roles)) {
            $index = array_search('member', $roles);

            $roles[$index] = UserRoleManager::ROLE_MEMBER;
        }
        return $roles;
    }
}
