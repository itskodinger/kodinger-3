@inject('contributeService', 'Services\ContributeService')

@auth
@if(count($contributeService->onMyPostsDraft()) > 0)
	<div class="py-4 px-6 mb-4 bg-blue-100 text-blue-600 border-2 border-blue-200 rounded leading-loose">
		Terdapat {{ count($contributeService->onMyPostsDraft()) }} kontribusi pada post kamu – tinjau <a class="pb-1 border-b border-blue-600" href="@route('contribute.myposts')">di sini</a>
	</div>
@endif

@if(enable_username())
	<div class="py-4 px-6 mb-4 bg-orange-100 text-orange-600 border-2 border-orange-200 rounded leading-loose">
		Karena kamu login menggunakan akun Google, kami sarankan untuk mengubah username kamu di <a class="border-b border-orange-600 pb-1" href="@route('setting')#account-setting">halaman pengaturan</a> sesegera mungkin!
	</div>
@endif
@endauth