<?php

namespace Tests\Feature;

use App\SiteSetting;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class SiteSettingsUnitTest extends TestCase
{
    use  RefreshDatabase;

    /** @test **/
    public function it_has_a_set_of_values_as_allowed_values_to_store_as_setting_key_in_database()
    {
        $this->withoutExceptionHandling();

        $siteSetting = new  SiteSetting();

        $this->assertIsArray($siteSetting->alloweds);
    }
}
