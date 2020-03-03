<?php

namespace Services;

use App\Tag;
use App\PostTag;
use DB;

class TagService 
{
	public function model()
	{
		return new Tag;
	}

	public function select()
	{
		$tags = $this->model()->all();

		$res = [];
		foreach($tags as $tag)
		{
			$res[$tag->id] = $tag->name;
		}

		return $res;
	}

	public function exists($tag)
	{
		return $this->model()->whereName($tag)->count();
	}

	public function popular($method_or_take=false, $args=false)
	{
		$tags = PostTag::groupBy('tag_id')
						->join('tags', 'post_tags.tag_id', 'tags.id')
						->select([
							'tags.name as name', 
							'tag_id', 
							DB::raw('count(*) as total')
						])
						->whereNotIn('name', skills())
						->orderBy('total', 'desc');

		if(is_numeric($method_or_take))
			$tags = $tags->take($method_or_take)->get();

		else if(is_array($method_or_take))
			$tags = $tags->offset($method_or_take[0])->take($method_or_take[1])->get();

		else if($method_or_take === false)
			return $tags;

		else if($method_or_take)
			$tags = $tags->{$method_or_take}($args);


		return $tags;
	}

	public function search($keyword)
	{
		return $this->model()->where('name', 'like', '%' . $keyword . '%')->select('name as value', 'id')->get();
	}
}