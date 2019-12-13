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

Auth::routes(['register' => false]);

Route::group(['prefix' => 'dashboard', 'as' => 'dashboard.'], function() 
{
	Route::get('/', 'DashboardController@index')->name('index')->middleware('permission:dashboard');
});

Route::group(['prefix' => 'communities', 'as' => 'community.', 'middleware' => 'auth'], function() 
{
	Route::get('/create', 'CommunityController@create')->name('create')->middleware('permission:community-create');
	Route::get('/', 'CommunityController@index')->name('index')->middleware('permission:community-list');
	Route::get('/{id}/edit', 'CommunityController@edit')->name('edit')->middleware('permission:community-update');
	Route::put('/{id}/edit', 'CommunityController@update')->name('update')->middleware('permission:community-update');
	Route::patch('/{id}/edit', 'CommunityController@update')->name('update')->middleware('permission:community-update');
	Route::delete('/{id}/delete', 'CommunityController@destroy')->name('delete')->middleware('permission:community-delete');
	Route::post('/', 'CommunityController@store')->name('store')->middleware('permission:community-create');
});

Route::group(['prefix' => 'posts', 'as' => 'post.', 'middleware' => 'auth'], function() 
{
	Route::group(['middleware' => 'auth'], function() 
	{
		Route::get('/create', 'PostController@create')->name('create')->middleware('permission:post-create');
		Route::get('/', 'PostController@index')->name('index')->middleware('permission:post-list');
		Route::get('/{id}/publish', 'PostController@publish')->name('publish')->middleware('permission:post-publish');
		Route::get('/{id}/edit', 'PostController@edit')->name('edit')->middleware('permission:post-update');
		Route::put('/{id}/edit', 'PostController@update')->name('update')->middleware('permission:post-update');
		Route::patch('/{id}/edit', 'PostController@update')->name('update')->middleware('permission:post-update');
		Route::delete('/{id}/delete', 'PostController@destroy')->name('delete')->middleware('permission:post-delete');
		Route::post('/', 'PostController@store')->name('store')->middleware('permission:post-create');
		Route::post('/discover', 'PostController@storeDiscover')->name('store_discover');
	});
	Route::post('/link-info', 'PostController@getLinkInfo')->name('getLinkInfo');
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
	// Route::get('/create', 'UserController@create')->name('create');
	Route::get('/', 'UserController@index')->name('index')->middleware('permission:user-list');
	Route::get('/{id}/edit', 'UserController@edit')->name('edit')->middleware('permission:user-update');
	Route::put('/{id}/edit', 'UserController@update')->name('update')->middleware('permission:user-update');
	Route::patch('/{id}/edit', 'UserController@update')->name('update')->middleware('permission:user-update');
	Route::delete('/{id}/delete', 'UserController@destroy')->name('delete')->middleware('permission:user-delete');
	// Route::post('/', 'UserController@store')->name('store');
});

Route::group(['prefix' => 'comments', 'as' => 'comment.'], function() 
{
	Route::group(['middleware' => 'auth'], function() 
	{
		Route::get('/', 'CommentController@index')->name('index');
		Route::post('/', 'CommentController@store')->name('store');
		Route::delete('/delete', 'CommentController@destroy')->name('destroy');
	});
	Route::get('/{post_id}', 'CommentController@ajax')->name('ajax');
});

Route::get('/', 'FrontendController@index')->name('index');
Route::get('/community', 'FrontendController@community')->name('community');
Route::get('/about', 'FrontendController@about')->name('about');
Route::get('/contact', 'FrontendController@contact')->name('contact');
Route::get('/discover/{tag?}', 'FrontendController@discover')->name('discover');
Route::get('/{slug}/loves', 'FrontendController@profileLoves')->name('loves');
Route::get('/saves', 'FrontendController@profileSaves')->name('saves');
Route::get('/{slug}/contributes', 'FrontendController@contributes')->name('contributes');
Route::get('/{slug}/discuss', 'FrontendController@discuss')->name('discuss');
Route::get('/setting', 'FrontendController@setting')->name('setting');
Route::post('/setting', 'FrontendController@settingUpdate')->name('setting_update');
Route::get('/{slug}', 'FrontendController@single')->name('single');
Route::get('/tag/{slug}', 'FrontendController@index')->name('tag');
Route::get('/home', 'HomeController@index')->name('home');

Route::get('auth/{provider}', 'Auth\AuthController@redirectToProvider')->name('auth');
Route::get('auth/{provider}/callback', 'Auth\AuthController@handleProviderCallback');

Route::group(['middleware' => 'auth', 'prefix' => 'saves', 'as' => 'saves.'], function() 
{
	Route::post('/', 'SaveController@store')->name('store');
});