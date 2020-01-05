<form enctype="multipart/form-data" method="post" action="{{ $action ?? route('post.store') }}">
	@csrf
	{!! isset($method) ? method_field($method) : null !!}
	@card(['title' => 'Buat Konten'])
		@field([
			'name' => 'title',
			'label' => 'Title',
			'type' => 'text',
			'value' => $post->title ?? ''
		])

		@field([
			'name' => 'slug',
			'label' => 'Slug',
			'type' => 'text',
			'value' => $post->slug ?? ''
		])

		@field([
			'name' => 'content',
			'label' => 'Content',
			'type' => 'markdown',
			'value' => $post->content ?? ''
		])

		@field([
			'name' => 'tags[]',
			'label' => 'Tag',
			'type' => 'select',
			'class' => 'tags',
			'data' => Facades\Services\TagService::select(),
			'value' => isset($post) ? $post->tags->pluck('tag_id') : null,
			'multiple' => true
		])

		@field([
			'name' => 'keyword',
			'label' => 'Keyword',
			'type' => 'text',
			'value' => $post->keyword ?? '',
			'help' => 'Keyword bukan untuk SEO, melainkan digunakan untuk mencari inspirasi desain ke situs di luar Kodinger, seperti Dribbble, Behance atau Uplabs.'
		])

		@field([
			'name' => 'images',
			'label' => 'Images',
			'type' => 'textarea',
			'value' => $post->raw_images ?? '',
			'help' => '1 Baris untuk 1 URL gambar. Urutan gambar sesuai dengan urutan URL di atas.'
		])

		@field([
			'name' => 'pages',
			'label' => 'Pages',
			'type' => 'textarea',
			'value' => $post->raw_pages ?? '',
			'help' => 'Halaman web terkait dengan konten'
		])

		@field([
			'name' => 'tutorials',
			'label' => 'Tutorials',
			'type' => 'textarea',
			'value' => $post->raw_tutorials ?? '',
			'help' => 'Tutorial implementasi terkait dengan konten. Boleh bahasa Inggris atau Indonesia.'
		])

		@field([
			'name' => 'helps',
			'label' => 'Helps',
			'type' => 'textarea',
			'value' => $post->raw_helps ?? '',
			'help' => 'Halaman komunitas terkait dengan konten, seperti GitHub issue dari repository tersebut, Stack Overflow, Quora atau apapun.'
		])

		@field([
			'name' => 'examples',
			'label' => 'Examples',
			'type' => 'textarea',
			'value' => $post->raw_examples ?? '',
			'help' => 'Contoh situs yang menggunakan library terkait ataupun halaman demo dari library.'
		])


		@button([
			'class' => 'w-full'
		])
			Simpan
		@endbutton
	@endcard
</form>

@push('css')
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css">
@endpush

@push('js')
	<script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>

	<script>
		new Choices('.tags');
	</script>
@endpush