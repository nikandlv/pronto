<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SettingsTest extends TestCase
{
    use RefreshDatabase;

    /** @test **/
    public function a_user_can_store_settings()
    {
        $this->withoutExceptionHandling();
        $user = $this->signIn();

        $this->postJson($user->path() . '/settings', [
            'theme' => 'dark'
        ]);

        $this->assertDatabaseHas('settings', [
            'theme' => 'dark'
        ]);
    }
}
