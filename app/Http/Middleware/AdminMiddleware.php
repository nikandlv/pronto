<?php

namespace App\Http\Middleware;

use App\pronto\users\UserRoleManager;
use Closure;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user()->role === UserRoleManager::ROLE_ADMIN) {
            return $next($request);
        }

        return response([
            'status' => 403,
        ]);
    }
}
