<?php

namespace App\Http\Controllers;




use App\File;
use App\pronto\storage\FileUploadTypeMangement;
use Carbon\Carbon;

class UploadMediaController extends Controller
{
    public function store()
    {
        $file = request()->file();

        auth()->user()->files()->create([
            'name' => $file->hashName(),
            'path' => '/storage/files/media' . Carbon::today() . '/' . $file->hashName(),
            'type' => FileUploadTypeMangement::TYPE_MEDIA,
        ]);
    }
}
