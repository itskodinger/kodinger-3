<div class="inline-block w-full mb-5">
	<label class="mb-2 inline-block" for="{{ $name }}">{{ $label }}</label>
	@isset($type)
		@if($type == 'textarea')
			<textarea name="{{ $name }}" class="w-full inline-block bg-gray-100 border py-2 px-4 rounded focus:bg-white outline-none h-32 text-sm">{{$value ?? ''}}</textarea>
		@elseif($type == 'markdown')
			@php
				$id = 'mde-' . uniqid();
			@endphp

			<textarea name="{{ $name }}" id="{{ $id }}" class="mt-2">{{$value ?? ''}}</textarea>

			@push('css')
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">
			@endpush

			@push('js')
				<script src="https://cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
				<script>
					var simplemde = new SimpleMDE({
						element: document.getElementById("{{$id}}")
					});
				</script>
			@endpush
		@elseif($type == 'select')
			<select id="{{ $name }}" {{ isset($multiple) ? 'multiple' : '' }} class="w-full inline-block bg-gray-100 border py-2 px-4 rounded focus:bg-white outline-none {{ $class ?? '' }}" name="{{ $name }}">
				@foreach($data as $k => $d)
				<option value="{{ $k }}" {{ isset($value) && $k == $value ? 'selected' : '' }}>{{ $d }}</option>
				@endforeach
			</select>
		@else
		<input id="{{ $name }}" class="w-full inline-block bg-gray-100 border py-2 px-4 rounded focus:bg-white outline-none {{ $class ?? '' }}" type="{{ $type }}" name="{{ $name }}" value="{{ $value ?? '' }}">
		@endif
	@endisset

	{!! $slot ?? null !!}
</div>