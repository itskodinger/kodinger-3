@if ($paginator->hasPages())
    <ul class="inline-flex w-full" role="navigation">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="disabled" aria-disabled="true"><span class="py-3 px-5 bg-white opacity-75 rounded-full shadow">@lang('pagination.previous')</span></li>
        @else
            <li><a class="py-3 px-5 bg-white hover:bg-gray-100 cursor-pointer rounded-full shadow" href="{{ $paginator->previousPageUrl() }}" rel="prev">@lang('pagination.previous')</a></li>
        @endif

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li class="ml-auto"><a class="py-3 px-5 bg-white hover:bg-gray-100 cursor-pointer rounded-full shadow" href="{{ $paginator->nextPageUrl() }}" rel="next">@lang('pagination.next')</a></li>
        @else
            <li class="ml-auto" aria-disabled="true"><span class="py-3 px-5 bg-white rounded-full shadow">@lang('pagination.next')</span></li>
        @endif
    </ul>
@endif
