@extends('layouts.app')

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6">
            <div class="w-4/12 px-6">
                <div class="py-12 rounded shadow-md px-8 bg-gradient text-white flex items-center">
                    <div class="text-center">
                        <svg class="inline-block mb-3" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                        <h2 class="text-lg">@itskodinger</h2>
                        <div class="text-sm font-light text-gray-300 mt-2">
                            Dapatkan informasi seputar teknologi web di Instagram.
                        </div>
                        <a href="https://instagram.com/itskodinger" target="_blank" class="inline-block mt-5 bg-white hover:bg-transparent hover:text-white hover:border-white border-2 border-transparent text-purple-600 py-2 px-6 uppercase font-semibold tracking-wider rounded text-xs">Follow</a>
                    </div>                
                </div>                
            </div>
            <div class="w-8/12 px-6">
                @if(request()->search)
                <h4 class="mb-4 text-gray-600">Mencari konten dengan kata kunci: {{ request()->search . ($tag ? ' di dalam tag ' . $tag : '') }}</h4>
                @endif

                @if($tag)
                <h4 class="mb-4 text-gray-600">Semua konten dengan tag {{ $tag }}</h4>
                @endif

                @foreach($posts as $post)
                    @include('layouts.card', ['props' => $post, 'comment' => false])
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
