<?php

namespace Services;

use App\User;
use Facades\Services\UserSettingService;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class UserService
{
	public function model()
	{
		return User::with('posts', 'comments', 'savePosts', 'lovePosts', 'savePosts.post')->withTrashed();
	}

	public function total()
	{
		return $this->model()->count();
	}

	public function find($id)
	{
		return $this->model()->find($id);
	}

	public function paginate($num=10)
	{
		$users = $this->model()->paginate($num);

		return $users;
	}

	public function weeklyTop($num=5)
	{
		return $this->model()
			->withCount('postsWeek')
			->withCount('posts')
			->withCount('commentsWeek')
			->withCount('comments')
			->orderBy('posts_week_count', 'desc')
			->orderBy('posts_count', 'desc')
			->orderBy('comments_week_count', 'desc')
			->orderBy('comments_count', 'desc')
			->take($num)
			->get($num);
	}

	public function userList($num=10)
	{
		$users = $this->model();

		$request = request();

		if($request) {
			$req_search = $request['search'] ?? null;
			if($req_search) {
				$users = $users->where('name', 'like', '%'. $req_search .'%');
			}
		}

		$users = $users
			->withCount('postsWeek')
			->withCount('posts')
			->withCount('commentsWeek')
			->withCount('comments')
			->orderBy('posts_week_count', 'desc')
			->orderBy('posts_count', 'desc')
			->orderBy('comments_week_count', 'desc')
			->orderBy('comments_count', 'desc')
			->paginate($num);

		return $users;
	}

	public function findAndUpdate($request, $id)
	{
		$user = $this->find($id);

		$input = $request->all() ?? $request;

		$user->update($input);

		$user->syncRoles($request->roles);

		return $user;

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
		$req = $request->all();
	
		foreach(supported_links() as $link)
		{
			$the_link = $req[$link['name']];
			if(isset($the_link))
			{
				$parse_url = parse_url($the_link);

				if(!isset($parse_url['host']))
				{
					return ['error' => true, 'msg' => 'URL ' . $link['display_name'] . ' tidak valid'];
				}

				if(isset($parse_url['host']) && str_replace('www.', '', $parse_url['host']) !== $link['domain'])
				{
					return ['error' => true, 'msg' => 'URL ' . $link['display_name'] . ' tidak benar'];
				}
			}
		}

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
			$img = $this->cropAvatar($request->avatar);
			$img460 = $img['460'];
			$img80 = $img['80'];

			// storing cropped avatars
			Storage::disk('spaces')->put($path . '/460/' . $avatar_name, $img460, 'public');
			Storage::disk('spaces')->put($path . '/80/' . $avatar_name, $img80, 'public');			

			// set the avatar name
			$avatar = $avatar_name;
		}

		$except = array_merge([
			'email', 
			'provider',
		], collect(supported_links())->pluck('name')->all());

		foreach(supported_links() as $link)
		{
			if(isset($req[$link['name']]))
				UserSettingService::sync(auth()->id(), $link['name'], $req[$link['name']]);
		}

		if(enable_username())
		{
			$except = array_push($except, 'username');
		}

		// save new user data
		return auth()->user()->update([
			'avatar' => $avatar
		] + $request->except($except));
	}

	public function cropAvatar($the_image)
	{
		$img = Image::make($the_image);
		$img->fit(460);
		$img460 = $img->stream()->detach();
		$img->fit(80);
		$img80 = $img->stream()->detach();

		return ['460' => $img460, '80' => $img80];
	}

	public function register($user, $provider)
	{
        $auth_user = User::where('email', $user->email)->first();

        if ($auth_user) {
            return $auth_user;
        }
        else{
            $file_contents = file_get_contents($user->getAvatar());

            $avatar = $user->getId() . '.jpg';
            $path = avatar_path();

            Storage::disk('spaces')->put($path . '/' . $avatar, $file_contents, 'public');

			// crop the avatar
			$img = $this->cropAvatar($file_contents);
			$img460 = $img['460'];
			$img80 = $img['80'];

			Storage::disk('spaces')->put($path . '/460/' . $avatar, $img460, 'public');
			Storage::disk('spaces')->put($path . '/80/' . $avatar, $img80, 'public');			

            $user = User::create([
                'name'     => $user->name ?? $user->nickname,
                'email'    => !empty($user->email)? $user->email : '' ,
                'username' => $user->nickname ?? $user->id,
                'provider' => $provider,
                'provider_id' => $user->id,
                'avatar' => $avatar,
                'bio' => $user->user['bio'] ?? '',
                'link' => $user->user['blog'] ?? '',
                'location' => $user->user['location'] ?? '',
                'hireable' => $user->user['hireable'] ?? '',
                'github' => $user->user['html_url'] ?? '',
                'company' => $user->user['company'] ?? '',
                'status' => 'active'
            ]);

            User::find($user->id)->assignRole('member');

            return $user;
        }
	}

	public function destroy($id)
	{
		$user = $this->model()->find($id);

		if($user->trashed())
		{
			return $user->forceDelete();
		}

		return $user->delete();
	}
}