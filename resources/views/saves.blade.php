@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Post Yang Disimpan</h1>

    <div class="posts"></div>
@stop

@push('js')
    <script src="{{ asset('js/profile-saves.js') }}"></script>
@endpush
