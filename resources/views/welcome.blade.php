@extends('layouts.app', ['title' => 'Where developers share their knowledge'])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6">
            <div class="w-4/12 px-6">
                @sidebar
            </div>
            <div class="w-8/12 px-6">
                @if(request()->search)
                <h4 class="mb-4 text-gray-600">Mencari konten dengan kata kunci: {{ request()->search . ($tag ? ' di dalam tag ' . $tag : '') }}</h4>
                @endif

                @if($tag)
                <h4 class="mb-4 text-gray-600">Semua konten dengan tag <i>{{ $tag }}</i></h4>
                @endif

                @foreach($posts as $post)
                    @include('layouts.card', ['props' => $post, 'comment' => false, 'truncate_content' => true])
                @endforeach

                {!! $posts->links('vendor.pagination.simple-default') !!}
            </div>
        </div>
    </div>
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
