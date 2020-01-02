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
            'file' => 'required|file|image|mimes:jpg,jpeg,png'
        ]);

        $file = request()->file('file');
        $filePath = $file->storeAs('/files/media/' . $this->getNow() , $file->hashName() , 'public');

        auth()->user()->medias()->create([
            'name' => $file->hashName(),
            'path' => $filePath,
            'type' => FileUploadTypeManager::TYPE_MEDIA,
        ]);
    }
}
