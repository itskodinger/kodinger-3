@inject('post', 'Services\PostService')

@php
$random = $post->random();
$showAdsInstead = (bool) mt_rand(0, 1);
$templates = ['layouts.card_ads_digitalocean'];
$selectedTemplate = $templates[array_rand($templates)];
@endphp

<div class="rounded">
    @if($random !== null && ! $showAdsInstead)
        <a href="@route('post.show', [$random->user->username, $random->slug])">
            <img src="{{ $random->thumbnail }}" alt="{{ $random->title }}" class="rounded">
        </a>
        <h4 class="mt-3 text-lg font-semibold text-indigo-600 hover:text-indigo-700"><a href="@route('post.show', [$random->user->username, $random->slug])">{!! $random->title !!}</a></h4>
        <div class="mt-2 -mx-1">
            @foreach($random->tags->slice(0, 3) as $tag)
            <a class="mx-1 text-gray-600" href="@route('search', ['tag' => $tag->tag->name])">#{!! $tag->tag->name !!}</a>
            @endforeach
        </div>
        <p class="mt-2 text-gray-600">oleh <a class="font-semibold text-black" href="@route('single', $random->user->username)">{{ $random->user->name }}</a></p>
    @endif

    @if( $showAdsInstead )

        @include($selectedTemplate)

    @endif

</div>
