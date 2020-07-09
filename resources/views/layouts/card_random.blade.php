@inject('post', 'Services\PostService')

@php
$random = $post->random();
@endphp

        <div class="rounded">
            @if($random !== null)
            <a href="@route('post.show', [$random->user->username, $random->slug])">
                <img src="{{ $random->thumbnail }}" alt="{{ $random->title }}" class="rounded">
            </a>
            <h4 class="text-indigo-600 mt-3 font-semibold hover:text-indigo-700 text-lg"><a href="@route('post.show', [$random->user->username, $random->slug])">{!! $random->title !!}</a></h4>
            <div class="mt-2 -mx-1">
                @foreach($random->tags->slice(0, 3) as $tag)
                <a class="text-gray-600 mx-1" href="@route('search', ['tag' => $tag->tag->name])">#{!! $tag->tag->name !!}</a>
                @endforeach
            </div>
            <p class="text-gray-600 mt-2">oleh <a class="font-semibold text-black" href="@route('single', $random->user->username)">{{ $random->user->name }}</a></p>
            @endif
        </div>
