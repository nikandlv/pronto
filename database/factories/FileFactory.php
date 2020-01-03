<?php

/** @var Factory $factory */

use App\File;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(File::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName,
        'path' => $faker->paragraph,
        'type' => \App\pronto\storage\FileUploadTypeManager::TYPE_MEDIA,
        'owner_id'=> auth()->id(),
    ];
});
