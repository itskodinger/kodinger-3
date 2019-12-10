@extends('layouts.app', ['title' => 'Discover'])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-4">
            <div class="w-3/12 px-4">
                @sidebar
            </div>
            <div class="w-6/12 px-4">
                @auth
                <div class="border-2 border-gray-200 rounded">
                    <input class="w-full h-full resize-none px-5 py-5 focus:outline-none" placeholder="Bagikan link artikel, video, e-book atau apapun yang kamu buat di sini">
                    <div class="p-4 border-t border-gray-200 flex">
                        <div class="flex items-center">
                            <img class="w-8 h-8 rounded border-gray-200 border" src="{{ auth()->user()->the_avatar_sm }}" alt="{{ auth()->user()->name }}">
                            <div class="ml-2 text-sm">{{ auth()->user()->name }}</div>
                        </div>
                        <button class="ml-auto shadow-md bg-indigo-600 text-white px-5 py-2 rounded text-sm hover:shadow-none hover:bg-indigo-700">Publish</button>
                    </div>
                </div>
                @endauth

                <h1 class="mb-4 text-lg flex items-center mt-8 text-gray-600">Link Dari Komunitas</h1>
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
    <script src="{{ url('js/app.js') }}"></script>
@endpush