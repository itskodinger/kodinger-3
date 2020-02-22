<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @stack('meta')

    <title>{{ (isset($title) ? $title . ' – ' : '') . config('app.name', 'Laravel') }}</title>

    <link rel="shortcut icon" href="{{ logo('kodinger.svg') }}">

    @stack('css')

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body class="h-screen bg-white">
    <div class="share-modal overflow-y-auto fixed top-0 left-0 w-full h-full flex z-20 md:items-center items-start justify-center hidden">
        <div class="fixed bg-black opacity-50 w-screen h-screen"></div>
        <div class="p-10 sm:w-4/12 lg:w-4/12 md:w-6/12 w-full h-full md:h-auto bg-white relative md:rounded shadow-lg">
            <div class="share-modal-close absolute top-0 right-0 bg-red-600 w-10 h-10 rounded-bl text-center cursor-pointer hover:bg-red-700 flex items-center justify-center"><svg class="inline-block w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg></div>
            <h2 class="text-xl font-bold">Berbagi dengan teman</h2>
            <p class="text-sm text-gray-600 mt-2 leading-relaxed">Bagikan konten ini ke sosial media, website atau platform apapun yang kamu miliki.</p>
            <div class="mt-6 share-buttons">
            </div>
        </div>
    </div>
    @guest
    <div class="login-alert overflow-y-auto fixed top-0 left-0 w-full h-full flex z-20 md:items-center items-start justify-center hidden">
        <div class="fixed bg-black opacity-50 w-screen h-screen"></div>
        <div class="p-10 sm:w-4/12 lg:w-4/12 md:w-6/12 w-full h-full md:h-auto bg-white relative md:rounded shadow-lg">
            <div class="login-alert-close absolute top-0 right-0 bg-red-600 w-10 h-10 rounded-bl text-center cursor-pointer hover:bg-red-700 flex items-center justify-center"><svg class="inline-block w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg></div>
            <h2 class="text-xl font-bold mb-2">Maaf, kamu harus login dulu, Jon!</h2>
            @include('layouts.login_content')
        </div>
    </div>
    @endguest
    <div id="app">
    	@if(@$navbar !== false)
        <nav class="primary-nav {{!isset($auto_hide) ? 'nav-auto-hide ' : ''}}bg-white border-b-2 border-indigo-600 top-0 shadow mb-4 py-3 fixed left-0 w-full z-10">
            <div class="container mx-auto sm:px-6 px-4 md:px-0">
                <div class="flex items-center{{ !isset($empty_navbar) ? ' justify-center' : ''}}">
                    <a href="{{ url('/') }}" class="text-lg flex-shrink-0 font-semibold text-indigo-600 no-underline">
                        <img alt="logo" src="{{ logo('kodinger.svg') }}" width="45">
                    </a>
                    @if(!isset($empty_navbar))
                    <div class="ml-4 hidden sm:flex">
                        <a class="text-sm py-4 mx-5 md:mx-3 flex items-center {{ is_route('index', 'text-indigo-600', 'text-gray-500')}} hover:text-indigo-600" href="{{ url('') }}">
                        	<svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2 fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"/></g></g></svg>
                        	<span class="md:hidden lg:block">Beranda</span>
                        </a>
                        <a class="text-sm py-4 mx-5 md:mx-3 flex items-center {{ is_route('discover', 'text-indigo-600', 'text-gray-500')}} hover:text-indigo-600" href="@route('discover')">
                        	<svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2 fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z"/></g></g></svg>
                        	<span class="md:hidden lg:block">Discover</span>
                        </a>
                        <a class="text-sm py-4 mx-5 md:mx-3 flex items-center {{ is_route('community', 'text-indigo-600', 'text-gray-500')}} hover:text-indigo-600" href="@route('community')">
                        	<svg xmlns="http://www.w3.org/2000/svg" class="w-5 mr-2 fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"/></g></g></svg>
                        	<span class="md:hidden lg:block">Komunitas</span>
                        </a>
                    </div>
                    <div class="ml-auto w-full sm:w-auto flex items-center">
                        <form action="@route('search')" autocomplete="off" class="mx-4 sm:mx-0 w-full sm:w-auto">
                        	@if(request()->has('type'))
                        	<input type="hidden" name="type" value="{{ request()->type }}">
                        	@endif
                            <input type="text" name="q" class="bg-search focus:outline-none pl-10 border-2 border-gray-200 focus:border-indigo-600 py-3 px-4 sm:mr-2 rounded text-sm sm:w-64 w-full" placeholder="Pencarian" value="{{ request()->q }}">
                        </form>
                        <div class="w-px h-6 mx-6 mr-8 bg-gray-200 hidden sm:block"></div>
                        @guest
                            <a href="@route('auth', 'github')" class="inline-flex items-center bg-black py-3 px-4 rounded text-white text-sm shadow-lg hover:shadow-none hover:bg-indigo-800">
                                <svg class="w-5 fill-current text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" opacity="0"/><path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></g></svg>
                                <span class="hidden md:inline-block">Login with GitHub</span>
                                <span class="inline-block md:hidden">Login</span>
                            </a>
                        @else
                        	<a href="@route('post')" class="items-center bg-gradient text-white px-4 py-2 text-sm rounded mr-6 shadow-md hover:shadow-none hidden sm:flex">
                            	<svg class="w-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"/></g></g></svg>
                        		Buat Post
                        	</a>
                            <div class="relative flex-shrink-0">
                                <a onclick="this.nextElementSibling.classList.toggle('hidden');document.body.classList.toggle('overflow-hidden');"><img alt="{{ auth()->user()->name }}" src="{{ auth()->user()->the_avatar_sm }}" class="user-dropdown cursor-pointer rounded border w-10"></a>
                                <ul class="user-dropdown-menu sm:absolute fixed sm:h-auto h-full hidden bg-white shadow-lg right-0 sm:mt-3 mt-4 border-t sm:border-t-0 sm:rounded sm:w-56 w-full">
                                    @can('dashboard')
                                    <li><a class="flex py-3 px-5 text-sm text-indigo-600 hover:bg-indigo-100 rounded-tr rounded-tl" href="@route('dashboard.index')">
                                        <svg class="w-4 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"/></g></g></svg>
                                        Dashboard
                                    </a></li>
                                    <li class="w-full h-px bg-gray-200"></li>
                                    @endcan
                                    <li><a class="flex py-3 px-5 text-sm text-gray-800 hover:bg-indigo-100 rounded-tr rounded-tl" href="@route('post')">
                                    	<svg class="w-4 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"/></g></g></svg>
                                        Buat Post
                                    </a></li>
                                    <li><a class="flex py-3 px-5 text-sm text-gray-800 hover:bg-indigo-100 rounded-tr rounded-tl" href="@route('single', auth()->user()->the_username)">
                                        <svg class="w-4 mr-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z"/></g></g></svg>
                                        Profile
                                    </a></li>
                                    <li><a class="flex py-3 px-5 text-sm text-gray-800 hover:bg-indigo-100 rounded-tr rounded-tl" href="@route('discuss', auth()->user()->the_username)">
                                        <svg class="w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="message-square"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="11" r="1"/><circle cx="16" cy="11" r="1"/><circle cx="8" cy="11" r="1"/><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/></g></g></svg>
                                        Diskusi
                                    </a></li>
                                    <li><a class="flex py-3 px-5 text-sm text-gray-800 hover:bg-indigo-100 rounded-tr rounded-tl" href="@route('loves', auth()->user()->the_username)">
                                        <svg class="w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="heart"><rect width="24" height="24" opacity="0"/><path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z"/></g></g></svg>
                                        Disukai
                                    </a></li>
                                    <li><a class="flex py-3 px-5 text-sm text-gray-800 hover:bg-indigo-100 rounded-tr rounded-tl" href="@route('saves')">
                                        <svg class="w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                                        Disimpan
                                    </a></li>
                                    <li><a class="flex py-3 px-5 text-sm text-gray-800 hover:bg-indigo-100 rounded-tr rounded-tl" href="@route('contributes', auth()->user()->the_username)">
                                        <svg class="w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="flash"><rect width="24" height="24" opacity="0"/><path d="M11.11 23a1 1 0 0 1-.34-.06 1 1 0 0 1-.65-1.05l.77-7.09H5a1 1 0 0 1-.83-1.56l7.89-11.8a1 1 0 0 1 1.17-.38 1 1 0 0 1 .65 1l-.77 7.14H19a1 1 0 0 1 .83 1.56l-7.89 11.8a1 1 0 0 1-.83.44zM6.87 12.8H12a1 1 0 0 1 .74.33 1 1 0 0 1 .25.78l-.45 4.15 4.59-6.86H12a1 1 0 0 1-1-1.11l.45-4.15z"/></g></g></svg>
                                        Kontribusi
                                    </a></li>
                                    <li><a class="flex py-3 px-5 text-sm text-gray-800 hover:bg-indigo-100" href="@route('setting')">
                                        <svg class="w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="settings"><rect width="24" height="24" opacity="0"/><path d="M8.61 22a2.25 2.25 0 0 1-1.35-.46L5.19 20a2.37 2.37 0 0 1-.49-3.22 2.06 2.06 0 0 0 .23-1.86l-.06-.16a1.83 1.83 0 0 0-1.12-1.22h-.16a2.34 2.34 0 0 1-1.48-2.94L2.93 8a2.18 2.18 0 0 1 1.12-1.41 2.14 2.14 0 0 1 1.68-.12 1.93 1.93 0 0 0 1.78-.29l.13-.1a1.94 1.94 0 0 0 .73-1.51v-.24A2.32 2.32 0 0 1 10.66 2h2.55a2.26 2.26 0 0 1 1.6.67 2.37 2.37 0 0 1 .68 1.68v.28a1.76 1.76 0 0 0 .69 1.43l.11.08a1.74 1.74 0 0 0 1.59.26l.34-.11A2.26 2.26 0 0 1 21.1 7.8l.79 2.52a2.36 2.36 0 0 1-1.46 2.93l-.2.07A1.89 1.89 0 0 0 19 14.6a2 2 0 0 0 .25 1.65l.26.38a2.38 2.38 0 0 1-.5 3.23L17 21.41a2.24 2.24 0 0 1-3.22-.53l-.12-.17a1.75 1.75 0 0 0-1.5-.78 1.8 1.8 0 0 0-1.43.77l-.23.33A2.25 2.25 0 0 1 9 22a2 2 0 0 1-.39 0zM4.4 11.62a3.83 3.83 0 0 1 2.38 2.5v.12a4 4 0 0 1-.46 3.62.38.38 0 0 0 0 .51L8.47 20a.25.25 0 0 0 .37-.07l.23-.33a3.77 3.77 0 0 1 6.2 0l.12.18a.3.3 0 0 0 .18.12.25.25 0 0 0 .19-.05l2.06-1.56a.36.36 0 0 0 .07-.49l-.26-.38A4 4 0 0 1 17.1 14a3.92 3.92 0 0 1 2.49-2.61l.2-.07a.34.34 0 0 0 .19-.44l-.78-2.49a.35.35 0 0 0-.2-.19.21.21 0 0 0-.19 0l-.34.11a3.74 3.74 0 0 1-3.43-.57L15 7.65a3.76 3.76 0 0 1-1.49-3v-.31a.37.37 0 0 0-.1-.26.31.31 0 0 0-.21-.08h-2.54a.31.31 0 0 0-.29.33v.25a3.9 3.9 0 0 1-1.52 3.09l-.13.1a3.91 3.91 0 0 1-3.63.59.22.22 0 0 0-.14 0 .28.28 0 0 0-.12.15L4 11.12a.36.36 0 0 0 .22.45z" data-name="&lt;Group&gt;"/><path d="M12 15.5a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z"/></g></g></svg>
                                        Pengaturan
                                    </a></li>
                                    <li class="w-full h-px bg-gray-200"></li>
                                    <li><a onclick="event.preventDefault();document.getElementById('logout-form').submit();" class="flex py-3 px-5 text-sm text-red-600 hover:bg-indigo-100 rounded-br rounded-bl" href="">
                                        <svg class="w-4 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="log-out"><rect width="24" height="24" transform="rotate(90 12 12)" opacity="0"/><path d="M7 6a1 1 0 0 0 0-2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H6V6z"/><path d="M20.82 11.42l-2.82-4a1 1 0 0 0-1.39-.24 1 1 0 0 0-.24 1.4L18.09 11H10a1 1 0 0 0 0 2h8l-1.8 2.4a1 1 0 0 0 .2 1.4 1 1 0 0 0 .6.2 1 1 0 0 0 .8-.4l3-4a1 1 0 0 0 .02-1.18z"/></g></g></svg>
                                        Logout
                                    </a></li>
                                </ul>
                            </div>

                            <form id="logout-form" action="@route('logout')" method="POST" class="hidden">
                                {{ csrf_field() }}
                            </form>
                        @endguest
                    </div>
                    @else
	                    <div class="nav-empty-wrapper w-full flex items-center"></div>
                    @endif
                </div>
            </div>
        </nav>
        @endif

        <nav class="fixed bottom-0 left-0 w-full z-30 sm:hidden">
        	<div class="nav-bottom-overlay hidden absolute top-0 left-0 right-0 h-full bg-white opacity-50"></div>
        	<div class="flex justify-center bg-white border-t border-indigo-600">
    			<a href="#" class="py-4 w-3/12 text-center side-toggle font-semibold" data-target="#sidebar">
    				L
    			</a>
    			<a href="@route('discover')" class="py-4 w-3/12 text-center {{ is_route('discover', 'text-indigo-600')}}">
                	<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="layers"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M21 11.35a1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-8-3.41a1 1 0 0 0-.78 0l-8 3.41a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l2.26 1.3-2.15.92a1 1 0 0 0-.61.86 1 1 0 0 0 .5.92l8 4.6a1 1 0 0 0 1 0l8-4.6a1 1 0 0 0 .5-.92 1 1 0 0 0-.61-.86l-2.15-.92 2.26-1.3a1 1 0 0 0 .5-.92zm-9-6.26l5.76 2.45L12 10.85 6.24 7.54zm-.5 7.78a1 1 0 0 0 1 0l3.57-2 1.69.72L12 14.85l-5.76-3.31 1.69-.72zm6.26 2.67L12 18.85l-5.76-3.31 1.69-.72 3.57 2.05a1 1 0 0 0 1 0l3.57-2.05z"/></g></g></svg>
    			</a>
    			<a href="@route('index')" class="py-4 w-3/12 text-center {{ is_route('index', 'text-indigo-600')}}">
                	<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="home"><rect width="24" height="24" opacity="0"/><path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z"/></g></g></svg>
    			</a>
    			<a href="@route('community')" class="py-4 w-3/12 text-center {{ is_route('community', 'text-indigo-600')}}">
                	<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"/></g></g></svg>
    			</a>
    			<a href="#" class="py-4 w-3/12 text-center side-toggle font-semibold" data-target="#rightbar">
    				R
    			</a>
        	</div>
        </nav>

        <div class="pt-16">
            <div class="min-h-main">
                @yield('content')
            </div>
        </div>

	    @if(!isset($footer) || (isset($footer) && $footer != false))
	    <div class="py-6 border-t border-gray-200 text-sm hidden sm:block">
	        <div class="container mx-auto flex">
	            <div class="text-gray-600 font-light">Copyright &copy; Kodinger</div>
	            <div class="ml-auto">
	                @include('layouts.links')
	            </div>
	        </div>
	    </div>
	    @endif
    </div>

    <!-- Scripts -->
    <script>
        const routes = {!! routes_js() !!},
            user = {!! user_js() !!},
            $ = document.querySelector.bind(document),
            $$ = document.querySelectorAll.bind(document),
            auth = {{ auth()->check() ? 1 : 0 }},
            token = $('[name=csrf-token]').getAttribute('content');
    </script>
    <script src="{{ mix('js/app.js') }}"></script>

    @stack('js')
</body>
</html>
