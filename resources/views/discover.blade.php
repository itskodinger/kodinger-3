@extends('layouts.app', ['title' => 'Discover', 'footer' => false])

@push('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yaireo/tagify@3.1.0/dist/tagify.css">
@endpush

@section('content')
    <div class="container mx-auto px-4 sm:px-0">
        <div class="flex py-12 -mx-4">
            <div class="sm:w-3/12 sm:px-4 md:w-12/12 md:hidden lg:block">
                @sidebar
            </div>
            <div class="lg:w-6/12 px-4 md:w-8/12 w-full">
                <h1 class="mb-4 text-lg flex items-center text-gray-600">Link Dari Komunitas</h1>
                <div class="posts"></div>
            </div>
            <div class="lg:w-3/12 lg:px-4 md:w-4/12">
                @rightbar
            </div>
        </div>
    </div>
@stop

@push('js')
    <script src="{{ mix('js/discover.js') }}"></script>
@endpush