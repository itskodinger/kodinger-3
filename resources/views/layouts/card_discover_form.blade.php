@auth
<form id="discover-form" class="mb-8" autocomplete="off">
    <div class="border border-gray-200 rounded">
        <div class="p-5">
            <h1 class="text-indigo-600 mb-4 font-semibold flex items-center">
                <svg class="text-indigo-600 fill-current w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="people"><rect width="24" height="24" opacity="0"/><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/><path d="M17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/><path d="M17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"/></g></g></svg>
                @firstName, Kamu Menemukan Apa Hari Ini?
            </h1>
            <div class="focus-within:border-indigo-500 px-4 py-3 rounded border border-gray-200">
                <input name="link" placeholder="Taruh tautan di sini (cth. https://kodinger.com/artikel)" class="focus:outline-none w-full resize-none input-link" autofocus="">
                <input type="text" name="tags[]" class="tags border-l-0 border-r-0 border-b-0 border-t mt-4 w-full focus:outline-none pt-2">
            </div>
        </div>

        <div class="p-4 border-t border-gray-200 flex items-center">
            <div class="flex items-center">
                <img class="w-10 h-10 rounded border-gray-200 border" src="{{ auth()->user()->the_avatar_sm }}" alt="{{ auth()->user()->name }}">
                <div class="ml-2 overflow-hidden hidden sm:block">
                    <div class="text-sm uppercase font-semibold tracking-wide leading-tight text text-gray-500">Dipublikasi oleh</div>
                    <div class="truncate">{{ auth()->user()->name }}</div>
                </div>
            </div>
            <div class="ml-auto flex items-center flex-shrink-0">
                <svg class="w-6 h-6 mr-2 spin hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="loader"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1z"/><path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/><path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"/><path d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"/><path d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"/><path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"/><path d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"/><path d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"/></g></g></svg>
                <button class="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 publish-button">Publish</button>
            </div>
        </div>
    </div>
</form>
@endauth