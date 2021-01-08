@extends('layouts.profile', ['title' => 'Notifikasi'])

@section('profile_content')
    <h1 class="flex items-center mb-4 text-lg">Semua Notifikasi</h1>

    <div class="border border-gray-200 rounded">
        @foreach(['post_mention', 'post_comment', 'post_like', 'comment_mention', 'comment_reply'] as $t)
        <a href="" class="flex items-center p-4 bg-gray-100 border-b border-gray-200 last:border-b-0">
            <div class="relative w-16 h-16">
                <img class="object-cover w-full h-full rounded" src="https://kodinger-cdn.sgp1.digitaloceanspaces.com/public/avatar/80/14899175.jpg"> 
                <div class="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 -mb-2 -mr-2 bg-indigo-600 rounded-full shadow">
                    @switch($t)
                        @case('post_mention')
                            <svg class="w-4 text-white stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                        @break
                        @case('post_comment')
                            <svg class="w-4 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> 
                        @break
                        @case('post_like')
                            <svg class="w-4 text-white stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        @break
                        @case('comment_mention')
                            <svg class="w-4 text-white stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                        @break
                        @case('comment_reply')
                            <svg class="w-4 text-white stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                        @break
                    @endswitch
                </div>
            </div>
            
            <div class="ml-5">
                <p class="text-lg">Rizal mentioned you in a comment.</p> 
                <div class="flex items-center mt-1 text-sm text-gray-600">
                    <svg class="w-4 mr-1 text-gray-600 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 
                    <span>14 menit yang lalu</span>
                </div>
            </div>
        </a>
        @endforeach
    </div>
@stop

@push('js')
@endpush

