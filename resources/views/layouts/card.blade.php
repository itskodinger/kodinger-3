                <div class="bg-white rounded shadow-md mb-12">
                    <div class="flex p-4 items-center">
                        <a href="{{ route('single', $props->user->the_username) }}">
                            <img class="rounded w-12 rounded" src="{{ $props->user->the_avatar_sm }}">
                        </a>
                        <div class="ml-3">
                            <h4 class="mb-1 font-bold">
                                <a class="text-indigo-600" href="{{ route('single', $props->user->the_username) }}">
                                    {{ $props->user->name }}
                                </a>
                            </h4>
                            <div class="-mx-1 flex items-center text-xs text-gray-500">
                                <p class="mx-1">{{ $props->user->the_username }}</p>
                                <p class="mx-1">&bull;</p>
                                <p class="mx-1 text-blue-500 font-semibold">{{ $props->created_at->diffForHumans() }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative{{count(nl_array($props->images)) > 1 ? ' carousel-outer' : ''}}"> 
                        <div class="{{count(nl_array($props->images)) > 1 ? 'carousel' : ''}}">
                            @foreach(nl_array($props->images) as $image)
                                @if(is_video($image))
                                <video controls="">
                                    <source src="{{ $image }}" type="video/mp4">
                                </video>
                                @else
                                <img src="{{ $image }}">
                                @endif
                            @endforeach
                        </div>

                        @if(count(nl_array($props->images)) > 1)
                        <button class="prev">&lsaquo;</button>
                        <button class="next">&rsaquo;</button>
                        @endif
                    </div>

                    <div class="p-8 text-sm text-gray-700 leading-loose">
                        <div class="float-right">
                            <div class="cursor-pointer" data-save="{{ $props->id }}" {{ is_post_saved($props->id) ? 'data-saved' : '' }}></div>
                        </div>
                        <h4 class="text-lg text-black font-bold"><a class="text-indigo-700" href="{{ route('single', $props->slug) }}">
                            {{ $props->title }}
                        </a></h4>

                        {!! isset($truncate_content) && $truncate_content ? truncate(Markdown::convertToHtml($props->content), 150) : Markdown::convertToHtml($props->content) !!}

                        <div class="mt-5">
                            @foreach($props->tags as $tag)
                            <a class="border border-gray-300 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded-full py-2 px-4 text-xs" href="{{ route('tag', $tag->tag->name) }}">
                                #{{ $tag->tag->name }}
                            </a>
                            @endforeach
                        </div>

                        <div class="mt-8">
                            <div class="flex w-full">
                                <a data-love="{{ $props->id }}" {{ is_post_loved($props->id) ? 'data-loved' : '' }} class="w-4/12 hover:bg-gray-100 flex items-center justify-center border border-gray-300 border-r-0 text-gray-600 py-2 px-4 rounded-tl rounded-bl" href="">
                                    <span></span> Love
                                </a>
                                <a class="w-4/12 hover:bg-gray-100 flex items-center justify-center border border-gray-300 border-r-0 text-gray-600 py-2 px-4" href="{{ route('single', $props->slug) }}#comments">
                                    <svg class="mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> 
                                    Diskusi
                                </a>
                                <a class="w-4/12 hover:bg-gray-100 flex items-center justify-center border border-gray-300 text-gray-600 py-2 px-4 rounded-tr rounded-br" href="">
                                    <svg class="mr-2 stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                    Bagikan
                                </a>
                            </div>
                        </div>
                    </div>
                    @if((($comment ?? true) != false))
                        @include('layouts.card_comment')
                    @endif
                </div>
