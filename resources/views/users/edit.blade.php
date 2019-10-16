@extends('layouts.app', ['title' => 'Edit User'])

@section('content')
    <div class="flex items-center py-12">
        <div class="md:w-1/2 md:mx-auto">
        	@include('users.form', ['action' => route('user.update', $user->id), 'method' => 'PUT'])
		</div>
	</div>
@stop

