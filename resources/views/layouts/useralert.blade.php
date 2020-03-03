@inject('contributeService', 'Services\ContributeService')

@auth
@if(count($contributeService->onMyPostsDraft()) > 0)
	<div class="py-4 px-6 mb-4 bg-blue-100 text-blue-600 border-2 border-blue-200 rounded text-sm leading-loose">
		Terdapat {{ count($contributeService->onMyPostsDraft()) }} kontribusi pada post kamu – tinjau <a class="pb-1 border-b border-blue-600" href="@route('contribute.myposts')">di sini</a>
	</div>
@endif
@endauth