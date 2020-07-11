@extends('layouts.app', ['title' => 'Dari coder untuk semua orang', 'footer' => false])

@push('meta')
    <meta property="og:title" content="Kodinger">
    <meta property="og:description" content="Dari coder untuk semua orang.">
    <meta property="og:image" content="https://kodinger-cdn.sgp1.cdn.digitaloceanspaces.com/public/utils/kodinger-thumbnail.png">
    <meta property="og:url" content="https://kodinger.com">
    <meta name="twitter:card" content="summary_large_image">
@endpush

@section('content')
    <div class="container mx-auto px-4 sm:px-0">
        <div class="flex py-12 -mx-2 pb-10">
            <div class="sm:w-3/12 sm:px-4 md:w-12/12 md:hidden lg:block">
                @sidebar
            </div>
            <div class="lg:w-6/12 px-2 md:w-8/12 w-full">
                @include('layouts.posts_header')
                <div class="posts"></div>
            </div>
            <div class="lg:w-3/12 lg:px-2 md:w-4/12">
                @rightbar
            </div>
        </div>
    </div>
@stop

@push('js')
    <script>const type = '{{ request()->type ?? false }}', sort = '{{ request()->sort ?? 'newest' }}';</script>
    <script src="{{ mix('js/home.js') }}"></script>
@endpush