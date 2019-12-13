@extends('layouts.dashboard', ['title' => 'Edit User'])

@section('dash_content')
	@include('users.form', ['action' => route('user.update', $user->id), 'method' => 'PUT'])
@stop

