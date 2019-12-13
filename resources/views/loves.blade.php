@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-lg flex items-center">Semua Post Yang Disukai</h1>

    @forelse($posts as $post)
        @include('layouts.card', ['props' => $post->post, 'comment' => false, 'truncate_content' => true])
    @empty
        Tidak ada postingan
    @endforelse

    {!! $posts->links('vendor.pagination.simple-default') !!}
@stop

@push('js')
    <script src="{{ url('js/app.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/siema@1.5.1/dist/siema.min.js"></script>
    <script>
        document.querySelectorAll('.carousel').forEach(function(item) {
            var cr = new Siema({
                selector: item
            });

            item.parentNode.querySelector('.prev').addEventListener('click', () => cr.prev());
            item.parentNode.querySelector('.next').addEventListener('click', () => cr.next());
        });
    </script>
@endpush
