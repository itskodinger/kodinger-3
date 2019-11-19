<div class="flex flex-col break-words bg-white border border-2 rounded shadow-md">
	@isset($title)
	<div class="font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0">
	    {{ $title }}
	</div>
	@endisset

	{!! isset($slot) ? '<div class="p-6">' : '' !!}
	{!! $slot !!}
	{!! isset($slot) ? '</div>' : '' !!}
</div>