@extends('layouts.app', ['title' => 'Login'])

@section('content')
    <div class="container mx-auto py-12">
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm">
                @card(['title' => 'Login'])
                    @include('layouts.login_content')
                @endcard
            </div>
        </div>
    </div>
@endsection
