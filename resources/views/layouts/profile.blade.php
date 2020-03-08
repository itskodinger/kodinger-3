@extends('layouts.app')

@push('vars')
    <script>const sidebar = 'manual';</script>
@endpush

@section('content')
    <div class="container mx-auto pb-20 md:pb-0 px-4 sm:px-0">
        <div class="flex -mx-4 flex-col lg:flex-row">
            <div class="lg:w-3/12 px-4 lg:py-0 flex-shrink-0 w-full">
                <ul class="lg:sticky lg:top-0 flex lg:flex-col flex-row lg:py-12 mb-4 mt-6 -mx-3 lg:mx-0 md:flex-wrap flex-no-wrap overflow-x-auto">
                    <li><a class="relative text-sm md:text-base flex px-3 py-4 rounded {{ is_route('single', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="@route('single', $user->the_username)">
                        <svg class="md:w-6 w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g></svg>
                        Profile 
                        @isme($user)
                        <div class="text-red-600 ml-1 -mt-2 text-lg" title="Konten Draft: {{ $user->draftedPostsCount() }}">&bull;</div>
                        @endisme
                    </a></li>
                    <li><a class="text-sm md:text-base flex px-3 py-4 rounded {{ is_route('discuss', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="@route('discuss', $user->the_username)">
                        <svg class="md:w-6 w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><circle cx="8" cy="11" r="1"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g></svg>
                        Diskusi
                    </a></li>
                    <li><a class="text-sm md:text-base flex px-3 py-4 rounded {{ is_route('loves', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="@route('loves', $user->the_username)">
                        <svg class="md:w-6 w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z"/></g></g></svg>
                        Disukai
                    </a></li>
                    @isme($user)
                    <li><a class="text-sm md:text-base flex px-3 py-4 rounded {{ is_route('saves', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="@route('saves')">
                        <svg class="md:w-6 w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                        Disimpan
                    </a></li>
                    @endisme
                    <li><a class="text-sm md:text-base flex px-3 py-4 rounded {{ is_route('contributes', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="@route('contributes', $user->the_username)">
                        <svg class="md:w-6 w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"/></g></g></svg>
                        Kontribusi
                    </a></li>
                    @isme($user)
                    <li><a class="text-sm md:text-base flex px-3 py-4 rounded {{ is_route('setting', ' text-indigo-600 font-bold', 'hover:text-indigo-600 text-gray-600') }}" href="@route('setting')">
                        <svg class="md:w-6 w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"/><path d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z" data-name="&lt;Group&gt;"/><path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></g></g></svg>
                        Pengaturan
                    </a></li>
                    @endisme
                </ul>
            </div>
            <div class="lg:w-9/12 px-4 lg:py-12 w-full flex-shrink-0">
                @useralert
                <div class="shadow-md rounded-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-full h-full bg-cover bg-center" style="filter: blur(10px);background-image: url({{ $user->the_avatar  }});"></div>
                    <div class="absolute top-0 left-0 w-full h-full z-1 bg-indigo-900 opacity-75"></div>
                    <div class="container mx-auto relative">
                        @isme($user)
                        <div class="absolute right-0 p-6">
                            <a href="@route('setting')" class="bg-white text-black text-xs py-1 px-3 rounded hover:bg-gray-200">Edit Profile</a>
                        </div>
                        @endisme
                        <div class="flex md:p-10 p-6 flex-col md:flex-row">
                            <img src="{{ $user->the_avatar }}" class="w-40 h-40 rounded-lg inline-block border-2 border-indigo-600">
                            <div class="md:ml-10 md:mt-0 mt-10">
                                <h1 class="font-bold text-xl text-white">{!! $user->name !!}</h1>
                                <div class="text-gray-400 text-sm">{{ $user->the_username }}</div>
                                <div class="flex md:flex-row flex-col">
                                    @if($user->location)
                                    <p class="mt-3 text-base text-gray-200 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2 fill-current text-gray-400" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"/></g></g></svg>
                                        {{ $user->location }}
                                    </p>
                                    @endif
                                    <p class="mt-3 text-base text-gray-200 flex items-center md:ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2 fill-current text-gray-400" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="clock"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"/></g></g></svg>
                                        {{ $user->created_at->diffForHumans() }}
                                    </p>
                                    @if($user->company)
                                    <p class="mt-3 text-base text-gray-200 flex items-center md:ml-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2 fill-current text-gray-400" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="code"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M8.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L4.29 12l4.48-5.36a1 1 0 0 0-.13-1.41z"/><path d="M21.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L19.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 16 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"/></g></g></svg>
                                        {{ $user->company }}
                                    </p>
                                    @endif
                                </div>
                                <p class="text-sm my-4 mb-5 text-gray-100 leading-relaxed">{{ $user->bio }}</p>

                                <a href="{{ $user->github }}?ref=kodinger_profile" class="mt-4 bg-black hover:bg-white hover:text-black px-4 py-2 group inline-block text-sm rounded text-white items-center inline-flex">
                                    <svg class="fill-current w-4 text-white inline-block mr-2 group-hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" opacity="0"/><path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></g></svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            	<div class="flex -mx-4 mt-10 flex-wrap">
            		<div class="md:w-8/12 w-12/12 px-4 md:flex-shrink-0">
                        @yield('profile_content')
            		</div>
            		<div class="md:w-4/12 w-12/12 px-4 md:flex-shrink-0">
            			@sidebar
                        <div class="md:mt-12 hidden md:block"></div>
                        @rightbar
            		</div>
            	</div>
            </div>
    	</div>
    </div>
@stop