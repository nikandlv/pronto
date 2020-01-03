<?php

namespace Tests;

use App\pronto\users\UserRoleManager;
use App\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Laravel\Passport\Passport;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    public function signIn($user = null)
    {
        $user =  $user ?: factory(User::class)->create();

        Passport::actingAs($user);

        return $user;
    }

    public function beAdmin()
    {
        $admin = factory(User::class)->create(['role' => UserRoleManager::ROLE_ADMIN]);

        Passport::actingAs($admin);

        return $admin;
    }

    public function beAuthor()
    {
        $author = factory(User::class)->create(['role' => UserRoleManager::ROLE_AUTHOR]);

        Passport::actingAs($author);

        return $author;
    }
}
