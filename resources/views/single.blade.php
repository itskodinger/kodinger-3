@extends('layouts.app')

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6">
            <div class="w-4/12 px-6">
            	@foreach(['inspirations', 'pages', 'tutorials', 'helps', 'examples'] as $r)
            	@if(count(nl_array($post->{$r})) > 1)
                <div class="mb-12">
                	<h2 class="pb-3 font-bold text-indigo-600">{{ key2str($r) }}</h2>
                	<div class="bg-white rounded shadow">
                		@foreach(nl_array($post->{$r}) as $page)
                		<a data-fetch="{{ $page }}" class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="">
	                		<img class="w-8 flex-shrink-0" src="https://s2.googleusercontent.com/s2/favicons?domain_url={{ $page }}">
	                		<div class="ml-4 overflow-hidden">
		                		<span class="text-xs text-gray-700">{{ rtrim($page, '/') }}</span>
	                		</div>
	                	</a>
	                	@endforeach
	                </div>
                </div>
                @endif
                @endforeach
            </div>
            <div class="w-8/12 px-6">
            	@include('layouts.card', ['props' => $post, 'comment' => false])
                <div class="bg-white rounded shadow-md mb-12">
                	<h2 class="py-4 px-6 font-bold">Diskusi</h2>
	            	@include('layouts.card_comment')
	            </div>
            </div>
        </div>
    </div>
@stop
