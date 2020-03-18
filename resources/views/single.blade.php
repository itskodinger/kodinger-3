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
                    	<div class="bg-white rounded border border-gray-200 px-5">
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
                <div class="mb-6 -mt-5 border border-blue-200 text-blue-600 text-sm bg-blue-100 rounded p-4 block sm:hidden" id="links-info-alert">
                    Tekan tombol "<span class="font-bold">L</span>" di navigasi bawah untuk menampilkan tautan referensi.
                </div>
            	@include('layouts.card_comment')
            </div>
            <div class="lg:w-3/12 lg:px-4 md:hidden lg:block">
            	@rightbar
            </div>
        </div>
    </div>
@stop
