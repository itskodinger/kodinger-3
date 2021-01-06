@extends('layouts.app', ['title' => $post->title, 'footer' => false])

@php
$title = $post->title;
@endphp

@push('meta')
	<meta property="og:title" content="{{ $title }}">
	<meta property="og:description" content="Simak materi tentang {{ $title }} oleh {{ $post->user->name }} di Kodinger">
	<meta property="og:image" content="{{ $post->thumbnail ? $post->thumbnail : (optional($post->post_card)->toArray()['thumbnail'] ?? '') }}">
	<meta property="og:url" content="@route('post.show', [$post->user->username, $post->slug])">
	<meta name="twitter:card" content="summary_large_image">
@endpush

@push('js')
    <script>
    	const post_data = {
    		slug: '{{ $post->slug }}'
    	}
        const post_id = '{{ $post->id }}';
    	const key2str = {!! json_encode(key2str()) !!};
        const post_type = '{{ $post->type }}';
    </script>
    <script src="{{ url('js/single.js') }}"></script>
@endpush

@push('vars')
    <script>
        const sidebar = 'manual';
    </script>
@endpush

@section('content')
    <div class="container px-4 py-12 mx-auto md:px-0">
        <div class="flex pb-10 -mx-2">
            <div class="sm:w-3/12 lg:px-2 {{ $post->is_markdown ? 'lg:hidden' : 'lg:block' }}">
                <div class="sidebar off-canvasify" id="sidebar">
                    @if(!$post->is_markdown)
                    <div class="p-4 mx-auto links lg:p-0 lg:mx-0">
                    	<div class="w-32 h-4 mb-4 bg-gray-200 rounded"></div>
                    	<div class="px-5 bg-white border border-gray-200 rounded">
        	            	@foreach([1,2,3] as $k)
        	            	<div class="flex items-center py-4 border-b border-gray-100">
        	            		<div class="w-10 h-10 bg-gray-200 rounded-full"></div>
        	            		<div class="w-24 h-4 ml-4 bg-gray-200 rounded"></div>
        	            	</div>
        	            	@endforeach
                    	</div>
                    </div>
                    @else

                        <div class="p-4 mx-auto lg:p-0 lg:mx-0">
                            @include('layouts.card_random')
                            @include('layouts.card_more_post')
                        </div>
                    @endif
                </div>
            </div>

            <div class="flex-shrink-0 w-full px-2 {{ $post->is_markdown ? 'lg:w-9/12' : 'lg:w-6/12' }}">
                @if($post->status == 'draft')
                    <div class="block p-4 mb-6 -mt-5 text-orange-600 bg-orange-100 border border-orange-200 rounded">
                        Hanya kamu yang dapat melihat halaman ini. Post kamu masih berstatus "draft", klik tombol sunting dan publikasikan post ini agar dapat dilihat oleh semua orang.
                    </div>
                @endif

            	<div class="post single-post"></div>
                <div class="block p-4 mb-6 -mt-5 text-blue-600 bg-blue-100 border border-blue-200 rounded sm:hidden" id="links-info-alert">
                    Tekan tombol "<span class="font-bold">L</span>" di navigasi bawah untuk menampilkan tautan referensi.
                </div>

                <div class="hidden block p-4 mb-6 text-blue-600 bg-blue-100 border border-blue-200 rounded sm:block">
                    Kamu dapat <a href="{{ edit_post_route($post) }}" class="pb-1 border-b border-blue-600">menyunting</a> post ini atau <a href="@route('deletePost', $post->slug)" class="pb-1 text-red-600 border-b border-red-600">menghapusnya</a>.
                </div>

                @include('layouts.card_author')
            	@include('layouts.card_comment')
            </div>
            <div class="lg:w-3/12 lg:px-2 lg:block">

                @rightbar

            </div>
        </div>
    </div>
@stop
