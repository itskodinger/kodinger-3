@extends('layouts.app', ['title' => 'Discover'])

@push('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css">
@endpush

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-4">
            <div class="w-3/12 px-4">
                @sidebar
            </div>
            <div class="w-6/12 px-4">
                @auth
                <form id="discover-form" autocomplete="off">
                    <div class="border-2 border-gray-200 rounded">
                        <div class="px-5">
                            <div class="mt-5 mb-3 text-lg leading-relaxed text-gray-600">Bagikan link artikel, video, e-book atau apapun yang kamu buat sendiri atau kamu temukan di sini</div>
                            <input name="link" class="input-link focus:border-indigo-600 w-full rounded border border-gray-200 px-3 py-2 focus:outline-none" placeholder="Paste link di sini">
                            <div class="mt-4 uppercase text-gray-500 text-xs tracking-wider font-semibold">Pilih Tag</div>
                            @field([
                                'name' => 'tags[]',
                                'type' => 'select',
                                'class' => 'tags',
                                'data' => Facades\Services\TagService::select(),
                                'multiple' => true
                            ])
                        </div>

                        <div class="p-4 border-t border-gray-200 flex items-center">
                            <div class="flex items-center">
                                <img class="w-8 h-8 rounded border-gray-200 border" src="{{ auth()->user()->the_avatar_sm }}" alt="{{ auth()->user()->name }}">
                                <div class="ml-2 text-sm">{{ auth()->user()->name }}</div>
                            </div>
                            <div class="ml-auto flex items-center">
                                <svg class="w-6 h-6 mr-2 spin hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="loader"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/></g></g></svg>
                                <button class="shadow-md bg-indigo-600 text-white px-5 py-2 rounded text-sm hover:shadow-none hover:bg-indigo-700">Publish</button>
                            </div>
                        </div>
                    </div>
                </form>
                @endauth

                <h1 class="mb-4 text-lg flex items-center mt-8 text-gray-600">Link Dari Komunitas</h1>
                @foreach($posts as $post)
                    @include('layouts.card', [
                        'props' => $post, 
                        'discover' => true, 
                        'carousel' => false, 
                        'comment' => false, 
                        'truncate_content' => true
                    ])
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
    <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>

    <script>
        let tag_el = new Choices('.tags', {
            itemSelectText: 'Tekan enter untuk memilih',
            noResultsText: 'Tag tidak ditemukan',
            maxItemCount: 5,
            maxItemText: (maxItemCount) => {
              return `Maksimal hanya ${maxItemCount} tag`;
            },
            classNames: {
                containerInner: 'mt-2 rounded border border-gray-200 px-3 py-2',
                input: 'bg-white',
                inputCloned: 'w-full focus:outline-none',
                focusState: 'border-indigo-600'
            },
        });

        $('#discover-form').addEventListener('submit', function(e) {
            let link = $('.input-link'),
                tags = document.querySelector('.tags');

            if(link.value.trim().length < 1 || !validateUrl(link.value)) {
                link.focus();
            } else if(getSelectValues(tags).length < 1) {
                tag_el.input.focus();
            } else {
                // do ajax
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        console.log(xhr)
                        if(xhr.status == 401)
                            alert('Anda perlu login dulu!')
                    }
                }
                xhr.open("post", '@route('post.store_discover')', true);
                xhr.setRequestHeader("X-CSRF-TOKEN", $('[name=csrf-token]').getAttribute('content'));
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.setRequestHeader("Accept", "application/json");
                xhr.send('pages=' + link.value + '&tags='+ getSelectValues(tags));
            }

            e.preventDefault();
        });
    </script>
@endpush