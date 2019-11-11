<?php

namespace Tests\Unit;


use App\Settings;
use App\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserUnitTest extends TestCase
{
    use RefreshDatabase;

    /** @test * */
    public function a_user_knows_its_path()
    {
        $user = factory(User::class)->create();

        $this->assertEquals('api/users/' . $user->id, $user->path());
    }

    /** @test **/
    public function a_admin_knows_its_path()
    {
        $admin = $this->beAdmin();

        $this->assertEquals('api/admins/' . $admin->id, $admin->path());
    }

    /** @test * */
    public function it_can_update_its_settings()
    {
        $this->withoutExceptionHandling();
        $user = factory(User::class)->create();

        $settings = [
            'theme' => 'dark'
        ];

        $user->updateSettings($settings);

        $this->assertDatabaseHas('user_settings', [
            'key' => 'theme',
            'value' => 'dark'
        ]);
    }


    /** @test * */
    public function it_can_get_its_settings()
    {
        $this->withoutExceptionHandling();
        $user = $this->signIn();

        $settings = [
            'theme' => 'dark'
        ];

        $user->updateSettings($settings);

        $this->assertInstanceOf(Collection::class, $user->settings);
    }

    /** @test **/
    public function it_can_get_a_specific_setting()
    {
        $this->withoutExceptionHandling();
        $user = $this->signIn();

        $settings = [
            'theme' => 'dark'
        ];

        $user->updateSettings($settings);

        $this->assertEquals('dark', $user->settingValue('theme'));
    }
}
