<form enctype="multipart/form-data" method="post" action="{{ $action ?? route('post.store') }}">
	@csrf
	{!! isset($method) ? method_field($method) : null !!}
	@card(['title' => 'Manage User'])
		@field([
			'name' => 'name',
			'label' => 'Name',
			'type' => 'text',
			'value' => $user->name ?? ''
		])

		@field([
			'name' => 'email',
			'label' => 'Email',
			'type' => 'text',
			'value' => $user->email ?? ''
		])

		@field([
			'name' => 'username',
			'label' => 'Username',
			'type' => 'text',
			'value' => $user->username ?? ''
		])

		@field([
			'name' => 'password',
			'label' => 'Password',
			'type' => 'password',
		])

		@field([
			'name' => 'status',
			'label' => 'Status',
			'type' => 'select',
			'data' => user_statuses(),
			'value' => $user->status
		])

		@field([
			'name' => 'roles[]',
			'label' => 'Roles',
			'type' => 'select',
			'data' => Role::pluck('name', 'id'),
			'multiple' => true,
			'class' => 'h-24',
			'value' => $user->roles()->pluck('id')
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