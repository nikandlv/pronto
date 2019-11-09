<?php

namespace Tests\Unit;


use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserUnitTest extends TestCase
{
    use RefreshDatabase;

    /** @test **/
    public function it_knows_its_path()
    {
        $user = factory(User::class)->create();

        $this->assertEquals('api/users/' . $user->id, $user->path());
    }
}
