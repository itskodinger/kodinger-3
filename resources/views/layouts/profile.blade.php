@extends('layouts.app')

@section('content')
	<div class="bg-white border-b-2 border-gray-200">
        <div class="container mx-auto">
	    	<div class="flex py-10 pb-0">
				<img src="{{ $user->the_avatar }}" class="w-40 h-40 rounded-lg inline-block border-2 border-gray-200">
	    		<div class="ml-10">
    				<h1 class="font-bold text-xl">{{ $user->name }}</h1>
    				<div class="text-gray-600 text-sm">{{ $user->the_username }} &nbsp;&bull;&nbsp; bergabung {{ $user->created_at->diffForHumans() }}</div>
    				<p class="mt-3 text-base">{{ $user->location }}</p>
    				<p class="text-sm my-4 mb-5 text-gray-600 leading-relaxed">{{ $user->bio }}</p>
	    		</div>
    		</div>

			<ul class="flex mt-5">
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8{{ is_route('single', ' nav-active') }}" href="{{ route('single', $user->the_username) }}">Post</a></li>
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8{{ is_route('discuss', ' nav-active') }}" href="{{ route('discuss', $user->the_username) }}">Diskusi</a></li>
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8{{ is_route('loves', ' nav-active') }}" href="{{ route('loves', $user->the_username) }}">Disukai</a></li>
                @isme($user)
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8{{ is_route('saves', ' nav-active') }}" href="{{ route('saves') }}">Disimpan</a></li>
                @endisme
				<li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8{{ is_route('contributes', ' nav-active') }}" href="{{ route('contributes', $user->the_username) }}">Kontribusi</a></li>
                @isme($user)
                <li><a class="block text-gray-600 hover:text-indigo-600 text-sm py-6 mr-8{{ is_route('setting', ' nav-active') }}" href="{{ route('setting') }}">Pengaturan</a></li>
                @endisme
			</ul>
    	</div>
    </div>

    <div class="container py-12 mx-auto">
    	<div class="flex -mx-6">
    		<div class="w-8/12 px-6">
                @yield('profile_content')
    		</div>
    		<div class="w-4/12 px-6">
    			@sidebar
    		</div>
    	</div>
	</div>
@stop