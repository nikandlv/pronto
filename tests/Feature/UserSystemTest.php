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
    public function a_user_can_login_and_get_a_bearer_token()
    {
        $this->withoutExceptionHandling();
//        given : we have a user that wants to make a account
        $user = factory(User::class)->create();

//        when : user hit the end point of login
        $token = $this->postJson('/api/login' , [
            'username' => $user->email,
            'password' => $user->password
        ]);

//        then : it will get the token back
        $this->assertIsString($token);
    }
}
