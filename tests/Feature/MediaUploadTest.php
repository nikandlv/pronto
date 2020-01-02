<?php

namespace Tests\Feature;

use App\pronto\storage\FileUploadTypeManager;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class MediaUploadTest extends TestCase
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
    public function a_authenticated_author_can_upload_a_media()
    {
        $this->withoutExceptionHandling();
        $user = $this->beAuthor();

        Storage::fake('files');

        $file = UploadedFile::fake()->image('media.jpg');

        $this->postJson('/api/files/media', [
            'media' => $file,
        ]);

        $this->assertDatabaseHas('files', [
            'name' => $file->hashName(),
            'path' => 'files/media/' . $this->getNow() . '/' . $file->hashName(),
            'type' => FileUploadTypeManager::TYPE_MEDIA,
            'owner_id' => $user->id
        ]);

        Storage::assertExists('public/files/media/' . $this->getNow() . '/' . $file->hashName());
    }

    /** @test **/
    public function a_authenticated_admin_can_upload_a_media()
    {
        $this->withoutExceptionHandling();
        $user = $this->beAdmin();

        Storage::fake('files');

        $file = UploadedFile::fake()->image('media.jpg');

        $this->postJson('/api/files/media', [
            'media' => $file,
        ]);

        $this->assertDatabaseHas('files', [
            'name' => $file->hashName(),
            'path' => 'files/media/' . $this->getNow() . '/' . $file->hashName(),
            'type' => FileUploadTypeManager::TYPE_MEDIA,
            'owner_id' => $user->id
        ]);

        Storage::assertExists('public/files/media/' . $this->getNow() . '/' . $file->hashName());
    }

    /** @test **/
    public function a_authenticated_member_can_not_upload_a_media()
    {
        $this->withoutExceptionHandling();
        $user = $this->signIn();

        Storage::fake('files');

        $file = UploadedFile::fake()->image('media.jpg');

        $this->postJson('/api/files/media', [
            'media' => $file,
        ])->assertExactJson(['status' => 403]);

    }


    /** @test **/
    public function a_media_must_be_an_image_in_order_to_upload()
    {
        $user = $this->beAuthor();

        Storage::fake('files');

        $file = UploadedFile::fake()->create('badFile.pdf');

        $this->postJson('/api/files/media', [
            'media' => $file,
        ])->assertJsonValidationErrors(['media']);
    }

    /** @test **/
    public function a_file_is_necessary_to_upload_a_media()
    {
        $user = $this->beAuthor();

        Storage::fake('files');

        $this->postJson('/api/files/media', [
            'media' => null,
        ])->assertJsonValidationErrors(['media']);
    }

    /** @test **/
    public function media_type_is_correctly_stored()
    {
        $user = $this->beAuthor();

        Storage::fake('files');

        $file = UploadedFile::fake()->image('media.png');

        $this->postJson('/api/files/media', [
            'media' => $file,
        ]);

        $this->assertDatabaseHas('files', [
            'type' => FileUploadTypeManager::TYPE_MEDIA
        ]);
    }

    /** @test **/
    public function every_media_has_a_owner()
    {
        $user = $this->beAuthor();

        Storage::fake('files');

        $file = UploadedFile::fake()->image('media.png');

        $this->postJson('/api/files/media', [
            'media' => $file,
        ]);

        $this->assertDatabaseHas('files', [
            'owner_id' => $user->id
        ]);
    }
}
