<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SiteSettingsTest extends TestCase
{
    use RefreshDatabase;

    /** @test * */
    public function an_admin_can_store_site_global_settings()

    {
        $this->withoutExceptionHandling();
        $admin = $this->beAdmin();

        $settings = [
            'language' => 'english',
        ];

        $this->postJson($admin->path() . '/settings', $settings);

        $this->assertDatabaseHas('site_settings', [
            'key' => 'language',
            'value' => 'english',
        ]);
    }

    /** @test * */
    public function an_valid_admin_just_can_set_site_settings()
    {
        $user = $this->signIn();


        $settings = [
            'language' => 'english',
        ];

        $response = $this->postJson('/admins/1/settings', $settings)->assertStatus(404);
    }
}
