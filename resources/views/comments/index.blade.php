@extends('layouts.dashboard', ['title' => 'Semua Diskusi'])

@section('dash_content')

	<h2 class="mb-2 text-gray-600 text-lg flex items-center">Semua Diskusi
	</h2>
	<div class="mb-4">
    	@include('flash::message')
	</div>
	@if(count($comments) < 1)
	<p>Nggak ada</p>
	@endif

	@foreach($comments as $comment)
        @include('layouts.card_comment_item', ['comment' => $comment])
	@endforeach

	<div class="mt-5"> 
    	{!! $comments->links() !!}
    </div>
@stop