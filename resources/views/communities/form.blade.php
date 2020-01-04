<form enctype="multipart/form-data" method="post" action="{{ $action ?? route('community.store') }}">
	@csrf
	{!! isset($method) ? method_field($method) : null !!}
	@card(['title' => 'Tambah Komunitas'])
		@field([
			'name' => 'name',
			'label' => 'Name',
			'type' => 'text',
			'value' => $community->name ?? ''
		])

		@field([
			'name' => 'short_description',
			'label' => 'Short Description',
			'type' => 'text',
			'value' => $community->short_description ?? '',
			'help' => 'Isi dengan tagline.'
		])

		@field([
			'name' => 'description',
			'label' => 'Description',
			'type' => 'markdown',
			'value' => $community->description ?? ''
		])

		@field([
			'name' => 'member',
			'label' => 'Member',
			'type' => 'text',
			'value' => $community->member ?? '',
			'placeholder' => 'Mis. 1000',
			'help' => 'Jumlah member di dalam komunitas.'
		])

		@foreach(['facebook', 'twitter', 'telegram', 'website', 'github'] as $name)
		@field([
			'name' => 'links['.$name.']',
			'label' => $name,
			'type' => 'text',
			'value' => $community->{$name} ?? '',
		])
		@endforeach

		@field([
			'name' => 'logo',
			'label' => 'Logo',
			'type' => 'file',
		])

		@isset($community)
		<img src="{{ $community->logo }}" width="100">
		@endif

		@field([
			'name' => 'logo_bg',
			'label' => 'Logo Background',
			'type' => 'text',
			'value' => $community->logo_bg ?? '',
			'help' => 'Opsional. Kode HEX warna untuk background logo.'
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