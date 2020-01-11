@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Post</h1>

    <div class="posts"></div>
@stop

@push('js')
    <script>const this_user = '{{$user->username}}';</script>
    <script src="{{ mix('js/profile.js') }}"></script>
@endpush
