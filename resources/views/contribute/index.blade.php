@extends('layouts.dashboard', ['title' => 'Semua Kontribusi'])

@section('dash_content')

	<h2 class="mb-2 text-gray-600 text-lg flex items-center">Semua Kontribusi
	</h2>
	<div class="mb-4">
    	@include('flash::message')
	</div>
	@if(count($contributes) < 1)
	<p>Nggak ada</p>
	@endif

	@foreach($contributes as $contribute)
        @include('layouts.card_contribute', ['contribute' => $contribute])
	@endforeach

	<div class="mt-5"> 
    	{!! $contributes->links() !!}
    </div>
@stop