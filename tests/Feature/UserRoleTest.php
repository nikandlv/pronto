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

    /** @test **/
    public function a_member_can_not_promote_another_user_to_be_admin()
    {
        $user1 = $this->signIn();
        $user2 = factory(User::class)->create();

        $this->patchJson('/api/user/' . $user2->id . '/admin', [
            'id' => $user2->id,
            'name' => $user2->name,
            'email' => $user2->email,
            'password' => $user2->password,
            'role' => UserRoleManager::ROLE_ADMIN
        ])->assertExactJson([
            'status' => 403
        ]);
    }

    /** @test **/
    public function an_admin_can_promote_another_user_to_be_admin()
    {
        $user = factory(User::class)->create();
        $admin = $this->beAdmin();

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

    /** @test **/
    public function an_admin_can_demote_a_user_to_be_member()
    {
        $admin = $this->beAdmin();

        $this->assertDatabaseHas('users', [
            'name' => $admin->name,
            'email' => $admin->email,
            'password' => $admin->password,
            'role' => UserRoleManager::ROLE_ADMIN
        ]);

        $this->patchJson('/api/user/' . $admin->id . '/admin', [
            'id' => $admin->id,
            'name' => $admin->name,
            'email' => $admin->email,
            'password' => $admin->password,
            'role' => UserRoleManager::ROLE_MEMBER
        ]);

        $this->assertDatabaseHas('users', [
            'name' => $admin->name,
            'email' => $admin->email,
            'password' => $admin->password,
            'role' => UserRoleManager::ROLE_MEMBER
        ]);

        $this->assertDatabaseMissing('users', [
            'name' => $admin->name,
            'email' => $admin->email,
            'password' => $admin->password,
            'role' => UserRoleManager::ROLE_ADMIN
        ]);
    }

    /** @test **/
    public function a_user_can_not_demote_a_admin_to_a_member()
    {
        $user = $this->signIn();
        $admin = factory(User::class)->create(['role' => UserRoleManager::ROLE_ADMIN]);

        $this->patchJson('/api/user/' . $admin->id . '/admin', [
            'id' => $admin->id,
            'name' => $admin->name,
            'email' => $admin->email,
            'password' => $admin->password,
            'role' => UserRoleManager::ROLE_MEMBER
        ])->assertExactJson([
            'status' => 403
        ]);
    }
}
