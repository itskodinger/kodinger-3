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

Route::group(['prefix' => 'posts', 'as' => 'post.'], function() 
{
	Route::get('/posts/create', 'PostController@create')->name('create');
	Route::get('/', 'PostController@index')->name('index');
	Route::post('/link-info', 'PostController@getLinkInfo')->name('getLinkInfo');
	Route::get('/posts/{id}/publish', 'PostController@publish')->name('publish');
	Route::get('/posts/{id}/edit', 'PostController@edit')->name('edit');
	Route::put('/posts/{id}/edit', 'PostController@update')->name('update');
	Route::patch('/posts/{id}/edit', 'PostController@update')->name('update');
	Route::delete('/posts/{id}/delete', 'PostController@destroy')->name('delete');
	Route::post('/posts', 'PostController@store')->name('store');
});

Route::group(['prefix' => 'users', 'as' => 'user.'], function() 
{
	Route::get('/users/create', 'UserController@create')->name('create');
	Route::get('/', 'UserController@index')->name('index');
	Route::get('/users/{id}/edit', 'UserController@edit')->name('edit');
	Route::put('/users/{id}/edit', 'UserController@update')->name('update');
	Route::patch('/users/{id}/edit', 'UserController@update')->name('update');
	Route::delete('/users/{id}/delete', 'UserController@destroy')->name('delete');
	Route::post('/users', 'UserController@store')->name('store');
});

Route::get('/', 'FrontendController@index')->name('index');
Route::get('/{slug}', 'FrontendController@single')->name('single');
Route::get('/{slug}/recommend', 'FrontendController@recommend')->name('recommend')->middleware('auth');
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