<div class="flex flex-col break-words bg-white rounded border border-gray-200{{ isset($class) ? ' ' . $class : '' }}">
	@isset($title)
	<div class="font-semibold text-gray-700 pt-4 px-6 mb-0 text-xl">
	    {{ $title }}
	</div>
	@endisset

	{!! isset($slot) ? '<div class="'.(@$bodyClass ? $bodyClass : "p-6") .'">' : '' !!}
	{!! $slot !!}
	{!! isset($slot) ? '</div>' : '' !!}
</div>