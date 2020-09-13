<div class="flex mb-4 font-semibold">
    <div class="group">
        <div class="text-gray-600 flex items-center cursor-pointer">
            {{ current_sort() }}
            <svg class="w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
        <ul class="absolute hidden group-hover:block bg-white rounded shadow w-40">
            @foreach(sorting() as $sort => $name)
            <li><a class="inline-block w-full px-5 py-2 text-sm hover:bg-gray-100" href="@current(['sort' => $sort])">{{ $name }}</a></li>
            @endforeach
        </ul>
    </div>

    <ul class="flex items-center -mx-2 ml-auto text-sm">
        <li class="mx-2"><a href="@currentRemove(['type'])" class="hover:text-indigo-600 {{ is_type('') ? 'text-indigo-600' : '' }}">Semua</a></li>
        @foreach(post_types() as $type)
        <li class="mx-2"><a href="@current(['type' => $type])" class="capitalize hover:text-indigo-600 {{ is_type($type) ? 'text-indigo-600' : '' }}">{{$type}}</a></li>
        @endforeach
    </ul>
</div>
