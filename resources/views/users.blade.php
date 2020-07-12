@extends('layouts.app', ['title' => 'Daftar Pengguna', 'search' => route('users')])

@section('content')
    <div class="container py-12 mx-auto px-4 sm:px-0">
        <h1 class="text-indigo-600 text-xl font-semibold">User</h1>
        <p class="mt-1 text-gray-600">
        	Daftar pengguna Kodinger diurutkan berdasarkan banyaknya kontribusi (mingguan) masing-masing pengguna.
        </p>

        <div class="block sm:hidden">
            @sidebar
        </div>
        <div class="block sm:hidden">
            @rightbar
        </div>

        <div class="flex sm:-mx-4 mx-0 mt-6 flex-wrap justify-center users">
        </div>
    </div>
@stop

@push('js')
    <script src="{{ mix('js/users.js') }}"></script>
@endpush