@extends('layouts.app', ['title' => $user->name])

@section('content')
    <div class="container py-12 mx-auto">
		<div class="bg-white rounded shadow-md border-t-2 border-indigo-600">
	    	<div class="flex p-10 pb-0">
				<img src="{{ $user->the_avatar }}" class="w-40 h-40 rounded-full inline-block shadow-lg">
	    		<div class="ml-10">
    				<h1 class="mt-3 font-bold text-xl">{{ $user->name }}</h1>
    				<div class="text-gray-600 text-sm">{{ $user->the_username }}</div>
    				<p class="mt-3 text-base">{{ $user->location }}</p>
    				<p class="text-sm my-4 mb-5 text-gray-600 leading-relaxed">{{ $user->bio }}</p>
    				<div class="flex mt-4">
	    				<a href="" class="bg-indigo-600 text-white px-6 py-2 rounded shadow-md hover:shadow-none">
	    					Follow
	    				</a>
    				</div>
	    		</div>
    		</div>

			<ul class="flex mt-5 px-10">
				<li><a class="block text-indigo-600 font-bold border-b-2 border-indigo-600 text-sm py-6 mr-8" href="">Post</a></li>
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8" href="">Diskusi</a></li>
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8" href="">Disukai</a></li>
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8" href="">Disimpan</a></li>
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8" href="">Pengaturan</a></li>
			</ul>
    	</div>

    	<div class="flex py-10 -mx-6">
    		<div class="w-8/12 px-6">
    			<h4 class="text-lg font-bold mb-4">Post</h4>

    			<div class="bg-white shadow-md h-8 w-full rounded"></div>
    		</div>
    		<div class="w-4/12 px-6">
    			Hello
    		</div>
    	</div>
	</div>
@stop