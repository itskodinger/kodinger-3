@extends('layouts.app', ['title' => 'Semua Kontribusi'])

@section('content')
    <div class="flex items-center py-12">
        <div class="md:w-1/2 md:mx-auto">
        	<div class="mb-4">
	        	@include('flash::message')
        	</div>

        	<h2 class="mb-2 text-gray-600 text-lg flex items-center">Semua Kontribusi
        	</h2>
        	@if(count($contributes) < 1)
        	<p>Nggak ada</p>
        	@endif

        	@foreach($contributes as $contribute)
                @include('layouts.card_contribute', ['contribute' => $contribute])
        	@endforeach

        	<div class="mt-5"> 
	        	{!! $contributes->links() !!}
	        </div>
        </div>
    </div>
@stop