<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserSettingsTest extends TestCase
{
    use RefreshDatabase;

    /** @test * */
    public function a_user_can_store_settings()
    {
        $this->withoutExceptionHandling();
        $user = $this->signIn();

        $this->postJson($user->path() . '/settings', [
            'settings' => [
                'theme' => 'dark'
            ]
        ])->assertExactJson(['message' => 'setting updated successfully']);

        $this->assertEquals('dark', $user->settingValue('theme'));
    }

    /** @test * */
    public function a_guest_can_not_store_any_setting()
    {
        $user = factory(User::class)->create();

        $response = $this->postJson($user->path() . '/settings', [
            'settings' => [
                'theme' => 'dark'
            ]
        ])->assertExactJson(["message" => "Unauthenticated."]);
    }

    /** @test * */
    public function all_settings_must_be_wrapped_in_settings_array_key()
    {
        $user = $this->signIn();

        $this->postJson($user->path() . '/settings', [
            'theme' => 'dark'
        ])->assertJsonValidationErrors(['settings']);
    }
}
