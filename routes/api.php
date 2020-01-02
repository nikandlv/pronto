<?php


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Startup
Route::get('/', 'StartupController@index');

// Auth system
Route::group(['prefix' => '/auth'], function () {
    Route::post('/login', 'LoginController@login');
    Route::post('/register', 'AuthController@store');
    Route::post('/logout', 'AuthController@destroy')->middleware('auth:api');
    Route::get('/user', 'AuthController@index')->middleware('auth:api');


});


// Admin Management system
Route::group(['prefix' => '/users'], function () {
    Route::patch('/{user}/admin', 'AdminController@update')->middleware('auth:api', 'role:admin');
});

// Settings management system
Route::group(['prefix' => '/settings'], function () {
    Route::post('/users/{user}', 'SettingsController@store')->middleware('auth:api');
    Route::post('/admins/{admin}', 'SiteSettingsController@store')->middleware('auth:api', 'role:admin');
});

// Post system
Route::group(['middleware' => 'auth:api', 'prefix' => '/posts'], function () {
    Route::post('', 'PostsController@store');
    Route::delete('/{post}', 'PostsController@destroy');
    Route::get('', 'PostsController@index');
    Route::get('/{post}', 'PostsController@show');
    Route::put('/{post}', 'PostsController@update');
});

// Category System
Route::group(['prefix' => '/categories', 'middleware' => ['auth:api', 'role:admin,author']], function () {
    Route::post('', 'CategoriesController@store');
    Route::put('{category}' , 'CategoriesController@update');
});
Route::get('/categories', 'CategoriesController@index')->middleware('auth:api', 'role:admin,author,member'); // making this apart cause member also can access this route

// storage system
Route::group(['prefix' => 'files' , 'middleware' => ['auth:api' , 'role:admin,author']] , function () {
//    MEDIA
    Route::post('/media', 'UploadMediaController@store');
    Route::post('/attachment', 'UploadAttachmentController@store');
});
