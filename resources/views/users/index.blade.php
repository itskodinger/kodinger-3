@extends('layouts.dashboard', ['title' => 'Users'])

@section('dash_content')
	<h2 class="mb-3 text-gray-600 text-lg flex items-center">Semua Pengguna</h2>
	<div class="bg-white rounded border-2 border-gray-200">
    	@foreach($users as $user)
    	<div class="p-4 border-b border-gray-200 flex {{ $user->trashed() ? 'opacity-50' : '' }}">
    		<img src="{{ $user->the_avatar }}" class="w-16 rounded">
    		<div class="ml-4">
        		<div class="items-center flex">
	        		<div class="py-1 px-2 mr-2 rounded text-sm inline-block text-white capitalize {{ $user->status == 'active' ? 'bg-green-500' : 'bg-orange-500' }}">
	        			{{ $user->status }}
	        		</div>
	        		{{ $user->name }} <span class="text-sm ml-2">({{ $user->roles()->pluck('name')->implode(',') }})</span>
        		</div>
        		<div class="mt-2 -mx-3 text-gray-600 flex">
	        		<div class="mx-3">{{ $user->created_at->diffForHumans() }}</div>
	        		<a class="mx-3 text-black" href="@route('user.edit', $user->id)">Edit</a>
	        		@if($user->id !== 1)
	        		<a class="mx-3 text-red-600 cursor-pointer" onclick="let c = confirm('Are you sure?'); if(!c) return false; else document.getElementById('delete').submit();">Delete</a>
	        		<form action="@route('user.delete', $user->id)" method="post" id="delete">
	        			{!! method_field('delete') !!}
	        			@csrf
	        		</form>
	        		@endif
	        	</div>
        	</div>
    	</div>
    	@endforeach

	</div>
	<div class="mt-5"> 
    	{!! $users->links() !!}
    </div>
@stop