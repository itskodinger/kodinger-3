<?php

use Illuminate\Http\Request;

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

Route::get('/test', function(){
    dd('test auth', auth()->user());
});

Route::get('tags', 'Api\TagApiController@index')->name('tags');
Route::group(['prefix' => 'tags', 'as' => 'tag.', 'namespace' => 'Api'], function() 
{
	Route::get('/search', 'TagApiController@search')->name('search');
});

Route::group(['prefix' => 'posts', 'as' => 'post.', 'namespace' => 'Api'], function() 
{
	Route::post('/link-info', 'PostApiController@getLinkInfo')->name('getLinkInfo');
	Route::post('/', 'PostApiController@store')->name('store');
	Route::get('/posts', 'PostApiController@posts')->name('posts');
	Route::get('/both', 'PostApiController@both')->name('both');
	Route::get('/discover', 'PostApiController@discover')->name('discover');
	Route::get('/{slug}', 'PostApiController@show')->name('show');

	Route::group(['middleware' => 'auth:api'], function() 
	{
		Route::post('/discover', 'PostApiController@storeDiscover')->name('store_discover');
	});
});

Route::group(['prefix' => 'comments', 'as' => 'comment.', 'namespace' => 'Api'], function() 
{
	Route::get('/{post_id?}', 'CommentApiController@index')->name('index');

	Route::group(['middleware' => 'auth:api'], function() 
	{
		Route::post('/', 'CommentApiController@store')->name('store');
		Route::delete('/delete', 'CommentApiController@destroy')->name('delete');
	});
});

Route::group(['prefix' => 'communities', 'as' => 'community.', 'namespace' => 'Api'], function() 
{
	Route::get('/', 'CommunityApiController@index')->name('index');
});

Route::group(['prefix' => 'saves', 'as' => 'saves.', 'namespace' => 'Api', 'middleware' => 'auth:api'], function() 
{
	Route::post('/', 'SaveApiController@store')->name('store');
});

Route::group(['prefix' => 'contributes', 'as' => 'contribute.', 'namespace' => 'Api', 'middleware' => 'auth:api'], function() 
{
	Route::post('{id}/{col}', 'ContributeApiController@store')->name('store');
});