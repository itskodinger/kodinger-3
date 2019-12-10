@extends('layouts.app')

@section('content')

	<div class="container mx-auto">
	    <div class="flex py-12 -mx-4">
	    	<div class="w-4/12 mx-4">
				<h2 class="mb-2 text-gray-600 text-lg flex items-center">Navigasi</h2>
                <div class="bg-white rounded border-2 border-gray-200">
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('dashboard.index')">
                        <div class="text-sm text-gray-600 font-semibold truncate">Dashboard</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('post.index')">
                        <div class="text-sm text-gray-600 font-semibold truncate">Posts</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('user.index')">
                        <div class="text-sm text-gray-600 font-semibold truncate">Users</div>
                    </a>
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('contribute.index')">
                        <div class="text-sm text-gray-600 font-semibold truncate">Contribute</div>
                    </a>
                </div>
	    	</div>
	        <div class="md:w-8/12 mx-4">
				@yield('dash_content')
			</div>
		</div>
	</div>
@stop