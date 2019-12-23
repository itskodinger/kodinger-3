@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Post</h1>

    <div class="posts"></div>
@stop

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    <script>
        let posts = post.init('.posts', {
            url: routes.post_both,
            params: params => ({
                ...params,
                user: user.id
            }),
            carousel: false,
            truncate_content: true
        });
    </script>
@endpush
