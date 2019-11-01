<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\DB;
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

    /** @test * */
    public function a_user_must_confirm_his_password_when_is_creating_an_account()
    {
        $guest = factory(User::class)->make();

        $response = $this->postJson('/api/register', [
            'name' => $guest['name'],
            'email' => $guest['email'],
            'password' => $guest['password'],
        ])->assertJsonValidationErrors(['password']);

    }

    /** @test * */
    public function a_user_can_login_and_get_bearer_token()
    {
        $user = factory(User::class)->create();
        DB::table('oauth_clients')
            ->insert([
                'name' => 'API',
                'secret' => env('PASSPORT_CLIENT_SECRET'),
                'personal_access_client' => 0,
                'password_client' => 1,
                'revoked' => 0,
                'redirect' => '/home'
            ]);

        $response = $this->postJson('/api/login', [
            'email' => $user['email'],
            'password' => 'password'
        ])->assertStatus(200);

        $this->assertJson($response->getContent());

        $json = json_decode($response->getContent());
        $this->assertIsString($json->access_token);
    }

    /** @test **/
    public function a_username_and_a_password_is_needed_to_login()
    {
        $user = factory(User::class)->create();
        DB::table('oauth_clients')
            ->insert([
                'name' => 'API',
                'secret' => env('PASSPORT_CLIENT_SECRET'),
                'personal_access_client' => 0,
                'password_client' => 1,
                'revoked' => 0,
                'redirect' => '/home'
            ]);

        $response = $this->postJson('/api/login', [
            'email' => null,
            'password' => null
        ])->assertExactJson([
            'errors' => [
                'email' => ['The email field is required.'],
                'password' => ['The password field is required.']
            ],
            "message" => 'The given data was invalid.'
        ]);
    }

    /** @test **/
    public function a_valid_already_created_user_credentials_must_be_used_to_log_in()
    {
        $this->withoutExceptionHandling();
//        given :  we have a guest
        $guest  = factory(User::class)->make();

        DB::table('oauth_clients')
            ->insert([
                'name' => 'API',
                'secret' => env('PASSPORT_CLIENT_SECRET'),
                'personal_access_client' => 0,
                'password_client' => 1,
                'revoked' => 0,
                'redirect' => '/home'
            ]);
//        when : he requests to login
        $response = $this->postJson('/api/login', [
            'email' => $guest['email'],
            'password' => 'password'
        ])->assertExactJson([
            'message' => 'The email you entered does not belong to an account, please try again!'
        ]);
//        then : it will get response indicating he must make acc first

    }
}
