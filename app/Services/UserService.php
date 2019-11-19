<?php

namespace Services;

use App\User;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class UserService
{
	public function model()
	{
		return User::with('posts');
	}

	public function find($id)
	{
		return $this->model()->find($id);
	}

	public function paginate($num=10)
	{
		return $this->model()->paginate($num);
	}

	public function findByUsername($username)
	{
		if(strpos($username, '@') > -1) 
		{
			// remove @ sign
			$username = str_replace('@', '', $username);
		}

		return $this->model()->whereUsername($username)->first();
	}

	public function setting($request)
	{
		// define user's avatar
		$avatar = auth()->user()->avatar;

		// when user update their avatar
		if($request->hasFile('avatar')) {
			$ext = $request->avatar->getClientOriginalExtension();
			$user_provider_id = auth()->user()->provider_id;
			// define new avatar name
			$avatar_name = $user_provider_id . '.' . $ext; // with extension
			$avatar_name_raw = $user_provider_id; // w/o extension

			$old_avatar = auth()->user()->avatar; // get old avatar name

			// define avatar folder target
			$path = avatar_path(); 

			// delete the old avatar file
			$old_avatar_check = Storage::disk('spaces')->exists($path . '/' . $old_avatar);
			// if old avatar file exist
			if($old_avatar_check)
				Storage::disk('spaces')->delete($path . '/' . $old_avatar); // delete it!

			// storing new avatar file
			Storage::disk('spaces')->putFileAs($path, $request->avatar, $avatar_name, 'public');

			// crop the avatar
			$img = Image::make($request->avatar);
			$img->fit(460);
			$img640 = $img->stream()->detach();
			$img->fit(80);
			$img80 = $img->stream()->detach();

			// storing cropped avatars
			Storage::disk('spaces')->put($path . '/640/' . $avatar_name, $img640, 'public');
			Storage::disk('spaces')->put($path . '/80/' . $avatar_name, $img80, 'public');			

			// set the avatar name
			$avatar = $avatar_name;
		}

		// save new user data
		return auth()->user()->update([
			'avatar' => $avatar
		] + $request->except(['email', 'username', 'provider']));
	}
}