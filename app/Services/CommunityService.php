<?php

namespace Services;

use App\Community;
use Storage;
use Image;

class CommunityService
{
	protected $init;

	public function model()
	{
		return new Community;
	}

	public function total()
	{
		return $this->model()->count();
	}

	public function paginate($num=10)
	{
		$communities = $this->init ?? $this->model();

		$request = request();

		if($request) {
			$req_search = $request['search'] ?? null;
			if($req_search) {
				$communities = $communities->where('name', 'like', '%'. $req_search .'%');
			}
		}

		$communities = $communities->orderBy('created_at', 'desc')->paginate($num);

		return $communities;
	}

	public function uploadLogo($name, $logo)
	{
		$ext = $logo->getClientOriginalExtension();

		$the_name = str_slug($name, '-');

		// define new logo name
		$logo_name = $the_name . '.' . $ext; // with extension
		$logo_name_raw = $the_name; // w/o extension

		// define logo folder target
		$path = logo_path();

		// storing new logo file
		Storage::disk('spaces')->putFileAs($path, $logo, $logo_name, 'public');

		$img = Image::make($logo);
		$img->fit(80);
		$img80 = $img->stream()->detach();

		// storing cropped logos
		Storage::disk('spaces')->put($path . '/80/' . $logo_name, $img80, 'public');			

		// set the logo name
		return $logo_name;
	}

	public function create($request, $arr=[])
	{
		$input = $request->all();

		if($request->hasFile('logo')) {
			$input['logo'] = $this->uploadLogo($request->name, $request->logo);
		}

		$input['links'] = json_encode($request->links);

		$input = array_merge($input, $arr);

		$data = $this->model()->create($input);

		return $data;
	}

	public function findAndUpdate($id, $request)
	{
		$input = $request->all();	
		$input['links'] = json_encode($request->links);

		$data = $this->model()->find($id);

		if($request->hasFile('logo')) {
			$input['logo'] = $this->uploadLogo($request->name, $request->logo);
		}

		$data->update($input);

		return $data;
	}

	public function delete($id)
	{
		$post = $this->model()->find($id);

		return $post->delete($id);
	}
}