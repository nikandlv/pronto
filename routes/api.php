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


//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('/register', 'RegisterController@store');
Route::post('/register', '@store');

Route::post('/posts' , 'PostsController@store');
Route::delete('/posts/{post}', 'PostsController@destroy');
Route::get('/posts' , 'PostsController@index');
Route::get('/posts/{post}' , 'PostsController@show');
Route::put('/posts/{post}' , 'PostsController@update');
