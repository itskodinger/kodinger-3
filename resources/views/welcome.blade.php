@extends('layouts.app', ['title' => 'Where developers share their knowledge', 'footer' => false])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-4">
            <div class="w-3/12 px-4">
                @sidebar
            </div>
            <div class="w-6/12 px-4">
                <div class="posts"></div>
            </div>
            <div class="w-3/12 px-4">
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