@extends('layouts.dashboard', ['title' => 'Posts'])

@section('dash_content')
	<h2 class="flex items-center mb-2 text-lg text-gray-600">Semua Content
        <span class="ml-6">
            <a class="text-indigo-600" href="@current(['type' => 'link'])">Discover</a> |
            <a class="text-indigo-600" href="@current(['type' => 'content'])">Content</a> |
            <a class="text-indigo-600" href="@current(['status' => 'draft'])">Hanya Draft</a>
        </span>
		{{-- @button(['tag' => 'a', 'href' => route('post.create'), 'class' => 'ml-auto'])
			Tambah Konten
		@endbutton --}}
	</h2>
	<div class="bg-white border-2 border-gray-200 rounded">
    	@foreach($posts as $post)
    	<div class="p-4 border-b border-gray-200">
    		<div class="items-center break-all">
        		<div class="py-1 px-2 mr-1 rounded text-sm inline-block text-white capitalize {{ $post->status == 'publish' ? 'bg-green-500' : 'bg-orange-500' }}">
        			{{ $post->status }}
        		</div>
        		{{ $post->title ?? $post->raw_pages }}
    		</div>
    		<div class="flex mt-2 -mx-3 text-gray-600">
        		<div class="mx-3">{{ $post->created_at->diffForHumans() }}</div>
        		@if($post->status == 'draft')
        		<a class="mx-3 text-green-500" href="@route('post.publish', $post->id)">Publish</a>
        		@endif
        		<a class="mx-3 text-black" href="{{ edit_post_route($post) }}">Edit</a>
        		<a class="mx-3 text-red-600 cursor-pointer" onclick="let c = confirm('Are you sure?'); if(!c) return false; else document.getElementById('delete-{{$post->id}}').submit();">Delete</a>
        		<form action="@route('post.delete', $post->id)" method="post" id="delete-{{$post->id}}">
        			{!! method_field('delete') !!}
        			@csrf
        		</form>
                <a class="mx-3 text-indigo-600" href="@route('single', $post->user->username)">{!! $post->user->name !!}</a>
        	</div>
    	</div>
    	@endforeach

	</div>
	<div class="mt-5">
    	{!! $posts->links() !!}
    </div>
@stop
