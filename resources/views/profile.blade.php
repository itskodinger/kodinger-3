@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
    @isme($user)
	<div class="flex mb-4 items-center border border-gray-200 rounded">
	    <a class="px-4 py-3 border-r border-gray-200 text-gray-600 hover:bg-gray-100" href="@current(['status' => 'publish'])">Publish</a>
	    <a class="px-4 py-3 border-r border-gray-200 text-gray-600 hover:bg-gray-100" href="@current(['status' => 'draft'])">Draft {{ $user->hasDraftPost() ? '(' . $user->draftedPostsCount() . ')' : '' }}</a>
	</div>
    @endisme

    @include('layouts.posts_header')

    <div class="posts"></div>
@stop

@push('js')
    <script>const this_user = '{{$user->username}}', status = '{{ request()->status }}'; const type = '{{ request()->type ?? false }}', sort = '{{ request()->sort ?? 'newest' }}';</script>
    <script src="{{ mix('js/profile.js') }}"></script>
@endpush
