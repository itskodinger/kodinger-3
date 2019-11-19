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

Route::get('/files', function() {
	dd(Storage::disk('spaces')->allFiles());
});
Auth::routes(['register' => false]);

Route::group(['prefix' => 'posts', 'as' => 'post.'], function() 
{
	Route::get('/create', 'PostController@create')->name('create');
	Route::get('/', 'PostController@index')->name('index');
	Route::post('/link-info', 'PostController@getLinkInfo')->name('getLinkInfo');
	Route::get('/{id}/publish', 'PostController@publish')->name('publish');
	Route::get('/{id}/edit', 'PostController@edit')->name('edit');
	Route::put('/{id}/edit', 'PostController@update')->name('update');
	Route::patch('/{id}/edit', 'PostController@update')->name('update');
	Route::delete('/{id}/delete', 'PostController@destroy')->name('delete');
	Route::post('/', 'PostController@store')->name('store');
});

Route::group(['prefix' => 'contributes', 'as' => 'contribute.', 'middleware' => 'auth'], function() 
{
	Route::get('/', 'ContributeController@index')->name('index');
	Route::get('/{slug}', 'ContributeController@create')->name('create');
	Route::post('{id}/{col}/links', 'ContributeController@links')->name('links');
	Route::delete('{id}', 'ContributeController@destroy')->name('delete');
	Route::get('{id}/merge', 'ContributeController@merge')->name('merge');
	Route::post('{id}/reject', 'ContributeController@reject')->name('reject');
});

Route::group(['prefix' => 'users', 'as' => 'user.'], function() 
{
	// Route::get('/users/create', 'UserController@create')->name('create');
	Route::get('/', 'UserController@index')->name('index');
	Route::get('/users/{id}/edit', 'UserController@edit')->name('edit');
	Route::put('/users/{id}/edit', 'UserController@update')->name('update');
	Route::patch('/users/{id}/edit', 'UserController@update')->name('update');
	Route::delete('/users/{id}/delete', 'UserController@destroy')->name('delete');
	Route::post('/users', 'UserController@store')->name('store');
});

Route::get('/', 'FrontendController@index')->name('index');
Route::get('/{slug}/loves', 'FrontendController@profile_loves')->name('loves');
Route::get('/saves', 'FrontendController@profile_saves')->name('saves');
Route::get('/{slug}/contributes', 'FrontendController@contributes')->name('contributes');
Route::get('/{slug}/disccuss', 'FrontendController@disccuss')->name('disccuss');
Route::get('/setting', 'FrontendController@setting')->name('setting');
Route::post('/setting', 'FrontendController@setting_update')->name('setting_update');
Route::get('/{slug}', 'FrontendController@single')->name('single');
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