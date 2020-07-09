@extends('layouts.app')

@section('content')
	<div class="container py-12 mx-auto">
		<div class="text-2xl mb-4">{{ $title }}</div>
	    <div class="flex -mx-4 lg:flex-row flex-col">
	    	<div class="w-full lg:w-3/12 mx-4 lg:mb-0 mb-10">
                <div class="bg-white rounded border-2 border-gray-200">
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('dashboard.index')">
                        <div class="text-gray-600 font-semibold truncate">Dashboard</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('post.index')">
                        <div class="text-gray-600 font-semibold truncate">Posts</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('community.index')">
                        <div class="text-gray-600 font-semibold truncate">Communities</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('user.index')">
                        <div class="text-gray-600 font-semibold truncate">Users</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('comment.index')">
                        <div class="text-gray-600 font-semibold truncate">Comments</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('contribute.index')">
                        <div class="text-gray-600 font-semibold truncate">Contribute</div>
                    </a>
                </div>
	    	</div>
	        <div class="w-full lg:w-9/12 mx-4">
				@yield('dash_content')
			</div>
		</div>
	</div>
@stop