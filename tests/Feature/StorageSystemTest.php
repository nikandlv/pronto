<?php

namespace Tests\Feature;

use App\pronto\storage\FileUploadTypeMangement;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class StorageSystemTest extends TestCase
{
    use RefreshDatabase;
//    HELPERS
    /**
     * get the current time with format Y-m-d
     *
     * @return string
     */
    public function getNow()
    {
        return Carbon::now()->format('Y-m-d');
    }

    /** @test **/
    public function a_authenticated_user_can_upload_a_media()
    {
        $this->withoutExceptionHandling();
        $user = $this->beAuthor();

        Storage::fake('files');

        $file = UploadedFile::fake()->image('media.jpg');

        $this->postJson('/api/files/media', [
            'file' => $file,
        ]);

        $this->assertDatabaseHas('files', [
            'name' => $file->hashName(),
            'path' => 'files/media/' . $this->getNow() . '/' . $file->hashName(),
            'type' => FileUploadTypeMangement::TYPE_MEDIA,
            'owner_id' => $user->id
        ]);

        Storage::assertExists('public/files/media/' . $this->getNow() . '/' . $file->hashName());
    }
}
