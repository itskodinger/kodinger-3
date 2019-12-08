@extends('layouts.app', ['title' => 'About'])

@section('content')
    <div class="container mx-auto">
        <div class="py-12 -mx-4">
            <h1 class="text-indigo-600 text-xl font-semibold">Team Kodinger</h1>
            <p class="mt-1 text-gray-600">Orang-orang yang ada dibelakang Kodinger.</p>

            <div class="flex mt-8 -mx-4">
                @foreach(teams() as $team)
                <div class="w-4/12 mx-4">
                    <div class="bg-white rounded border-2 border-gray-300 hover:border-indigo-600 px-4 py-8 text-center">
                        <img class="w-24 rounded-full inline" src="{{ $team['image'] }}">
                        <h2 class="text-lg mt-2 text-indigo-600 font-bold">{{$team['name']}}</h2>
                        <p class="text-gray-500 font-semibold text-xs uppercase tracking-wider">{{$team['as']}}</p>
                        <div class="flex justify-center items-center mt-4">
                            <a href="{{ $team['facebook'] }}"><svg class="w-6 text-gray-600 hover:text-indigo-600 fill-current mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g></svg></a>
                            <a href="{{ $team['github'] }}"><svg class="w-6 text-gray-600 hover:text-indigo-600 fill-current mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g></svg></a>
                            <a href="{{ $team['ig'] }}"><svg class="w-6 text-gray-600 hover:text-indigo-600 stroke-current mx-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
@stop