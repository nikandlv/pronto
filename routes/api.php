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
Route::post('/login', 'LoginController@login')->name('login');
Route::post('/register', 'AuthController@store')->name('register');
Route::post('/logout', 'AuthController@destroy')->middleware('auth:api')->name('logout');
Route::get('/user', 'AuthController@index')->middleware('auth:api')->name('user.current');

// Admin
Route::patch('/users/{user}/admin', 'AdminController@update')->middleware('auth:api', 'role:admin')->name('users.update');

// hasUserSettings
Route::post('/users/{user}/settings', 'SettingsController@store')->middleware('auth:api')->name('settings.personal');
Route::post('/admins/{admin}/settings', 'SiteSettingsController@store')->middleware('auth:api', 'role:admin')->name('settings.global');

Route::middleware(['auth:api'])->group(function () {
    Route::post('/posts', 'PostsController@store')->name('post.create');
    Route::delete('/posts/{post}', 'PostsController@destroy')->name('post.delete');
    Route::get('/posts', 'PostsController@index')->name('post.getAll');
    Route::get('/posts/{post}', 'PostsController@show')->name('post.getOne');
    Route::put('/posts/{post}', 'PostsController@update')->name('post.update');
});
