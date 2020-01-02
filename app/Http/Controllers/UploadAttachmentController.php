<?php

namespace App\Http\Controllers;

use App\pronto\storage\FileUploadTypeManager;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UploadAttachmentController extends Controller
{
    private function getNow()
    {
        return Carbon::now()->format('Y-m-d');
    }

    public function store()
    {
        $attachment = \request()->file('attachment');
        $attachmentPath = $attachment->storeAs('/public/files/attachments/' . $this->getNow() , $attachment->hashName());

        auth()->user()->attachments()->create([
            'name' => $attachment->hashName(),
            'path' => $attachmentPath,
            'type' => FileUploadTypeManager::TYPE_ATTACHEMENT,
        ]);
    }
}
