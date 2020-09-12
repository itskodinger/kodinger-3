@extends('layouts.app', ['title' => 'Rekomendasikan Link ' . key2str($col)])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6 justify-center">
            <div class="w-8/12 px-6">
            	@if(!$allowed)
            	<div class="py-4 px-6 mb-4 bg-orange-100 text-orange-600 border-2 border-orange-200 rounded leading-loose">
            		Kamu tidak dapat berkontribusi ke post sendiri – kamu dapat menyuntingnya <a class="border-b border-orange-600 pb-1" href="@route('post', $post->id)">di sini</a>.
            	</div>
            	@endif
            	<form method="post" id="form">
	            	<div class="p-8 bg-white border-2 border-gray-200 rounded">
	            		<div class="flex hidden" id="success-message">
	            			<div class="border-2 border-green-500 rounded-full w-12 h-12 flex justify-center items-center flex-shrink-0"><svg class="fill-current text-green-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg></div>
	            			<div class="ml-6">
	            				<h4 class="text-lg font-bold text-gray-800">Rekomendasi Berhasil Disimpan</h4>
	            				<p class="mt-1 text-gray-600 mb-3">Kontribusi kamu akan kami tinjau terlebih dahulu sebelum kami tambahkan ke konten terkait. Terima kasih sudah berkontribusi!</p>
	            				<a href="@route('contributes', auth()->user()->username)" class="text-indigo-600">Lihat Semua Rekomendasi</a>
	            			</div>
	            		</div>
	            		<div class="flex hidden" id="error-message">
	            			<div class="border-2 border-red-500 rounded-full w-12 h-12 flex justify-center items-center flex-shrink-0"><svg class="fill-current text-red-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg></div>
	            			<div class="ml-6">
	            				<h4 class="text-lg font-bold text-gray-800">Rekomendasi Gagal Disimpan</h4>
	            				<p class="mt-1 text-gray-600 mb-3">Kontribusi kamu gagal disimpan, silahkan periksa koneksi internet kamu dan coba kembali.</p>
	            				<a href="#" id="try-again" class="text-indigo-600">Coba Lagi</a>
	            			</div>
	            		</div>
	            		<div id="form-block">
		            		<h4 class="text-lg font-bold text-gray-600 border-b-2 border-gray-200 pb-4 mb-6">Sarankan Penyuntingan</h4>

		            		<p class="mb-2 text-gray-600">Post Terkait</p>
		            		<a href="@route('post.show', [$post->user->username, $post->slug])" class="flex items-center bg-gray-100 hover:bg-gray-200 hover:border-gray-300 border border-gray-200 mb-8 p-3 rounded">
		            			<div class="bg-cover w-16 h-16 rounded" style="background-image: url('{!! $post->thumbnail !!}');"></div>
		            			<div class="ml-4">
		            				<h4 class="font-semibold text-indigo-600">{{ $post->title }}</h4>
		            				<p class="text-gray-600 mt-1">{{ strip_tags(truncate($post->first_slide_caption, 60)) }}</p>
		            			</div>
		            		</a>

		            		@if($allowed)
			            		<p class="mb-2 text-gray-600">Rekomendasikan link {{ key2str($col) }}</p>
			            		<div class="bg-gray-100 border border-gray-200 rounded p-4">
				            		<p class="mb-3 text-gray-600">Masukkan URL valid dengan <code>http://</code> atau <code>https://</code>.</p>

			            			<div id="links">
			            				<div class="list">
					            		</div>
				            		</div>
				            		<div class="hidden">
				            			<div id="link-item" class="bg-white shadow rounded mb-4 text-blue-500 flex">
				            				<div class="hidden link-id"></div>
				            				<input tabindex="2" type="text" name="{{ $col }}[]" value="" placeholder="Contoh: https://kodinger.com/tutorial-javascript" class="url w-full py-3 px-4 rounded outline-none">
				            				<div class="link-delete uppercase font-semibold bg-red-500 text-white px-4 flex items-center cursor-pointer hover:bg-red-600 rounded-tr rounded-br">Hapus</div>
				            			</div>
				            		</div>
			            			<div id="link-add" tabindex="1" class="bg-white shadow rounded py-3 px-4 text-blue-500 text-center cursor-pointer hover:bg-indigo-600 hover:text-white">Tambah URL</div>
			            		</div>

								@button([
									'class' => 'w-full mt-8 pointer-events-none opacity-75 submit-btn'
								])
									Kirim
								@endbutton
							@endif
						</div>
	            	</div>
	            </form>
            </div>
        </div>
    </div>
@stop

@push('js')
	@if($allowed)
		<script>const post_id = '{{ $post->id }}', col = '{{ $col }}'; </script> 
		<script src="{{ mix('js/contribute.js') }}"></script>
	@endif
@endpush