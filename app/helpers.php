<?php

function nl_array($str)
{
	$arr = explode("\r\n", $str);

	return $arr;
}

function nl_array_end($str)
{
	$str = nl_array($str);

	return $str[count($str)-1];
}

function key2str($k)
{
	return [
		'inspirations' => 'Inspirasi',
		'pages' => 'Halaman Terkait',
		'tutorials' => 'Tutorial',
		'helps' => 'Komunitas',
		'examples' => 'Digunakan Oleh'
	][$k];
}

function user_post_saves()
{
	return auth()->user()->save_posts->pluck('row_id')->all();
}

function is_post_saved($post_id)
{
	return in_array($post_id, user_post_saves());
}