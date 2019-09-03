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