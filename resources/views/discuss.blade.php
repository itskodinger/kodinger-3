@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Diskusi</h1>

    @forelse($comments as $comment)
        @include('layouts.card_comment_item', ['comment' => $comment])
    @empty
        Tidak ada diskusi
    @endforelse

    {!! $comments->links('vendor.pagination.simple-default') !!}
@stop
