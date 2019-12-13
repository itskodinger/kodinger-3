@extends('layouts.dashboard', ['title' => 'Edit Konten'])

@section('dash_content')
	@include('posts.form', ['action' => route('post.update', $post->id), 'method' => 'PUT'])
@stop

