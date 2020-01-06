<?php

namespace App\Http\Controllers;

use App\File;
use App\pronto\storage\FileUploadTypeManager;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UploadAttachmentController extends Controller
{
    /**
     * get now with format Y-m-d
     *
     * @return string
     */
    private function getNow()
    {
        return Carbon::now()->format('Y-m-d');
    }

    /**
     * store attachments
     *
     *
     */
    public function store()
    {
//        TODO: add needed rules to request validation based on attachment file extension

        \request()->validate([
            'attachment' => 'required|file'
        ]);
        $attachment = \request()->file('attachment');
        $attachmentPath = $attachment->storeAs('/public/files/attachments/' . $this->getNow(), $attachment->hashName());

        auth()->user()->attachments()->create([
            'name' => $attachment->hashName(),
            'path' => $attachmentPath,
            'type' => FileUploadTypeManager::TYPE_ATTACHEMENT,
        ]);
    }

    public function destroy(File $attachment)
    {

        if (auth()->user()->isAuthor() && $attachment->owner->id === auth()->id()) {
            if ($attachment->delete()) {
                return response(['message' => 'attachment deleted successfully'])->setStatusCode(200);;
            }
        } elseif (auth()->user()->isAdmin()) {
            if ($attachment->delete()) {
                return response(['message' => 'attachment deleted successfully'])->setStatusCode(200);;
            }
        }

        return response(['message' => 'not found!'])->setStatusCode(403);
    }
}
