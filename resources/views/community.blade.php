@extends('layouts.app', ['title' => 'Komunitas', 'search' => route('community')])

@section('content')
    <div class="container py-12 mx-auto px-4 sm:px-0">
        <h1 class="text-indigo-600 text-xl font-semibold">{{request()->search ? 'Mencari Komunitas' : 'Komunitas'}}</h1>
        <p class="mt-1 text-gray-600">
        	Temukan komunitas di sekitar kamu di sini
        </p>

        <div class="block sm:hidden">
            @sidebar
        </div>
        <div class="block sm:hidden">
            @rightbar
        </div>

        <div class="flex sm:-mx-4 mx-0 mt-6 flex-wrap justify-center communities">
        </div>
    </div>
@stop

@push('js')
<script src="{{ asset('js/post.js') }}"></script>
<script src="{{ asset('js/community.js') }}"></script>
@endpush