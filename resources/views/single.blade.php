@extends('layouts.app', ['title' => $post->post_card ? $post->post_card->toArray()['title'] : $post->title, 'footer' => false])

@php 
$title = $post->post_card ? $post->post_card->toArray()['title'] : $post->title;
@endphp

@push('meta')
	<meta property="og:title" content="{{ $title }}">
	<meta property="og:description" content="Simak materi tentang {{ $title }} oleh {{ $post->user->name }} di Kodinger">
	<meta property="og:image" content="{{ $post->thumbnail ? $post->thumbnail : $post->post_card->toArray()['thumbnail'] }}">
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
    <div class="container mx-auto px-4 sm:px-0 py-12">
        <div class="grid grid-cols-3 sm:grid-cols-5 gap-5 items-start w-full">
            @if(!$post->is_markdown)
            <div>
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
            @else
            <div class="col-span-1">
                @include('layouts.card_random')

                <div class="bg-white rounded border border-gray-200 mt-10">
                    <h4 class="font-bold text-indigo-600 py-4 px-5">
                        @if($post->user->posts->count() > 0)
                        Yang lainnya dari {{ $post->user->name }}
                        @else
                        Baca juga
                        @endif
                    </h4>
                    @foreach($posts as $post)
                        <a class="inline-block w-full hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('post.show', [$post->user->username, $post->slug])">
                            <div class="font-semibold">{{ $post->title }}</div>
                            <div class="mt-2 -mx-1">
                                @foreach($post->tags->slice(0, 3) as $tag)
                                <span class="text-gray-600 mx-1">#{!! $tag->tag->name !!}</span>
                                @endforeach
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
            @endif

            <div class="mx-auto text-left col-span-3 sm:col-span-4 lg:col-span-3 w-full">
                @if($post->status == 'draft')
                    <div class="mb-6 -mt-5 border border-orange-200 text-orange-600 bg-orange-100 rounded p-4 block">
                        Hanya kamu yang dapat melihat halaman ini. Post kamu masih berstatus "draft", klik tombol sunting dan publikasikan post ini agar dapat dilihat oleh semua orang.
                    </div>
                @endif

            	<div class="post single-post"></div>
                <div class="mb-6 -mt-5 border border-blue-200 text-blue-600 bg-blue-100 rounded p-4 block sm:hidden" id="links-info-alert">
                    Tekan tombol "<span class="font-bold">L</span>" di navigasi bawah untuk menampilkan tautan referensi.
                </div>
                @include('layouts.card_author')
            	@include('layouts.card_comment')
            </div>
            <div class="col-span-1 md:hidden lg:block">
            	@rightbar
            </div>
        </div>
    </div>
@stop
