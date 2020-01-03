<?php

namespace Tests\Unit;


use App\File;
use App\pronto\storage\FileUploadTypeManager;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Collection;
use Tests\TestCase;

class FileUnitTest extends TestCase
{
    use RefreshDatabase;
    /**
     * upload a fake media
     *
     * @return File
     */
    private function uploadMedia($media = null)
    {
        $media = $media ?: factory(File::class)->create(['type' => FileUploadTypeManager::TYPE_MEDIA]);

        return $media;
    }

    /** @test **/
    public function it_may_have_a_owner()
    {
        $author = $this->beAuthor();

        $media = $this->uploadMedia();

        $this->assertInstanceOf(Collection::class, $media->owner());

        $this->assertEquals($media->owner()->id , $author->id);
    }
}
