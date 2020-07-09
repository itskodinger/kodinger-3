                <div class="bg-white rounded border-2 border-gray-200 mb-10">
                    <div class="flex p-6 items-center">
                        <a href="@route('single', $props->user->username)">
                            <img class="rounded w-12 rounded" src="{{ $props->user->the_avatar_sm }}">
                        </a>
                        <div class="ml-3">
                            <h4 class="mb-1 font-bold">
                                <a class="text-indigo-600" href="@route('single', $props->user->username)">
                                    {{ $props->user->name }}
                                </a>
                            </h4>
                            <div class="-mx-1 flex items-center text-xs text-gray-500">
                                <p class="mx-1">{{ $props->user->username }}</p>
                                <p class="mx-1">&bull;</p>
                                <p class="mx-1 text-blue-500 font-semibold">{{ $props->created_at->diffForHumans() }}</p>
                            </div>
                        </div>
                    </div>

                    @isset($discover)

                        @php
                            
                            $postCard = Postcard::create($props);
                            $url      = parse_url($postCard->getUrl());

                        @endphp

                        <div class="px-6 text-sm text-gray-700 leading-loose">
                            {{-- POST CAPTION HERE? --}}
                            @if($props->status == 'CONTAINS_PORNOGRAPHIC')

                                <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 px-4 py-2 mb-4" role="alert">
                                    <p class="font-bold">Hati-hati</p>
                                    <p>Post ini mungkin mengandung konten ponografi</p>
                                </div>
                            @endif
                        </div>

                        <div class="shimmer border rounded mx-6">

                            {{-- <div class="w-full bg-gray-200 h-64"></div> --}}

                            @if($postCard->hasEmbeddableCode())

                                <div class="embeddable-frame">
                                    {!! $postCard->getEmbeddableCode() !!}
                                </div>

                            @else
                                <img src="{{$postCard->getThumbnail()}}"  height="200" width="100%"  alt="">
                            @endif

                            <div class="p-4 border-t bg-gray-100">
                            
                                <h2 class="text-lg font-semibold hover:text-indigo-600"><a href="{{ Redirector::setUrl($postCard->getUrl())->addUtm('kodinger_discovery', Redirector::UTM_SOURCE) }}"> {{$postCard->getTitle()}} </a></h2>

                                @if(!is_null($postCard->getDescription()))
                                    <p class="text-gray-600 text-sm"> {{ str_limit($postCard->getDescription(), 200) }} </p>
                                @endif
                                <div class="uppercase tracking-wider text-xs mt-3 text-teal-500 font-semibold">{{ $url['host'] }}</div>
                            </div>
                        </div>

                    @else
                    <div class="relative{{count($props->images) > 1 ? ' carousel-outer' : ''}}"> 
                        <div class="{{count($props->images) > 1 ? 'carousel' : ''}}">
                            
                            @if(isset($carousel) && $carousel == false)
                                <a href="@route('single', $props->slug)">
                                    <img src="{{ $props->images[0] }}">
                                </a>
                            @else

                                @foreach($props->images as $image)
                                    @if(is_video($image))
                                    <video controls="">
                                        <source src="{{ $image }}" type="video/mp4">
                                    </video>
                                    @else
                                    <img src="{{ $image }}" alt="{{ urldecode($image) }}">
                                    @endif
                                @endforeach
                            @endif
                        </div>

                        @if(count($props->images) > 1 && ($carousel ?? '') !== false)
                        <button class="prev">&lsaquo;</button>
                        <button class="next">&rsaquo;</button>
                        @endif
                    </div>
                    @endisset

                    <div class="p-6 text-sm text-gray-700 leading-loose">
                        @isset($props->title)
                        <h4 class="text-lg mb-2 text-black font-bold"><a class="text-indigo-700" href="@route('single', $props->slug)">
                            {{ $props->title }}
                        </a></h4>
                        @endisset

                        @if(!isset($discover))
                        <div class="mb-5">{!! isset($truncate_content) && $truncate_content ? truncate(Markdown::convertToHtml($props->content), 150) : Markdown::convertToHtml($props->content) !!}</div>
                        @endif

                        @include('layouts.tags', ['tags' => $props->tags])

                        <div class="mt-8">
                            <div class="flex w-full">
                                <a data-love="{{ $props->id }}" {{ is_post_loved($props->id) ? 'data-loved' : '' }} class="w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" href="">
                                    <span></span>
                                </a>
                                <a class="ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" href="{{ Redirector::setUrl(route('single', $props->slug))->addUtm('kodinger_discovery', Redirector::UTM_SOURCE) }}#comments">
                                    <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> 
                                </a>
                                <a data-url="@route('single', $props->slug)" class="share-button ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" href="#">
                                    <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                </a>
                                <a class="ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" data-save="{{ $props->id }}" {{ is_post_saved($props->id) ? 'data-saved' : '' }} href="#"></a>
                            </div>
                        </div>
                    </div>
                    @if((($comment ?? true) != false))
                        @include('layouts.card_comment')
                    @endif
                </div>
