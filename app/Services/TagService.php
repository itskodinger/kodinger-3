<?php

namespace Services;

use App\Tag;

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
}