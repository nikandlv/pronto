<?php

namespace App\Http\Controllers;




use App\File;
use App\pronto\storage\FileUploadTypeMangement;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class UploadMediaController extends Controller
{
    public function store()
    {
        $file = request()->file('file');

        auth()->user()->medias()->create([
            'name' => $file->hashName(),
            'path' => '/storage/files/media' . Carbon::today() . '/' . $file->hashName(),
            'type' => FileUploadTypeMangement::TYPE_MEDIA,
        ]);
    }
}
