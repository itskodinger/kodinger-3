@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Post</h1>

    <div class="posts"></div>
@stop

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="{{ asset('js/post.js') }}"></script>
    <script>const this_user = '{{$user->username}}';</script>
    <script src="{{ asset('js/profile.js') }}"></script>
@endpush
