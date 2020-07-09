@extends('layouts.dashboard', ['title' => 'Communities'])

@section('dash_content')
	<h2 class="mb-2 text-gray-600 text-lg flex items-center">Semua Komunitas
		@button(['tag' => 'a', 'href' => route('community.create'), 'class' => 'ml-auto'])
			Tambah Komunitas
		@endbutton
	</h2>
	<div class="bg-white rounded border-2 border-gray-200">
    	@foreach($communities as $community)
    	<div class="p-4 border-b border-gray-200">
    		<div class="items-center">
        		{{ $community->name }}
    		</div>
    		<div class="mt-2 -mx-3 text-gray-600 flex">
        		<div class="mx-3">{{ $community->created_at->diffForHumans() }}</div>
        		<a class="mx-3 text-black" href="@route('community.edit', $community->id)">Edit</a>
        		<a class="mx-3 text-red-600 cursor-pointer" onclick="let c = confirm('Are you sure?'); if(!c) return false; else document.getElementById('delete').submit();">Delete</a>
        		<form action="@route('community.delete', $community->id)" method="post" id="delete">
        			{!! method_field('delete') !!}
        			@csrf
        		</form>
        	</div>
    	</div>
    	@endforeach

	</div>
	<div class="mt-5"> 
    	{!! $communities->links() !!}
    </div>
@stop