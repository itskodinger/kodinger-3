@extends('layouts.app', ['title' => $post->title, 'footer' => false])

@push('meta')
	<meta property="og:title" content="{{$post->title}}">
	<meta property="og:description" content="Lihat selengkapnya di Kodinger">
	<meta property="og:image" content="{{ $post->images ? nl_array_first($post->images) : $post->post_card->toArray()['thumbnail'] }}">
	<meta property="og:url" content="@route('single', $post->slug)">
	<meta name="twitter:card" content="summary_large_image">
@endpush

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/siema@1.5.1/dist/siema.min.js"></script>
    <script src="{{ url('js/post.js') }}"></script>
    <script>
    	const post_data = {
    		slug: '{{ $post->slug }}'
    	}
    	const key2str = {!! json_encode(key2str()) !!};
    </script>
    <script src="{{ url('js/single.js') }}"></script>
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
            <div class="w-12/12 lg:w-6/12 px-4 md:w-8/12">
            	<div class="post"></div>
                <div id="comment-box" class="bg-white rounded border-2 border-gray-200 mb-12 hidden">
                	<h2 class="py-4 px-6 font-bold">Diskusi</h2>
	            	@include('layouts.card_comment')
	            </div>
            </div>
            <div class="lg:w-3/12 lg:px-4 md:hidden lg:block">
            	@rightbar
            </div>
        </div>
    </div>
@stop
