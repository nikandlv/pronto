<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserSystemTest extends TestCase
{
    use RefreshDatabase;

    /** @test * */
    public function a_guest_can_make_an_account_and_become_member()
    {
        $guest = factory(User::class)->make();

        $response = $this->postJson('/api/register', [
            'name' => $guest['name'],
            'email' => $guest['email'],
            'password' => $guest['password'],
            'password_confirmation' => $guest['password']
        ]);


        $this->assertDatabaseHas('users', [
            'name' => $guest['name'],
            'email' => $guest['email'],
        ]);

        $response->assertJson(['message' => 'account created successfully!']);
    }

    /** @test * */
    public function a_email_password_and_name_is_required_for_register_a_account()
    {
        $guest = factory(User::class)->make();

        $this->postJson('/api/register', [
            'name' => null,
            'email' => null,
            'password' => null,
            'password_confirm' => null
        ])->assertJsonValidationErrors(['password', 'name', 'email']);
    }

    /** @test **/
    public function a_user_must_confirm_his_password_when_is_creating_an_account()

    {
        $guest = factory(User::class)->make();

        $response = $this->postJson('/api/register', [
            'name' => $guest['name'],
            'email' => $guest['email'],
            'password' => $guest['password'],
        ])->assertJsonValidationErrors(['password']);

    }


    /** @test **/
    public function a_user_can_log_in_and_get_bearer_token()
    {
        $this->withoutExceptionHandling();

        $user = factory(User::class)->create();

        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password'=> $user->password
        ]);

        dd($response);
    }
}
