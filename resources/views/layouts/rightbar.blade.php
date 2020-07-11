@inject('tag', 'Services\TagService')

<div class="off-canvasify rightbar" id="rightbar">
    <div class="p-6 rounded mb-10" style="background-image: linear-gradient( 109.5deg,  rgba(76,221,242,1) 11.2%, rgba(92,121,255,1) 91.1% );">
        <div class="text-3xl mb-2">👨👧</div>
        <h2 class="text-white font-semibold text-lg mb-2">Belajar Bareng Komunitas</h2>
        <p class="text-white">Komunitas akan membantu kamu berkembang bersama-sama.</p>
        <a href="@route('community')" class="inline-flex items-center mt-5 bg-white hover:bg-transparent hover:text-white hover:border-white border border-transparent py-2 px-6 font-semibold rounded text-sm">
            Cari Komunitas
            <svg class="ml-2 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </a>
    </div>

    @if(request()->route()->getName() == 'post.show' && !$post->is_markdown)
        @include('layouts.card_more_post')
    @endif

    <div class="mx-auto p-4 sm:p-0 sm:mx-0">
        <div class="bg-white rounded border border-gray-200">
            <h4 class="font-bold mb-3 px-4 pt-4">Topik Populer</h4>
            @foreach($tag->popular(5) as $tag)
            <a class="flex items-center hover:bg-gray-100 px-5 py-4 border-b border-gray-100" href="@route('search', ['tag' => $tag->name])">
                <div class="text-gray-600 font-semibold truncate">{{ '#' . $tag->name }}</div>
            </a>
            @endforeach
        </div>

        <div class="py-6">
            <div class="container mx-auto">
                <div class="-mx-2 mb-2">
                	@include('layouts.links')
                </div>
                <div class="text-gray-600 font-light">Copyright &copy; Kodinger</div>
            </div>
        </div>
    </div>
</div>