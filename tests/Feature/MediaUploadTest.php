<?php

namespace Tests\Feature;

use App\File;
use App\pronto\storage\FileUploadTypeManager;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Console\Helper\Table;
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

    /**
     * upload a fake media
     *
     * @return File
     */
    public function uploadMedia($media = null)
    {
        $media = $media ?: factory(File::class)->create(['type' => FileUploadTypeManager::TYPE_MEDIA]);

        return $media;
    }


    /** @test **/
    public function a_guest_can_not_upload_a_media()
    {
        Storage::fake('files');

        $file = UploadedFile::fake()->image('media.jpg');

        $this->postJson('/api/files/media', [
            'media' => $file,
        ])->assertExactJson(['message' => 'Unauthenticated.']);
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

    /** @test **/
    public function a_media_can_be_deleted()
    {
        $this->withoutExceptionHandling();

        $author = $this->beAuthor();

        $media = $this->uploadMedia();

        $this->deleteJson('/api/files/medias/' . $media->id);

        $this->assertDatabaseMissing('files', [
            'id' => $media->id,
            'name' => Hash::make($media->name),
        ]);
    }
}
