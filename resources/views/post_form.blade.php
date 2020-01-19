@extends('layouts.app')

@section('content')
	<div id="post-form">Loading editor ...</div>
@stop

@push('js')
	<script src="{{ mix('js/post-form.js') }}"></script>
@endpush