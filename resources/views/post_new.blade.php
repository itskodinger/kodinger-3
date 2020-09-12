@extends('layouts.app', ['title' => 'Buat Post Baru'])

@section('content')
    <div class="container mx-auto px-4 sm:px-0">
        <div class="flex py-12 -mx-4 justify-center">
            <div class="w-full lg:w-6/12 px-4 md:w-8/12">
				<div class="border border-gray-200 p-6 md:p-8 rounded">
			        <h1 class="text-indigo-600 text-xl font-semibold">Buat Post</h1>
			        <p class="mb-4 mt-2 text-gray-600">Bagikan pengetahuan kamu dengan developer lain; begitu pula dengan developer lain, mereka akan melakukan hal serupa.</p>

			        <a href="@route('post.link')" class="border border-gray-200 transition duration-300 hover:border-indigo-500 group rounded p-4 flex mb-4">
			        	<svg class="group-hover:text-indigo-500 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
			        	<div class="ml-6">
			        		<h2 class="group-hover:text-indigo-500 transition duration-300 text-lg font-semibold">Tautan Eksternal</h2>
			        		<p class="mt-1 text-gray-600 text-sm">Kamu menulis artikel di blog pribadi kamu? Atau menemukan sesuatu yang keren di internet, bagikan tautannya di sini.</p>
			        	</div>
			        </a>
			        <a href="@route('post.md')" class="border border-gray-200 transition duration-300 hover:border-indigo-500 group rounded p-4 flex mb-4">
			        	<svg class="group-hover:text-indigo-500 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
			        	<div class="ml-6">
			        		<h2 class="group-hover:text-indigo-500 transition duration-300 text-lg font-semibold">Markdown Post</h2>
			        		<p class="mt-1 text-gray-600 text-sm">Menulis artikel dengan sintaksis Markdown. Cocok untuk menulis opini, tutorial, atau semacamnya.</p>
			        	</div>
			        </a>
			        <a href="@route('post.slide')" class="border border-gray-200 transition duration-300 hover:border-indigo-500 group rounded p-4 flex">
			        	<svg class="group-hover:text-indigo-500 transition duration-300" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
			        	<div class="ml-6">
			        		<h2 class="group-hover:text-indigo-500 transition duration-300 text-lg font-semibold">Slide Gambar</h2>
			        		<p class="mt-1 text-gray-600 text-sm">Berbagi pengetahuan kamu dalam format slide gambar dan tidak ada batasan gambar yang diunggah.</p>
			        	</div>
			        </a>
				</div>
			</div>
		</div>
	</div>			
@stop
