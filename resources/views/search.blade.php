@extends('layouts.app', ['title' => 'Pencarian'])

@section('content')
    <div class="container mx-auto px-4 sm:px-0">
        <div class="flex py-12 -mx-4 pb-10">
            <div class="sm:w-3/12 sm:px-4 md:w-12/12 md:hidden lg:block">
                @sidebar
            </div>
            <div class="lg:w-6/12 px-4 md:w-8/12 w-full">
            	<div class="border border-gray-200 p-6 rounded pb-0">
	            	<h1 class="text-xl font-semibold">Pencarian</h1>
	            	<div class="flex overflow-x-auto flex-nowrap mt-6">
	            		@foreach($datasources as $k => $t)
		            		<a href="@current(['datasource' => $k])" class="{{ $k == $datasource ? 'border-indigo-600 text-indigo-600 font-semibold' : ''}} flex items-center hover:border-indigo-600 hover:text-indigo-600 text-gray-600 border-b-2 py-4 border-transparent mr-8 mr-2">
	            				{!! datasource_icons($k) !!}
		            			{{ $t }}
		            		</a>
	            		@endforeach
	            	</div>
            	</div>

            	<div class="flex mt-6 items-center">
	        		<div class="hidden tag-search relative z-10">
	        			<input type="text" name="tag" class="w-64 border border-gray-200 px-6 py-2 mr-2 focus:outline-none focus:border-indigo-600 rounded-full" placeholder="Cari tag">
	        		</div>
	            	<div class="flex flex-nowrap overflow-x-auto tags">
	            		@foreach($tags as $r)
	            		<a
	            			{!! $r['name'] !== $tag ? 'href="' . (!isset($r['search']) ? request()->fullUrlWithQuery(['tag' => $r['name']]) : '#search') . '"' : '' !!}
	            			class="{{ $r['name'] == $tag ? 'border-indigo-600 text-indigo-600 font-semibold pr-8' : ''}} relative flex items-center hover:border-indigo-600 hover:text-indigo-600 border-gray-200 text-gray-600 border py-2 px-6 flex-shrink-0 rounded-full mr-2 tag"
	            		>
		            		{!!
		            			!isset($r['search']) ? '#' . $r['name']
		            			:
			            		'<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current mr-2 w-4" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' . $r['name']
			            	!!}

			            	@if($r['name'] == $tag)
			            		<div class="text-lg absolute right-0">
			            			<span class="mr-3 cursor-pointer text-red-600 dispose-tag">
			            				&times;
			            			</span>
			            		</div>
			            	@endif
		            	</a>
		            	@endforeach
	            	</div>
	            </div>

            	<div class="mt-8">
	                @include('search_' . $datasource)
	            </div>
            </div>
            <div class="lg:w-3/12 lg:px-4 md:w-4/12">
                @rightbar
            </div>
        </div>
    </div>
@stop

@push('js')
    @stack('search_js')

    <script>
    	const search = '{{ request()->q }}',
    		  tag = '{{ request()->tag }}';
    </script>

    <script src="{{ mix('js/search.js') }}"></script>
@endpush
