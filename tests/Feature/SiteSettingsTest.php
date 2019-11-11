<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SiteSettingsTest extends TestCase
{
    use RefreshDatabase;

    /** @test **/
    public function an_admin_can_store_site_global_settings()
    {
        $admin = $this->beAdmin();

        $settings = [
            'settings' => [
                'language' => 'english',
                'theme' => 'theme'
            ]
        ];

        $this->postJson($admin->path() . '/settings');
    }
}
