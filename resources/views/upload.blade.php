@extends('layouts.app', ['title' => 'Buat Konten'])

@section('content')
    <div class="flex items-center">
        <div class="md:w-1/2 md:mx-auto">
        	@include('posts.form')
		</div>
	</div>
@stop

