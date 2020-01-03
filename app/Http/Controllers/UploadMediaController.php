<?php

namespace App\Http\Controllers;


use App\File;
use App\pronto\storage\FileUploadTypeManager;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UploadMediaController extends Controller
{
    private function getNow()
    {
        return Carbon::today()->format('Y-m-d');
    }

    /**
     * store medias in database
     */
    public function store()
    {
        request()->validate([
            'media' => 'required|file|image|mimes:jpg,jpeg,png'
        ]);

        $file = request()->file('media');
        $filePath = $file->storeAs('/files/media/' . $this->getNow(), $file->hashName(), 'public');

        if (auth()->user()->medias()->create([
            'name' => $file->hashName(),
            'path' => $filePath,
            'type' => FileUploadTypeManager::TYPE_MEDIA,
        ])) {
            return response()->json(['message' => 'media stored successfully'])->setStatusCode(201);
        }
    }

    public function destory(File $media)
    {
        if (auth()->user()->isAuthor() && $media->owner()->id === auth()->id()) {
            if ($media->delete()) {
                return response()->json(['message' => 'media deleted successfully'])->setStatusCode(202);
            }
        }

        if (auth()->user()->isAdmin()) {
            if ($media->delete()) {
                return response()->json(['message' => 'media deleted successfully'])->setStatusCode(202);
            }
        }
    }
}
