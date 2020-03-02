@extends('layouts.app', ['title' => $post->post_card ? $post->post_card->toArray()['title'] : $post->title, 'footer' => false])

@php 
$title = $post->post_card ? $post->post_card->toArray()['title'] : $post->title;
@endphp

@push('meta')
	<meta property="og:title" content="{{ $title }}">
	<meta property="og:description" content="Simak materi tentang {{ $title }} oleh {{ $post->user->name }} di Kodinger">
	<meta property="og:image" content="{{ $post->thumbnail ? $post->thumbnail : $post->post_card->toArray()['thumbnail'] }}">
	<meta property="og:url" content="@route('single', $post->slug)">
	<meta name="twitter:card" content="summary_large_image">
@endpush

@push('js')
    <script>
    	const post_data = {
    		slug: '{{ $post->slug }}'
    	}
        const post_id = '{{ $post->id }}';
    	const key2str = {!! json_encode(key2str()) !!};
    </script>
    <script src="{{ url('js/single.js') }}"></script>
@endpush

@push('vars')
    <script>
        const sidebar = 'manual';
    </script>
@endpush

@section('content')
    <div class="container mx-auto px-4 sm:px-0">
        <div class="flex py-12 -mx-4">
            <div class="lg:w-3/12 md:px-4 md:w-4/12 sm:w-12/12">
                <div class="sidebar off-canvasify" id="sidebar">
                    <div class="links mx-auto p-4 sm:p-0 sm:mx-0">
                    	<div class="h-4 mb-4 bg-gray-200 w-32 rounded"></div>
                    	<div class="bg-white rounded border-2 border-gray-200 px-5">
        	            	@foreach([1,2,3] as $k)
        	            	<div class="flex items-center border-b border-gray-100 py-4">
        	            		<div class="rounded-full bg-gray-200 w-10 h-10"></div>
        	            		<div class="h-4 bg-gray-200 w-24 rounded ml-4"></div>
        	            	</div>
        	            	@endforeach
                    	</div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 md:w-8/12">
            	<div class="post"></div>
                <div id="comment-box" class="bg-white rounded border-2 border-gray-200 mb-12 hidden">
                	<h2 class="py-4 px-6 font-bold">Diskusi</h2>
	            	@include('layouts.card_comment')
	            </div>
            </div>
            <div class="lg:w-3/12 lg:px-4 md:hidden lg:block">
                @if(auth()->check() && (auth()->user()->id == $post->user->id || auth()->user()->can('post-update')))
                <div class="mx-auto p-4 sm:p-0 sm:mx-0 mb-8">
                    <h4 class="font-bold mb-3 text-orange-500">Opsi</h4>
                    <div class="bg-white rounded border-2 border-gray-200">
                        @if($post->type !== 'link')
                        <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('post', $post->id)">
                            <div class="text-sm text-gray-600 font-semibold truncate">Sunting</div>
                        </a>
                        @endif
                        <a class="flex items-center hover:bg-gray-100 px-5 py-4" href="@route('deletePost', $post->slug)">
                            <div class="text-sm text-red-600 font-semibold truncate">Hapus</div>
                        </a>
                    </div>
                </div>
                @endif

            	@rightbar
            </div>
        </div>
    </div>
@stop
