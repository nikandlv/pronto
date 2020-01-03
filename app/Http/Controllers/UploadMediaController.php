<?php

namespace App\Http\Controllers;


use App\File;
use App\pronto\storage\FileUploadTypeManager;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UploadMediaController extends Controller
{
    /**
     * get now time with format Y-m-d
     *
     * @return string
     */
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

    /**
     * delete the media
     *
     * @param File $media
     * @return JsonResponse
     * @throws \Exception
     */
    private function deleteMedia(File $media): JsonResponse
    {
        if ($media->delete()) {
            return response()->json(['message' => 'media deleted successfully'])->setStatusCode(202);
        }
    }

    /**
     * delete a media
     *
     * @param File $media
     * @return JsonResponse
     * @throws \Exception
     */
    public function destory(File $media)
    {
        if (auth()->user()->isAuthor() && $media->owner->id === auth()->id()) {
            return $this->deleteMedia($media);
        } elseif (auth()->user()->isAdmin()) {
            return $this->deleteMedia($media);
        } else {
            return response()->json(['message' => 'not found!'])->setStatusCode(403);
        }
    }


}
