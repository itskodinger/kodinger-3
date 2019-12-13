<{{ $tag ?? 'button' }} class="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded {{$class ?? ''}}" 
	{{ isset($tag) && $tag == 'a' ? 'href='.($href ?? '#') : ''}}>
	{{$slot}}
</{{$tag ?? 'button'}}>