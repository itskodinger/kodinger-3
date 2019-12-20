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

                <div class="posts"></div>
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
    <script>
        let posts = post.init('.posts', {
            carousel: false,
            comment: false,
            truncate_content: true
        });

        console.log(posts)
    </script>
@endpush