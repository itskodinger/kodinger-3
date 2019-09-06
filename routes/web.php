<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/single', function () {
    return view('single');
});
Auth::routes();

Route::get('/', 'FrontendController@index')->name('index');
Route::get('/{slug}', 'FrontendController@single')->name('single');
Route::get('/tag/{slug}', 'FrontendController@tag')->name('tag');
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/posts/create', 'PostController@create')->name('post.create');
Route::get('/posts', 'PostController@index')->name('post.index');
Route::get('/posts/{id}/publish', 'PostController@publish')->name('post.publish');
Route::get('/posts/{id}/edit', 'PostController@edit')->name('post.edit');
Route::put('/posts/{id}/edit', 'PostController@update')->name('post.update');
Route::patch('/posts/{id}/edit', 'PostController@update')->name('post.update');
Route::post('/posts', 'PostController@store')->name('post.store');

Route::get('auth/{provider}', 'Auth\AuthController@redirectToProvider')->name('auth');
Route::get('auth/{provider}/callback', 'Auth\AuthController@handleProviderCallback');

Route::group(['middleware' => 'auth', 'prefix' => 'comments', 'as' => 'comments.'], function() 
{
	Route::post('/', 'CommentController@store')->name('store');
	Route::get('/{post_id}', 'CommentController@index')->name('index');
	Route::delete('/delete', 'CommentController@destroy')->name('destroy');
});

Route::group(['middleware' => 'auth', 'prefix' => 'saves', 'as' => 'saves.'], function() 
{
	Route::post('/', 'SaveController@store')->name('store');
});