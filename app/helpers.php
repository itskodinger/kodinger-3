<?php

function nl_array($str)
{
	if(!$str)
		return [];

	$arr = explode("\r\n", $str);

	return $arr;
}

function nl_list($str, $class='', $tag='div')
{
	$arr = nl_array($str);

	$out = '';
	foreach($arr as $r)
	{
		$out .= '<' . $tag . ' class="'.$class.'">' . $r . '</'. $tag .'>';
	}

	return $out;
}

function nl_array_first($str)
{
	$str = nl_array($str);

	return $str[0];
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
		'examples' => 'Demo'
	][$k];
}

function user_post_saves()
{
	return auth()->check() ? auth()->user()->save_posts->pluck('row_id')->all() : [];
}

function user_post_loves()
{
	return auth()->check() ? auth()->user()->love_posts->pluck('row_id')->all() : [];
}

function is_post_saved($post_id)
{
	return in_array($post_id, user_post_saves());
}

function is_post_loved($post_id)
{
	return in_array($post_id, user_post_loves());
}

function the_avatar()
{
	return auth()->check() ? auth()->user()->the_avatar : '';
}

function is_video($str)
{
	return strpos($str, '.mp4') > -1 ? true : false;
}

function recommend_fields()
{
	return [
		'pages',
		'tutorials',
		'helps',
		'examples',
	];
}

function truncate($str, $num=30)
{
	return substr($str, 0, $num) . (strlen($str) >= $num ? '...' : null);
}

function user_statuses()
{
	return [
		'active' => 'Active',
		'mute' => 'Mute',
		'ban' => 'Ban',
		'block' => 'Block'
	];
}

function get_data($url) {
	$ch = curl_init();
	$timeout = 5;
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}

function get_title_by_url($url)
{
	$url = parse_url($url);

	return str_replace('www.', '', $url['host']);
}

function determine_page_title($title, $url)
{
	$hide = [
		'Object moved',
	];

	if(in_array($title, $hide))
		return get_title_by_url($url);

	return $title;
}