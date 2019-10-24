@extends('layouts.app', ['title' => 'Semua Kontribusi'])

@section('content')
    <div class="flex items-center py-12">
        <div class="md:w-1/2 md:mx-auto">
        	<div class="mb-4">
	        	@include('flash::message')
        	</div>

        	<h2 class="mb-2 text-gray-600 text-lg flex items-center">Semua Kontribusi
        	</h2>
        	@if(count($contributes) < 1)
        	<p>Nggak ada</p>
        	@endif
        	@foreach($contributes as $contribute)
        	<div class="p-4 border-b border-gray-200 bg-white rounded shadow-md mb-8">
        		<div class="items-center">
	        		<div class="py-1 px-2 mr-1 rounded text-xs inline-block text-white capitalize {{ $contribute->status == 'merged' ? 'bg-green-500' : 'bg-orange-500' }}">
	        			{{ $contribute->status }}
	        		</div>
	        		<a class="hover:text-indigo-500" href="{{ route('single', $contribute->post->slug) }}">{{ $contribute->post->title }}</a>
        		</div>
        		<div class="mt-6 mb-2 text-sm text-gray-600">{{ key2str($contribute->column_name) }}</div>
        		<div class="border border-gray-200 bg-gray-100 rounded mb-4 p-4">
        			{!! nl_list($contribute->post->{$contribute->column_name}) . nl_list($contribute->value, 'text-green-500 font-semibold') !!}
        		</div>
        		<div class="mt-6 mb-2 text-sm text-gray-600">Catatan (Bila Reject)</div>
        		<form action="{{ route('contribute.reject', $contribute->id) }}" method="post" id="reject-form-{{$contribute->id}}">
        			@csrf
        			<textarea name="note" class="border border-gray-200 p-4 rounded w-full bg-gray-100 text-sm focus:outline-none focus:bg-white" placeholder="Cth: Link tidak bisa diakses"></textarea>
        		</form>
        		<div class="w-full h-px bg-gray-200 my-4"></div>
        		<div class="mt-2 -mx-3 text-gray-600 text-sm flex">
	        		<div class="mx-3"><a href="{{ route('single', $contribute->user->username) }}" class="text-indigo-500 hover:text-indigo-800">{{ $contribute->user->name }}</a></div>
	        		<div class="mx-3">{{ $contribute->created_at->diffForHumans() }}</div>
	        		@if($contribute->status == 'draft')
	        		<a class="mx-3 text-green-500" href="{{ route('contribute.merge', $contribute->id) }}">Merge</a>
	        		<a class="mx-3 text-orange-500" href="#" onclick="document.querySelector('#reject-form-{{$contribute->id}}').submit();">Reject</a>
	        		@endif
	        		<a class="mx-3 text-red-600 cursor-pointer" onclick="let c = confirm('Are you sure?'); if(!c) return false; else document.getElementById('delete').submit();">Delete</a>
	        		<form action="{{ route('contribute.delete', $contribute->id) }}" method="post" id="delete">
	        			{!! method_field('delete') !!}
	        			@csrf
	        		</form>
	        	</div>
        	</div>
        	@endforeach
        	<div class="mt-5"> 
	        	{!! $contributes->links() !!}
	        </div>
        </div>
    </div>
@stop