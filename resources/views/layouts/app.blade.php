<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ (isset($title) ? $title . ' – ' : '') . config('app.name', 'Laravel') }}</title>

    @stack('css')

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body class="h-screen">
    <div id="app">
        <nav class="bg-white border-b-2 border-indigo-600 shadow mb-4 py-3 fixed left-0 w-full z-10">
            <div class="container mx-auto px-6 md:px-0">
                <div class="flex items-center justify-center">
                    <div class="ml-6">
                        <a href="{{ url('/') }}" class="text-lg font-semibold text-indigo-600 no-underline">
                            <img src="http://kodinger.com/assets/images/logos/kodinger.svg" width="45">
                        </a>
                    </div>
                    <div class="ml-4">
                        <a class="text-sm py-4 mx-3 text-indigo-600 font-semibold" href="">Home</a>
                        <a class="text-sm py-4 mx-3 text-gray-500" href="">Goods</a>
                        <a class="text-sm py-4 mx-3 text-gray-500" href="">About</a>
                    </div>
                    <div class="ml-auto flex items-center">
                        <form action="{{ url('') }}">
                            <input type="text" name="search" class="bg-search focus:outline-none focus:bg-transparent pl-10 bg-gray-200 border border-gray-200 py-3 px-4 mr-2 rounded text-sm w-64" placeholder="Cari di sini ..." value="{{ request()->search }}">
                        </form>
                        <div class="w-px h-6 mx-6 mr-8 bg-gray-200"></div>
                        @guest
                            <a href="{{ route('auth', 'github') }}" class="inline-flex items-center bg-black py-3 px-4 rounded text-white text-sm shadow-lg hover:shadow-none hover:bg-indigo-800">
                                <svg class="w-5 fill-current text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" opacity="0"/><path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></g></svg>
                                Login with GitHub
                            </a>
                        @else
                            <div class="relative">
                                <a onclick="this.nextElementSibling.classList.toggle('hidden');"><img src="{{ auth()->user()->the_avatar }}" class="user-dropdown cursor-pointer rounded border w-10"></a>
                                <ul class="user-dropdown-menu absolute hidden bg-white shadow-lg w-48 right-0 mt-3 rounded">
                                    <li><a class="block py-2 px-4 text-sm hover:bg-indigo-100 rounded-tr rounded-tl" href="{{ route('single', auth()->user()->the_username) }}">Profile</a></li>
                                    <li><a class="block py-2 px-4 text-sm hover:bg-indigo-100 rounded-tr rounded-tl" href="{{ route('loves', auth()->user()->the_username) }}">Disukai</a></li>
                                    <li><a class="block py-2 px-4 text-sm hover:bg-indigo-100 rounded-tr rounded-tl" href="{{ route('saves') }}">Disimpan</a></li>
                                    <li><a class="block py-2 px-4 text-sm hover:bg-indigo-100 rounded-tr rounded-tl" href="{{ route('contributes', auth()->user()->the_username) }}">Kontribusi</a></li>
                                    <li><a class="block py-2 px-4 text-sm hover:bg-indigo-100" href="{{ route('setting') }}">Pengaturan</a></li>
                                    <li class="w-full h-px bg-gray-200"></li>
                                    <li><a onclick="event.preventDefault();document.getElementById('logout-form').submit();" class="block py-2 px-4 text-sm text-red-600 hover:bg-indigo-100 rounded-br rounded-bl" href="">Logout</a></li>
                                </ul>
                            </div>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="hidden">
                                {{ csrf_field() }}
                            </form>
                        @endguest
                    </div>
                </div>
            </div>
        </nav>

        <div class="pt-16">
            @yield('content')
        </div>

        <div class="py-10 text-center text-sm">
            Copyright &copy; {{date('Y')}}
        </div>
    </div>

    <!-- Scripts -->
    <script>
        const save_url = '{{ route('saves.store') }}',
              base_url = '{{ url('') }}',
              $ = document.querySelector.bind(document),
              $$ = document.querySelectorAll.bind(document);

        // https://codepen.io/gabrieleromanato/pen/LpLVeQ
        function toJSONString( form ) {
            var obj = {};
            var elements = form.querySelectorAll( "input, select, textarea" );
            for( var i = 0; i < elements.length; ++i ) {
                var element = elements[i];
                var name = element.name;
                var value = element.value;

                if( name ) {
                    obj[ name ] = value;
                }
            }

            return JSON.stringify( obj );
        }


        // https://stackoverflow.com/questions/14321862/javascript-get-value-from-multiple-inputs-in-an-array
        function getMultipleInputValue(form) {
            var inputs = form.querySelectorAll('input, select, textarea'),
                names  = [].map.call(inputs, function( input ) {
                    if(input.value.trim().length > 0) 
                        return input.value;
                });

            return names;
        }

        $('body').addEventListener('click', function(e) {
            // close dropdown
            if(e.target && !e.target.classList.contains('user-dropdown'))
                $('.user-dropdown-menu').classList.add('hidden');
        });
    </script>

    @stack('js')
</body>
</html>
