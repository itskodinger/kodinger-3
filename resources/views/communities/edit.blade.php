@extends('layouts.dashboard', ['title' => 'Edit Komunitas'])

@section('dash_content')
	@include('communities.form', ['action' => route('community.update', $community->id), 'method' => 'PUT'])
@stop

