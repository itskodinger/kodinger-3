<div class="bg-white rounded border border-gray-200 mt-10 mb-10">
    <h4 class="font-bold text-indigo-600 py-4 px-5">
        @if($post->user->posts->count() > 1)
        Yang lainnya dari {{ $post->user->name }}
        @else
        Baca juga
        @endif
    </h4>
    @foreach($posts as $post)
        <a class="inline-block w-full hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('post.show', [$post->user->username, $post->slug])">
            <div class="font-semibold">{{ $post->title }}</div>
            <div class="mt-2 -mx-1">
                @foreach($post->tags->slice(0, 3) as $tag)
                <span class="text-gray-600 mx-1">#{!! $tag->tag->name !!}</span>
                @endforeach
            </div>
        </a>
    @endforeach
</div>
