@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    <h1 class="mb-4 text-gray-600 text-lg flex items-center">Semua Kontribusi</h1>

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
