@extends('layouts.app', ['title' => 'Where developers share their knowledge', 'footer' => false])

@section('content')
    <div class="container mx-auto px-4 sm:px-0">
        <div class="flex py-12 -mx-4">
            <div class="sm:w-3/12 sm:px-4 md:w-12/12 md:hidden lg:block">
                @sidebar
            </div>
            <div class="lg:w-6/12 px-4 md:w-8/12 w-full">
                <div class="posts"></div>
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
    <script src="{{ asset('js/home.js') }}"></script>
@endpush