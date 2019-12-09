@extends('layouts.dashboard', ['title' => 'Buat Konten'])

@section('dash_content')
    <div class="flex items-center py-12">
        <div class="md:w-1/2 md:mx-auto">
        	@include('posts.form')
		</div>
	</div>
@stop

