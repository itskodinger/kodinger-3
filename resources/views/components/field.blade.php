<div class="inline-block w-full mb-5">
	@isset($label)
	<label class="mb-2 inline-block text-gray-600 {{ isset($error) && $error != false ? 'text-red-600' : '' }}" for="{{ $name }}">{{ $label }}</label>
	@endisset
	@isset($type)
		@if($type == 'textarea')
			<textarea name="{{ $name }}" class="w-full inline-block bg-gray-100 border {{ isset($error) && $error != false ? 'border-red-600' : '' }} py-2 px-4 rounded focus:bg-white outline-none h-32">{{$value ?? ''}}</textarea>
		@elseif($type == 'markdown')
			<textarea name="{{ $name }}" class="w-full inline-block bg-gray-100 border {{ isset($error) && $error != false ? 'border-red-600' : '' }} py-2 px-4 rounded focus:bg-white outline-none h-32">{{$value ?? ''}}</textarea>
            <div class="flex items-center">
	            <svg width="20px" class="mr-2 fill-current text-gray-600" viewBox="0 0 256 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
	                <g>
	                    <path d="M238.371257,157.892216 L18.3952096,157.892216 C8.43113772,157.892216 0,149.461078 0,139.497006 L0,18.3952096 C0,8.43113772 8.43113772,0 18.3952096,0 L237.60479,0 C247.568862,0 256,8.43113772 256,18.3952096 L256,139.497006 C256,149.461078 248.335329,157.892216 238.371257,157.892216 L238.371257,157.892216 Z M18.3952096,12.2634731 C15.3293413,12.2634731 12.2634731,15.3293413 12.2634731,18.3952096 L12.2634731,139.497006 C12.2634731,143.329341 15.3293413,145.628743 18.3952096,145.628743 L237.60479,145.628743 C241.437126,145.628743 243.736527,142.562874 243.736527,139.497006 L243.736527,18.3952096 C243.736527,14.5628743 240.670659,12.2634731 237.60479,12.2634731 C238.371257,12.2634731 18.3952096,12.2634731 18.3952096,12.2634731 L18.3952096,12.2634731 Z M36.7904192,121.101796 L36.7904192,36.7904192 L61.3173653,36.7904192 L85.8443114,67.4491018 L110.371257,36.7904192 L134.898204,36.7904192 L134.898204,121.101796 L110.371257,121.101796 L110.371257,72.8143713 L85.8443114,103.473054 L61.3173653,72.8143713 L61.3173653,121.101796 L36.7904192,121.101796 L36.7904192,121.101796 Z M190.850299,121.101796 L154.05988,80.4790419 L178.586826,80.4790419 L178.586826,36.7904192 L203.113772,36.7904192 L203.113772,79.7125749 L227.640719,79.7125749 L190.850299,121.101796 L190.850299,121.101796 Z"></path>
	                </g>
	            </svg>
	            <p class="text-sm text-gray-600">Diizinkan Markdown – <a href="https://daringfireball.net/projects/markdown/" class="text-indigo-600 font-bold">Lihat dokumentasi</a>.
	        </div>
		@elseif($type == 'select')
			{!! Form::select($name, $data ?? [], $value ?? null, ['class' => 'w-full inline-block bg-gray-100 border ' . (isset($error) && $error != false ? 'border-red-600' : '') . ' h-12 px-4 rounded focus:bg-white outline-none ' . ($class ?? ''), 'id' => $id ?? '', isset($multiple) ? 'multiple' : '']) !!}
		@elseif($type == 'div')
		<div id="{{ $name }}" class="w-full inline-block bg-gray-100 border {{ isset($error) && $error != false ? 'border-red-600' : '' }} py-2 px-4 rounded focus:bg-white outline-none {{ $class ?? '' }}">{{ $value ?? '' }}</div>
		@else
		<input id="{{ $name }}" class="w-full inline-block bg-gray-100 border {{ isset($error) && $error != false ? 'border-red-600' : '' }} py-2 px-4 rounded focus:bg-white outline-none {{ $class ?? '' }}" type="{{ $type }}" name="{{ $name }}" value="{{ $value ?? '' }}" placeholder="{{ $placeholder ?? '' }}">
		@endif
	@endisset

	@isset($error)
	<p class="mt-1 text-red-600 text-sm">{!! $error !!}</p>
	@endisset

	@isset($help)
		<p class="text-gray-600 text-sm mt-1 font-light">{!! $help !!}</p>
	@endisset

	{!! $slot ?? null !!}
</div>