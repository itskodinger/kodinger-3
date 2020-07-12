<?php

Route::get('tags', 'TagAjaxController@index')->name('tags');
Route::group(['prefix' => 'tags', 'as' => 'tag.'], function() 
{
	Route::get('/search', 'TagAjaxController@search')->name('search');
});

Route::group(['prefix' => 'posts', 'as' => 'post.'], function() 
{
	Route::post('/link-info', 'PostAjaxController@getLinkInfo')->name('getLinkInfo');
	Route::post('/markdown', 'PostAjaxController@markdown')->name('markdown');
	Route::post('/markdown-ns', 'PostAjaxController@markdownNotSafe')->name('markdown-ns');

	// needs auth
	Route::post('/', 'PostAjaxController@store')->name('store')->middleware('auth');
	Route::put('/{id}', 'PostAjaxController@update')->name('update')->middleware('auth');
	Route::patch('/{id}', 'PostAjaxController@update')->name('update')->middleware('auth');
	Route::put('/{id}/publish', 'PostAjaxController@publish')->name('publish')->middleware('auth');
	Route::patch('/{id}/publish', 'PostAjaxController@publish')->name('publish')->middleware('auth');
	Route::get('/edit/{id}', 'PostAjaxController@edit')->name('edit')->middleware('auth');
	Route::post('/check-slug', 'PostAjaxController@checkSlug')->name('check_slug');
	Route::post('/upload-image', 'PostAjaxController@uploadImage')->name('upload_image')->middleware('auth');
	Route::delete('/delete-image', 'PostAjaxController@deleteImage')->name('delete_image')->middleware('auth');

	Route::get('/posts', 'PostAjaxController@posts')->name('posts');
	Route::get('/both', 'PostAjaxController@both')->name('both');
	Route::get('/timeline', 'PostAjaxController@timeline')->name('timeline');
	Route::get('/discover', 'PostAjaxController@discover')->name('discover');
	Route::get('/{slug}', 'PostAjaxController@show')->name('show');

	// needs auth
	Route::post('/discover', 'PostAjaxController@storeDiscover')->name('store_discover')->middleware('auth');
});

Route::group(['prefix' => 'comments', 'as' => 'comment.'], function() 
{
	Route::get('/{post_id?}/{user_id?}', 'CommentAjaxController@index')->name('index');

	// needs auth
	Route::post('/', 'CommentAjaxController@store')->name('store')->middleware('auth');
	Route::delete('/delete', 'CommentAjaxController@destroy')->name('delete')->middleware('auth');
});

Route::group(['prefix' => 'communities', 'as' => 'community.'], function() 
{
	Route::get('/', 'CommunityAjaxController@index')->name('index');
});

Route::group(['prefix' => 'users', 'as' => 'user.'], function() 
{
	Route::get('/', 'UserAjaxController@index')->name('index');
});

// needs auth
Route::group(['prefix' => 'saves', 'as' => 'saves.'], function() 
{
	Route::post('/', 'SaveAjaxController@store')->name('store')->middleware('auth');
});

// needs auth
Route::group(['prefix' => 'contributes', 'as' => 'contribute.'], function() 
{
	Route::post('{id}/{col}', 'ContributeAjaxController@store')->name('store')->middleware('auth');
});