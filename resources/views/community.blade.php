@extends('layouts.app', ['title' => 'Komunitas'])

@section('content')
    <div class="container py-12 mx-auto">
        <h1 class="text-indigo-600 text-xl font-semibold">Komunitas</h1>
        <p class="mt-1 text-gray-600">Temukan komunitas di sekitar kamu di sini.</p>

        <div class="flex -mx-4 mt-6 flex-wrap">
        	@foreach($communities as $community)
        	<div class="px-4 w-3/12">
        		<div class="bg-white rounded border-2 border-gray-200">
        			<div class="pb-8 pt-6 px-6">
        				<div class="float-right">
        					<a target="_blank" href="{{ $community->website }}" class="flex leading-relaxed items-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 border-2 border-gray-200 uppercase text-xs font-semibold tracking-wider py-1 px-3 rounded-full">
        						View
        						<svg class="ml-1 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g></svg>
        					</a>
        				</div>
        				<div class="rounded p-2 w-16 h-16 flex-shrink-0 flex items-center justify-center border" {!! isset($community->logo_bg) ? 'style="background-color: '.$community->logo_bg.';"' : '' !!}>
        					<img src="{{ logo($community->logo) }}" alt="{{ $community->name }}" class="w-full">
        				</div>
	        			<h2 class="font-bold text-lg mt-4">{{ $community->name }}</h2>
	        			<p class="mt-1 text-sm text-gray-600 font-light leading-relaxed h-12">{{ $community->short_description }}</p>
        			</div>
        			<div class="flex px-6 pb-6">
        				<div class="flex text-sm items-center">
        					<svg class="w-5 mr-1 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g></svg>
        					{{ number_format($community->member, 0) }}+
        				</div>
	        			<div class="inline-flex ml-auto">
	        				@isset($community->facebook)
	        				<a target="_blank" href="{{ $community->facebook }}">
	        					<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g></svg>
	        				</a>
	        				@endif
	        				@isset($community->twitter)
	        				<a target="_blank" href="{{ $community->twitter }}">
								<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g></svg>
							</a>
							@endif
							@isset($community->github)
	        				<a target="_blank" href="{{ $community->github }}">
	        					<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g></svg>
							</a>
							@endif
							@isset($community->telegram)
	        				<a target="_blank" href="{{ $community->telegram }}">
	        					<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>
							</a>
							@endif
	        			</div>
	        		</div>
        		</div>
        	</div>
        	@endforeach
        </div>
    </div>
@stop