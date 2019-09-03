                <div class="bg-white rounded shadow-md mb-12">
                    <div class="flex p-4 items-center">
                        <img class="rounded w-12 rounded" src="{{ $props->user->the_avatar }}">
                        <div class="ml-3">
                            <h4 class="mb-1 font-bold">{{ $props->user->name }}</h4>
                            <div class="-mx-1 flex items-center text-xs text-gray-500">
                                <p class="mx-1">{{ $props->user->the_username }}</p>
                                <p class="mx-1">&bull;</p>
                                <p class="mx-1 text-blue-500 font-semibold">{{ $props->created_at->diffForHumans() }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative carousel-outer"> 
                        <div class="carousel">
                            @foreach(nl_array($props->images) as $image)
                            <img src="{{ $image }}">
                            @endforeach
                        </div>

                        <button class="prev">&lsaquo;</button>
                        <button class="next">&rsaquo;</button>
                    </div>

                    <div class="p-8 text-sm text-gray-700 leading-loose">
                        <svg class="w-8 float-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>
                        <h4 class="text-lg text-black font-bold"><a class="text-indigo-700" href="{{ route('single', $props->slug) }}">
                            {{ $props->title }}
                        </a></h4>

                        {!! Markdown::convertToHtml($props->content) !!}

                        <div class="mt-5">
                            @foreach($props->tags as $tag)
                            <a class="border border-gray-300 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded-full py-2 px-4 text-xs" href="{{ route('tag', $tag->tag->name) }}">
                                #{{ $tag->tag->name }}
                            </a>
                            @endforeach
                        </div>
                    </div>
                    @if((($comment ?? true) != false))
                        @include('layouts.card_comment')
                    @endif
                </div>

@push('js')
    <script src="https://cdn.jsdelivr.net/npm/siema@1.5.1/dist/siema.min.js"></script>
    <script>
        let cr = new Siema({
            selector: '.carousel'
        });

        document.querySelector('.prev').addEventListener('click', () => cr.prev());
        document.querySelector('.next').addEventListener('click', () => cr.next());
    </script>
@endpush
