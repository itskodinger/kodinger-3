                @inject('tag', 'Services\TagService')

                <h4 class="font-bold mb-3 text-indigo-600">Topik Populer</h4>
                <div class="bg-white rounded border-2 border-gray-200">
                    @foreach($tag->popular(5) as $tag)
                    <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="{{ route('tag', $tag->name) }}">
                        <div class="text-sm text-gray-600 font-semibold truncate">{{ '#' . $tag->name }}</div>
                    </a>
                    @endforeach
                </div>

		        <div class="py-6 border-t border-gray-200 text-sm">
		            <div class="container mx-auto">
		                <div class="-mx-2 mb-2">
		                    <a class="mx-2 text-gray-600 hover:text-indigo-600" href="{{ route('about') }}">About</a>
		                    <a class="mx-2 text-gray-600 hover:text-indigo-600" href="{{ route('about') }}">Contact</a>
		                    <a class="mx-2 text-gray-600 hover:text-indigo-600" href="">Help</a>
		                    <a class="mx-2 text-gray-600 hover:text-indigo-600" href="">Privacy Policy</a>
		                    <a class="mx-2 text-gray-600 hover:text-indigo-600" href="">Terms of Use</a>
		                    <a class="ml-2 text-gray-600 hover:text-indigo-600" href="http://uarnix.com">Uarnix</a>
		                </div>
		                <div class="text-gray-600 font-light">Copyright &copy; Kodinger</div>
		            </div>
		        </div>
