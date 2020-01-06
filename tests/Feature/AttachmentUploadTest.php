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
use Tests\TestCase;

class AttachmentUploadTest extends TestCase
{
    use  RefreshDatabase;

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

    private function uploadAttachment($attachment = null)
    {
        $attachment = $attachment ?: factory(File::class)->create(['type' => FileUploadTypeManager::TYPE_ATTACHEMENT]);

        return $attachment;
    }


    /** @test * */
    public function a_guest_can_not_upload_a_media()
    {
        Storage::fake('file');
        $file = UploadedFile::fake()->create('test.png');

        $this->postJson('api/files/attachments', [
            'attachment' => $file
        ])->assertExactJson(['message' => "Unauthenticated."]);
    }

    /** @test * */
    public function an_authenticated_author_can_upload_an_attachment()
    {
        $this->withoutExceptionHandling();
//        TODO: ask for attachment extension
        $author = $this->beAuthor();

        Storage::fake('file');
        $file = UploadedFile::fake()->create('test.pdf');


        $this->postJson('api/files/attachments', [
            'attachment' => $file
        ]);

        Storage::exists('/public/files/attachments/' . $this->getNow() . '/' . $file->hashName());

        $this->assertDatabaseHas('files', [
            'name' => $file->hashName(),
            'path' => 'public/files/attachments/' . $this->getNow() . '/' . $file->hashName(),
            'type' => FileUploadTypeManager::TYPE_ATTACHEMENT,
            'owner_id' => $author->id
        ]);
    }

    /** @test * */
    public function an_authenticated_admin_can_upload_an_attachment()
    {
        $this->withoutExceptionHandling();
//        TODO: ask for attachment extension
        $admin = $this->beAdmin();

        Storage::fake('file');
        $file = UploadedFile::fake()->create('test.pdf');

        $this->postJson('api/files/attachments', [
            'attachment' => $file
        ]);

        Storage::exists('/public/files/attachments/' . $this->getNow() . '/' . $file->hashName());

        $this->assertDatabaseHas('files', [
            'name' => $file->hashName(),
            'path' => 'public/files/attachments/' . $this->getNow() . '/' . $file->hashName(),
            'type' => FileUploadTypeManager::TYPE_ATTACHEMENT,
            'owner_id' => $admin->id
        ]);
    }

    /** @test * */
    public function an_unauthenticated_member_can_not_upload_an_attachment()
    {
        $this->withoutExceptionHandling();
//        TODO: ask for attachment extension
        $author = $this->signIn();

        Storage::fake('file');
        $file = UploadedFile::fake()->create('test.png');

        $this->postJson('api/files/attachments', [
            'attachment' => $file
        ])->assertExactJson(['status' => 403]);
    }

    /** @test * */
    public function an_attachment_is_required_for_uploading_an_attachment()
    {
        $admin = $this->beAdmin();

        Storage::fake('file');
        $file = UploadedFile::fake()->create('test.png');

        $this->postJson('api/files/attachments', [
            'attachment' => null
        ])->assertJsonValidationErrors(['attachment']);
    }

    /** @test * */
    public function an_attachment_must_be_a_file()
    {
        $admin = $this->beAdmin();

        Storage::fake('file');
        $file = UploadedFile::fake()->create('test.png');

        $this->postJson('api/files/attachments', [
            'attachment' => 'bad_attachment'
        ])->assertJsonValidationErrors(['attachment']);
    }

    /** @test * */
    public function an_author_can_delete_an_attachment()
    {
        $author = $this->beAuthor();

        $attachment = $this->uploadAttachment();

        $this->deleteJson('/api/files/attachments/' . $attachment->id)->assertExactJson(['message' => 'attachment deleted successfully'])->assertStatus(200);

        $this->assertDatabaseMissing('files', [
            'id' => $attachment->id,
            'name' => Hash::make($attachment->name),
            'owner_id' => $author->id,
        ]);
    }

}
