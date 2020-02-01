@extends('layouts.app', ['title' => 'Buat Post Baru', 'navbar' => false])

@section('content')
	<div id="post-form">Loading editor ...</div>
@stop

@push('css')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@yaireo/tagify@3.1.0/dist/tagify.css">
@endpush
@push('js')
	<script>const key2str = {!! json_encode(key2str()) !!};</script>
	<script src="{{ mix('js/post-form.js') }}"></script>
@endpush