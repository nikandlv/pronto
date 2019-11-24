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
Route::group(['prefix' => '/auth/'], function () {
    Route::post('/login', 'LoginController@login');
    Route::post('/register', 'AuthController@store');
    Route::post('/logout', 'AuthController@destroy')->middleware('auth:api');
    Route::get('/user', 'AuthController@index')->middleware('auth:api');
});


// Admin
Route::patch('/users/{user}/admin', 'AdminController@update')->middleware('auth:api', 'role:admin');

// hasUserSettings
Route::post('/users/{user}/settings', 'SettingsController@store')->middleware('auth:api');
Route::post('/admins/{admin}/settings', 'SiteSettingsController@store')->middleware('auth:api', 'role:admin');

// Post system
Route::group(['middleware' => 'auth:api', 'prefix' => '/posts'], function () {
    Route::post('', 'PostsController@store')->name('post.create');
    Route::delete('/{post}', 'PostsController@destroy')->name('post.delete');
    Route::get('', 'PostsController@index')->name('post.getAll');
    Route::get('/{post}', 'PostsController@show')->name('post.getOne');
    Route::put('/{post}', 'PostsController@update')->name('post.update');
});
