                            @foreach($tags as $tag)
                            <a class="border border-gray-300 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded-full py-2 px-4 text-sm" href="@route('tag', $tag->tag->name)">
                                #{{ $tag->tag->name }}
                            </a>
                            @endforeach
