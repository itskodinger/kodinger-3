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

function check_url($value)
{
	$value = trim($value);
	if (get_magic_quotes_gpc()) 
	{
		$value = stripslashes($value);
	}
	$value = strtr($value, array_flip(get_html_translation_table(HTML_ENTITIES)));
	$value = strip_tags($value);
	$value = htmlspecialchars($value);
	return $value;
}	

function get_data($url)
{
	$url = check_url($url);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

    $data = curl_exec($ch);
	$info = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
	
	//checking mime types
	if(strstr($info,'text/html')) {
		curl_close($ch);
    	return $data;
	} else {
		return false;
	}
}

function get_title_by_url($url)
{
	$url = parse_url($url);

	return str_replace('www.', '', $url['host']);
}

function determine_page_title($title, $url)
{
	$title = trim($title);

	$hide = [
		'Object moved',
		'Attention Required! | Cloudflare'
	];

	if(in_array($title, $hide))
		return get_title_by_url($url);

	return $title;
}

// https://stackoverflow.com/questions/2762061/how-to-add-http-if-it-doesnt-exists-in-the-url
function add_http($url) {
    if (!preg_match("~^(?:f|ht)tps?://~i", $url)) {
        $url = "http://" . $url;
    }
    return $url;
}

function is_route($name, $str)
{
	return request()->route()->getName() == $name ? $str : '';
}

function space_url($path=null)
{
	return env('DO_SPACES_BASEURL') . '/' . ($path ?? '');
}

function avatar_path()
{
	return 'public/avatar';
}

function avatar($name)
{
	return space_url(avatar_path() . '/' . $name);
}