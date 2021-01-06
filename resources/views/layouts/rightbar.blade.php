@inject('tag', 'Services\TagService')

<div class="off-canvasify rightbar" id="rightbar">
    <div class="p-4 mx-auto sm:p-0 sm:mx-0">


            @if(isset($post) && $post->is_markdown)
                <div class="hidden lg:block ">
                    @include('layouts.card_random')
                    @include('layouts.card_more_post')
                </div>
            @endif

            <div class="{{ (isset($post)) ? 'block lg:hidden' : '' }}">
                <div class="p-6 mb-10 rounded" style="background-image: linear-gradient( 109.5deg,  rgba(76,221,242,1) 11.2%, rgba(92,121,255,1) 91.1% );">
                    <div class="mb-2 text-3xl">👨👧</div>
                    <h2 class="mb-2 text-lg font-semibold text-white">Belajar Bareng Komunitas</h2>
                    <p class="text-white">Komunitas akan membantu kamu berkembang bersama-sama.</p>
                    <a href="@route('community')" class="inline-flex items-center px-6 py-2 mt-5 text-sm font-semibold bg-white border border-transparent rounded hover:bg-transparent hover:text-white hover:border-white">
                        Cari Komunitas
                        <svg class="w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </a>
                </div>


                @if(request()->route()->getName() == 'post.show' && !$post->is_markdown)
                    @include('layouts.card_more_post')
                @endif

                @if(request()->route()->getName() !== 'post.show')
                    @include('layouts.card_top_user')
                @endif

                <div class="bg-white border border-gray-200 rounded">
                    <h4 class="px-4 pt-4 mb-3 font-bold">Topik Populer</h4>
                    @foreach($tag->popular(5) as $tag)
                    <a class="flex items-center px-5 py-4 border-b border-gray-100 hover:bg-gray-100" href="@route('search', ['tag' => $tag->name])">
                        <div class="font-semibold text-gray-600 truncate">{{ '#' . $tag->name }}</div>
                    </a>
                    @endforeach
                </div>
            </div>


        <div class="{{ (isset($post) && $post->is_markdown) ? '' : 'py-6' }}">
            <div class="container mx-auto">
                <div class="mb-2 -mx-2">
                	@include('layouts.links')
                </div>
                <div class="font-light text-gray-600">Copyright &copy; Kodinger</div>
            </div>
        </div>
    </div>
</div>
