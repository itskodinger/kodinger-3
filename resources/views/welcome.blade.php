@extends('layouts.app', ['title' => 'Where developers share their knowledge', 'footer' => false])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-4">
            <div class="w-3/12 px-4">
                @sidebar
            </div>
            <div class="w-6/12 px-4">
                @if(request()->search)
                <h4 class="mb-4 text-gray-600">Mencari konten dengan kata kunci: {{ request()->search . ($tag ? ' di dalam tag ' . $tag : '') }}</h4>
                @endif

                @if($tag)
                <h4 class="mb-4 text-gray-600">Semua konten dengan tag <i>{{ $tag }}</i></h4>
                @endif

                @foreach($posts as $post)
                    @include('layouts.card', ['props' => $post, 'carousel' => false, 'comment' => false, 'truncate_content' => true])
                @endforeach

                {!! $posts->links('vendor.pagination.simple-default') !!}
            </div>
            <div class="w-3/12 px-4">
                @rightbar
            </div>
        </div>
    </div>
@stop

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>
    <script src="{{ url('js/app.js') }}"></script>
@endpush