@extends('layouts.app', ['title' => 'Komunitas'])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-4">
        	@foreach([1,2,3,4] as $community)
        	<div class="px-4 w-4/12">
        		<div class="bg-white rounded shadow-md py-8 px-6 text-center">
        			<h2 class="font-bold text-lg">ReactID</h2>
        			<p class="mt-1 text-sm text-gray-600 font-light">Komunitas React Indonesia</p>
        		</div>
        	</div>
        	@endforeach
        </div>
    </div>
@stop