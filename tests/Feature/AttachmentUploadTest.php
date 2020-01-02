<?php

namespace Tests\Feature;

use App\pronto\storage\FileUploadTypeManager;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Carbon;
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

    /** @test **/
    public function an_authenticated_member_can_upload_an_attachment()
    {
        $this->withoutExceptionHandling();
//        TODO: ask for attachment extension
        $author = $this->beAuthor();

        Storage::fake('file');
        $file = UploadedFile::fake()->create('test.png');

        $this->postJson('api/files/attachment', [
            'attachment'=> $file
        ]);

        Storage::exists('/public/files/attachments/'. $this->getNow() . '/' . $file->hashName());

        $this->assertDatabaseHas('files', [
            'name' => $file->hashName(),
            'path' => '/public/files/attachments/'. $this->getNow() . '/' . $file->hashName(),
            'type' => FileUploadTypeManager::TYPE_ATTACHEMENT,
            'owner_id' => $author->id
        ]);
    }
}
