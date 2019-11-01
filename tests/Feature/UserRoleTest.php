<?php

namespace Tests\Feature;

use App\pronto\users\UserRoleManager;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserRoleTest extends TestCase
{
    use RefreshDatabase;

    /** @test * */
    public function a_user_can_be_updated_to_be_a_admin()
    {
        $user = factory(User::class)->create();

        $this->assertDatabaseHas('users', [
            'name' => $user->name,
            'email' => $user->email,
            'password' => $user->password,
            'role' => UserRoleManager::ROLE_MEMBER
        ]);

        $this->patchJson('/api/user/' . $user->id . '/admin', [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'password' => $user->password,
            'role' => UserRoleManager::ROLE_ADMIN
        ]);

        $this->assertDatabaseHas('users', [
            'name' => $user->name,
            'email' => $user->email,
            'password' => $user->password,
            'role' => UserRoleManager::ROLE_ADMIN
        ]);

        $this->assertDatabaseMissing('users', [
            'name' => $user->name,
            'email' => $user->email,
            'password' => $user->password,
            'role' => UserRoleManager::ROLE_MEMBER
        ]);
    }

    public function a_user_can_be_updated_to_be_member()
    {

    }
}
