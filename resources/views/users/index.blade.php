@extends('layouts.app', ['title' => 'Users'])

@section('content')
    <div class="flex items-center py-12">
        <div class="md:w-1/2 md:mx-auto">
        	<h2 class="mb-2 text-gray-600 text-lg flex items-center">Semua Pengguna
        		@button(['tag' => 'a', 'href' => route('user.create'), 'class' => 'text-sm ml-auto'])
        			Tambah Pengguna
        		@endbutton
        	</h2>
        	<div class="bg-white rounded shadow-md">
	        	@foreach($users as $user)
	        	<div class="p-4 border-b border-gray-200 flex">
	        		<img src="{{ $user->the_avatar }}" class="w-16 rounded">
	        		<div class="ml-4">
		        		<div class="items-center flex">
			        		<div class="py-1 px-2 mr-2 rounded text-xs inline-block text-white capitalize {{ $user->status == 'active' ? 'bg-green-500' : 'bg-orange-500' }}">
			        			{{ $user->status }}
			        		</div>
			        		{{ $user->name }}
		        		</div>
		        		<div class="mt-2 -mx-3 text-gray-600 text-sm flex">
			        		<div class="mx-3">{{ $user->created_at->diffForHumans() }}</div>
			        		<a class="mx-3 text-black" href="{{ route('user.edit', $user->id) }}">Edit</a>
			        		<a class="mx-3 text-red-600 cursor-pointer" onclick="let c = confirm('Are you sure?'); if(!c) return false; else document.getElementById('delete').submit();">Delete</a>
			        		<form action="{{ route('user.delete', $user->id) }}" method="post" id="delete">
			        			{!! method_field('delete') !!}
			        			@csrf
			        		</form>
			        	</div>
		        	</div>
	        	</div>
	        	@endforeach

        	</div>
        	<div class="mt-5"> 
	        	{!! $users->links() !!}
	        </div>
        </div>
    </div>
@stop