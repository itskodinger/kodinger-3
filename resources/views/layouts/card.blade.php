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
                        <div class="float-right">
                            <div class="cursor-pointer" data-save="{{ $props->id }}"></div>
                        </div>
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

                        <div class="mt-8">
                            <div class="flex w-full">
                                <a class="w-4/12 hover:bg-gray-100 flex items-center justify-center border border-gray-300 border-r-0 text-gray-600 py-2 px-4 rounded-tl rounded-bl" href="">
                                    👍 Up
                                </a>
                                <a class="w-4/12 hover:bg-gray-100 flex items-center justify-center border border-gray-300 border-r-0 text-gray-600 py-2 px-4" href="{{ route('single', $props->slug) }}#comments">
                                    👋 Diskusi ({{ count($post->comments) }})
                                </a>
                                <a class="w-4/12 hover:bg-gray-100 flex items-center justify-center border border-gray-300 text-gray-600 py-2 px-4 rounded-tr rounded-br" href="">
                                    🚀 Bagikan
                                </a>
                            </div>
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
