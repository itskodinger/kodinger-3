@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Post Yang Disukai</h1>

    <div class="posts"></div>
@stop

@push('js')
    <script>const slug = '{{ request()->slug }}';</script>
    <script src="{{ mix('js/profile-loves.js') }}"></script>
@endpush
