@if ($paginator->hasPages())
    <ul class="inline-flex" role="navigation">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <li class="disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                <span class="p-2 px-3 bg-white rounded-tl rounded-bl" aria-hidden="true">&lsaquo;</span>
            </li>
        @else
            <li>
                <a class="p-2 px-3 bg-white rounded-tl rounded-bl" href="{{ $paginator->previousPageUrl() }}" rel="prev" aria-label="@lang('pagination.previous')">&lsaquo;</a>
            </li>
        @endif

        {{-- Pagination Elements --}}
        @foreach ($elements as $element)
            {{-- "Three Dots" Separator --}}
            @if (is_string($element))
                <li class="disabled" aria-disabled="true"><span>{{ $element }}</span></li>
            @endif

            {{-- Array Of Links --}}
            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li aria-current="page"><span class="p-2 px-3 bg-indigo-600 rounded text-white">{{ $page }}</span></li>
                    @else
                        <li><a class="p-2 px-3 bg-white" href="{{ $url }}">{{ $page }}</a></li>
                    @endif
                @endforeach
            @endif
        @endforeach

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <li>
                <a class="p-2 px-3 bg-white rounded-tr rounded-br" href="{{ $paginator->nextPageUrl() }}" rel="next" aria-label="@lang('pagination.next')">&rsaquo;</a>
            </li>
        @else
            <li class="disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                <span class="p-2 px-3 bg-white rounded-tr rounded-br" aria-hidden="true">&rsaquo;</span>
            </li>
        @endif
    </ul>
@endif
