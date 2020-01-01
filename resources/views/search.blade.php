@extends('layouts.app', ['title' => 'Pencarian'])

@section('content')
    <div class="container mx-auto px-4 sm:px-0">
        <div class="flex py-12 -mx-4 pb-10">
            <div class="sm:w-3/12 sm:px-4 md:w-12/12 md:hidden lg:block">
                @sidebar
            </div>
            <div class="lg:w-6/12 px-4 md:w-8/12 w-full">
            	<h1 class="text-xl font-semibold">Pencarian</h1>
            	<div class="flex overflow-x-auto flex-no-wrap mt-2">
            		@foreach($types as $k => $t)
            		<a href="@current(['type' => $k])" class="{{ $k == $type ? 'border-indigo-600 text-indigo-600' : ''}} hover:border-indigo-600 hover:text-indigo-600 border-gray-200 text-gray-600 text-sm border-2 py-2 px-6 rounded-full mr-2">{{ $t }}</a>
            		@endforeach
            	</div>

            	<div class="mt-8">
	                @include('search_' . $type)
	            </div>
            </div>
            <div class="lg:w-3/12 lg:px-4 md:w-4/12">
                @rightbar
            </div>
        </div>
    </div>
@stop

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="{{ asset('js/post.js') }}"></script>
	
    @stack('search_js')

    <script>
    	const search = '{{ request()->q }}', 
    		  tag = '{{ request()->tag }}';
    </script>
    
    <script src="{{ asset('js/search.js') }}"></script>
@endpush