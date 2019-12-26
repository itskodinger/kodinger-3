@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Kontribusi</h1>

    <div class="flex items-center">
        <div class="w-full">
            @include('flash::message')

            @forelse($contributes as $contribute)
                @include('layouts.card_contribute', ['contribute' => $contribute])
            @empty
                Tidak ada kontribusi
            @endforelse

            <div class="mt-5"> 
                {!! $contributes->links('vendor.pagination.simple-default') !!}
            </div>
        </div>
    </div>
@stop
