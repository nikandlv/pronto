<?php

namespace App\Http\Controllers;




class UploadMediaController extends Controller
{
    public function store()
    {
        $file = request()->file();

    }

}
