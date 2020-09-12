<div id="author-box" class="bg-white rounded border border-gray-200 mb-6 hidden">
	<h2 class="py-4 px-6 text-sm text-gray-500">{{ $post->is_markdown ? 'Post ini ditulis' : 'Slide ini diunggah'}} oleh {{ $post->user->name }} pada {{ $post->time }}</h2>
	<a name="author"></a>

	<div class="px-6 pb-6">
		<div class="flex items-start">
			<img class="w-24 h-24 flex-shrink-0 rounded border border-gray-200" src="{{ $post->user->the_avatar }}">
			<div class="ml-6 w-full">
				<a href="@route('single', $post->user->username)" class="inline-block float-right py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 text-white">Lihat Profile</a>
				<h2 class="text-xl font-semibold">{{ $post->user->name }}</h2>
				<div class="text-gray-600">{{ '@' . $post->user->username }}</div>
				<p class="text-gray-600 text-lg mt-2">{!! $post->user->bio !!}</p>
			</div>
		</div>
	</div>
</div>