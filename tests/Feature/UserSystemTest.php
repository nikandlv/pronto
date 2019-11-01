<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserSystemTest extends TestCase
{
    use RefreshDatabase;

    /** @test **/
    public function a_guest_can_make_an_account_and_become_member()
    {
        $guest = factory(User::class)->make();

        $response = $this->postJson('/api/register' , [
            'name' => $guest['name'],
            'email'=> $guest['email'],
            'password' => $guest['password'],
            'password_confirm' => $guest['password']
        ]);

        $this->assertDatabaseHas('users' , [
            'name' => $guest['name'],
            'email'=> $guest['email'],
        ]);

        $response->assertJson(['message' => 'account created successfully!']);
    }


}
