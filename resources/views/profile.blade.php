@extends('layouts.profile', ['title' => $user->name])

@section('profile_content')
	<div class="flex mb-4 items-center">
	    <h1 class="text-lg">Semua Post</h1> 
	    @isme($user)
	    <div class="ml-auto">
		    <a class="text-sm border-b font-semibold border-teal-600 text-teal-600 mr-1" href="@current(['status' => 'publish'])">Publish</a>
		    <a class="text-sm border-b font-semibold border-orange-600 text-orange-600" href="@current(['status' => 'draft'])">Draft {{ $user->hasDraftPost() ? '(' . $user->draftedPostsCount() . ')' : '' }}</a>
		</div>
	    @endisme
	</div>

    <div class="posts"></div>
@stop

@push('js')
    <script>const this_user = '{{$user->username}}', status = '{{ request()->status }}';</script>
    <script src="{{ mix('js/profile.js') }}"></script>
@endpush
