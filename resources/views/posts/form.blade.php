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
			'multiple' => true
		])

		@field([
			'name' => 'keyword',
			'label' => 'Keyword',
			'type' => 'text',
			'value' => $post->keyword ?? ''
		])

		@field([
			'name' => 'images',
			'label' => 'Images',
			'type' => 'textarea',
			'value' => $post->images ?? ''
		])

		@field([
			'name' => 'inspirations',
			'label' => 'inspirations',
			'type' => 'textarea',
			'value' => $post->inspirations ?? ''
		])

		@field([
			'name' => 'pages',
			'label' => 'pages',
			'type' => 'textarea',
			'value' => $post->pages ?? ''
		])

		@field([
			'name' => 'tutorials',
			'label' => 'tutorials',
			'type' => 'textarea',
			'value' => $post->tutorials ?? ''
		])

		@field([
			'name' => 'helps',
			'label' => 'helps',
			'type' => 'textarea',
			'value' => $post->helps ?? ''
		])

		@field([
			'name' => 'examples',
			'label' => 'examples',
			'type' => 'textarea',
			'value' => $post->examples ?? ''
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