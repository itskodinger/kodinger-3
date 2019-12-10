@extends('layouts.app')

@section('content')
	<div class="bg-white border-b-2 border-gray-200">
        <div class="container mx-auto">
	    	<div class="flex py-10">
				<img src="{{ $user->the_avatar }}" class="w-40 h-40 rounded-lg inline-block border-2 border-gray-200">
	    		<div class="ml-10">
    				<h1 class="font-bold text-xl">{{ $user->name }}</h1>
    				<div class="text-gray-600 text-sm">{{ $user->the_username }} &nbsp;&bull;&nbsp; bergabung {{ $user->created_at->diffForHumans() }}</div>
    				<p class="mt-3 text-base">{{ $user->location }}</p>
    				<p class="text-sm my-4 mb-5 text-gray-600 leading-relaxed">{{ $user->bio }}</p>
	    		</div>
    		</div>
    	</div>
    </div>

    <div class="container mx-auto">
        <div class="flex -mx-4">
            <div class="w-3/12 px-4 flex-shrink-0">
                <ul class="flex flex-col border-r-2 py-12">
                    <li><a class="flex px-3 py-4 rounded {{ is_route('single', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="{{ route('single', $user->the_username) }}">
                        <svg class="w-6 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"/></g></g></svg>
                        Post
                    </a></li>
                    <li><a class="flex px-3 py-4 rounded {{ is_route('discuss', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="{{ route('discuss', $user->the_username) }}">
                        <svg class="w-6 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><circle cx="8" cy="11" r="1"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g></svg>
                        Diskusi
                    </a></li>
                    <li><a class="flex px-3 py-4 rounded {{ is_route('loves', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="{{ route('loves', $user->the_username) }}">
                        <svg class="w-6 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z"/></g></g></svg>
                        Disukai
                    </a></li>
                    @isme($user)
                    <li><a class="flex px-3 py-4 rounded {{ is_route('saves', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="{{ route('saves') }}">
                        <svg class="w-6 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                        Disimpan
                    </a></li>
                    @endisme
                    <li><a class="flex px-3 py-4 rounded {{ is_route('contributes', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="{{ route('contributes', $user->the_username) }}">
                        <svg class="w-6 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"/></g></g></svg>
                        Kontribusi
                    </a></li>
                    @isme($user)
                    <li><a class="flex px-3 py-4 rounded {{ is_route('setting', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="{{ route('setting') }}">
                        <svg class="w-6 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"/><path d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z" data-name="&lt;Group&gt;"/><path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></g></g></svg>
                        Pengaturan
                    </a></li>
                    @endisme
                </ul>
            </div>
            <div class="w-9/12 px-4 py-12 flex-shrink-0">
            	<div class="flex -mx-4">
            		<div class="w-8/12 px-4 flex-shrink-0">
                        @yield('profile_content')
            		</div>
            		<div class="w-4/12 px-4 flex-shrink-0">
            			@sidebar
                        <div class="mt-12"></div>
                        @rightbar
            		</div>
            	</div>
            </div>
    	</div>
    </div>
@stop