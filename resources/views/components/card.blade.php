<div class="flex flex-col break-words bg-white rounded border-2 border-gray-200">
	@isset($title)
	<div class="font-semibold text-gray-700 pt-4 px-6 mb-0">
	    {{ $title }}
	</div>
	@endisset

	{!! isset($slot) ? '<div class="p-6">' : '' !!}
	{!! $slot !!}
	{!! isset($slot) ? '</div>' : '' !!}
</div>