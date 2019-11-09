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

// Routes for auth system login and log out
Route::post('/login', 'LoginController@login')->name('login');
Route::post('/register', 'AuthController@store')->name('register');
Route::post('/logout', 'AuthController@destroy')->middleware('auth:api')->name('logout');
Route::get('/user', 'AuthController@index')->middleware('auth:api')->name('currentUser');

Route::patch('/users/{user}/admin' , 'AdminController@update')->middleware('auth:api' , 'admin')->name('updateUser');


Route::middleware(['auth:api'])->group(function () {
    Route::post('/posts' , 'PostsController@store');
    Route::delete('/posts/{post}', 'PostsController@destroy');
    Route::get('/posts' , 'PostsController@index');
    Route::get('/posts/{post}' , 'PostsController@show');
    Route::put('/posts/{post}' , 'PostsController@update');
});
