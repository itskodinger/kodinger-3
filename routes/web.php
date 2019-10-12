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

Route::get('/posts/create', 'PostController@create')->name('post.create');
Route::get('/posts', 'PostController@index')->name('post.index');
Route::get('/posts/{id}/publish', 'PostController@publish')->name('post.publish');
Route::get('/posts/{id}/edit', 'PostController@edit')->name('post.edit');
Route::put('/posts/{id}/edit', 'PostController@update')->name('post.update');
Route::patch('/posts/{id}/edit', 'PostController@update')->name('post.update');
Route::delete('/posts/{id}/delete', 'PostController@destroy')->name('post.delete');
Route::post('/posts', 'PostController@store')->name('post.store');
Route::get('/', 'FrontendController@index')->name('index');
Route::get('/{slug}', 'FrontendController@single')->name('single');
Route::get('/{slug}/recommend', 'FrontendController@recommend')->name('recommend');
Route::get('/{slug}/loves', 'FrontendController@profile_loves')->name('profile_loves');
Route::get('/tag/{slug}', 'FrontendController@index')->name('tag');
Route::get('/home', 'HomeController@index')->name('home');

Route::get('auth/{provider}', 'Auth\AuthController@redirectToProvider')->name('auth');
Route::get('auth/{provider}/callback', 'Auth\AuthController@handleProviderCallback');

Route::group(['prefix' => 'comments', 'as' => 'comments.'], function() 
{
	Route::group(['middleware' => 'auth'], function() 
	{
		Route::post('/', 'CommentController@store')->name('store');
		Route::delete('/delete', 'CommentController@destroy')->name('destroy');
	});
	Route::get('/{post_id}', 'CommentController@index')->name('index');
});

Route::group(['middleware' => 'auth', 'prefix' => 'saves', 'as' => 'saves.'], function() 
{
	Route::post('/', 'SaveController@store')->name('store');
});