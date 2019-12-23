@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Post Yang Disimpan</h1>

    <div class="posts"></div>
@stop

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="{{ mix('js/app.js') }}"></script>
    <script>
        let posts = post.init('.posts', {
            url: routes.profile_saves,
            params: params => ({
                ...params,
                ajax: '1'
            }),
            carousel: false,
            truncate_content: true
        });
    </script>
@endpush
