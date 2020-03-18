            <p class="mb-4 text-sm text-gray-600 leading-relaxed">Login dengan mudah menggunakan akun GitHub kamu. Dengan memiliki akun, kamu akan dapat melakukan:</p>
            <ul class="mb-3 inline-block w-full">
            	@foreach(login_features() as $item)
            	<li class="flex items-center mb-4 text-sm">
            		<span class="border-teal-500 border-2 w-6 h-6 rounded-full flex items-center justify-center mr-3">
	            		<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current text-teal-500 w-4" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
	            	</span>
            		{{ $item }}
            	</li>
            	@endforeach
            </ul>
            <a href="@route('auth', 'github')" class="flex items-center justify-center bg-black py-3 px-4 rounded text-white text-sm shadow-lg hover:shadow-none hover:bg-indigo-800">
                <svg class="w-5 fill-current text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" opacity="0"/><path d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"/></g></svg>
                Login with GitHub
            </a>
            <p class="text-xs mt-5 text-gray-600">Dengan mendaftar kamu setuju dengan <a href="@docs('rules')" target="_blank" class="text-indigo-600 underline">aturan</a> dan <a href="@docs('privacy')" target="_blank" class="text-indigo-600 underline">kebijakan privasi</a> Kodinger</p>
