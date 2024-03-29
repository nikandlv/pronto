<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StartupTest extends TestCase
{
    use RefreshDatabase;

    /** @test * */
    public function for_an_authenticated_user_in_the_application_startup_configuration_and_current_logged_in_user_can_be_fetched()
    {
        $this->withoutExceptionHandling();
        $user = $this->signIn();

        $user->updateSettings([
            'theme' => 'dark'
        ]);

        $result = $this->getJson('/api/');

        $result->assertJsonStructure([
            'user' =>[],
            'settings'=> []
        ]);
    }

    /** @test * */

    public function for_an_unauthenticated_user_in_the_application_startup_configuration_and_current_logged_in_user_can_not_be_fetched()
    {
        $this->withoutExceptionHandling();
        $user = factory(User::class)->create();

        $user->updateSettings([
            'theme' => 'dark'
        ]);

        $result = $this->getJson('/api/')->assertExactJson(['message' => 'Unauthenticated']);
    }
}
