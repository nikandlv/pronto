<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StartupTest extends TestCase
{
    use RefreshDatabase;

    /** @test **/
    public function in_the_application_startup_configuration_and_current_logged_in_user_can_be_fetched()
    {
    }
}
