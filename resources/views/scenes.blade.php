@extends('layouts.app', ['Kodinger Scene'])

@section('content')
	<div class="container py-12 mx-auto px-4 sm:px-0">
	    <h1 class="text-indigo-600 text-xl font-semibold">Scenes</h1>
	    <p class="mt-1 text-gray-600">
	    	Temukan tutorial dan materi lainnya dalam bentuk video.
	    </p>

	    <div class="block sm:hidden">
	        @sidebar
	    </div>
	    <div class="block sm:hidden">
	        @rightbar
	    </div>

	    <div class="flex sm:-mx-4 mx-0 mt-6 flex-wrap justify-center scenes">
	    	@foreach([1,2,3,4, 5,4] as $item)
	    		<div class="w-4/12 px-4">
	    			<div class="mb-8 border border-gray-200 rounded">
	    				<a href="" class="flex p-6">
	    					<img class="w-10 h-10 rounded-full flex-shrink-0" src="{{ auth()->user()->the_avatar }}">
	    					<div class="ml-4 flex-shrink-0">
	    						<div class="font-bold">{{ auth()->user()->name }}</div>
	    						<div class="font-light text-gray-600 text-sm">{{ auth()->user()->username }}</div>
	    					</div>
	    				</a>

	    				<a href="#" class="relative flex justify-center items-center">
	    					<div class="absolute py-1 px-2 text-sm text-white rounded top-0 left-0 m-3" style="background-color: rgba(0,0,0,.3)">
	    						3 Video
	    					</div>
	    					<div class="w-16 h-16 absolute text-white rounded-full flex justify-center items-center" style="background-color: rgba(0,0,0,.3);">
		    					<svg class="w-6 transform scale-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
		    				</div>
			    			<img class="w-full" src="https://i.ytimg.com/vi/LKFHsATT8mA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD9AM3ezFPnL4HQ4x_8KuOXgyppmA">
	    				</a>

	    				<div class="p-6">
			    			<h4 class="text-lg font-bold hover:text-indigo-500"><a href="#">Figma Untuk Pemula</a></h4>

			    			<div class="text-sm mt-2 flex -mx-2">
			    				<div class="text-gray-600 mx-2">23,229x Ditonton</div>
			    				<div class="text-gray-600 mx-2">2 Menit Yang Lalu</div>
			    			</div>

			    			<div class="flex flex-wrap mt-4">
			    				<a class="mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3 text-sm" href="${routes.search + fullUrlWithQuery({tag: tag.tag.name})}">
			    					#javascript
			    				</a>
			    				<a class="mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3 text-sm" href="${routes.search + fullUrlWithQuery({tag: tag.tag.name})}">
			    					#html
			    				</a>
			    				<a class="mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3 text-sm" href="${routes.search + fullUrlWithQuery({tag: tag.tag.name})}">
			    					#css
			    				</a>
			    			</div>
			    		</div>
		    		</div>
	    		</div>
	    	@endforeach
	    </div>
	</div>
@stop