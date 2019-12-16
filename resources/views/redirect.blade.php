@extends('layouts.app', ['title' => 'Lanjutkan Link'])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6 justify-center">
            <div class="w-8/12 px-6">
            	<form method="post" id="form">
	            	<div class="p-8 bg-white border-2 border-gray-200 rounded">
	            		<div class="flex hidden" id="error-message">
	            			<div class="border-2 border-red-500 rounded-full w-12 h-12 flex justify-center items-center flex-shrink-0"><svg class="fill-current text-red-500 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg></div>
	            			<div class="ml-6">
	            				<h4 class="text-lg font-bold text-gray-800">Rekomendasi Gagal Disimpan</h4>
	            				<p class="mt-1 text-gray-600 mb-3">Kontribusi kamu gagal disimpan, silahkan periksa koneksi internet kamu dan coba kembali.</p>
	            				<a href="#" id="try-again" class="text-indigo-600">Coba Lagi</a>
	            			</div>
	            		</div>
	            		<div id="form-block">

                            <div class="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-2 mb-4" role="alert">
                                <p class="font-bold">Hati-hati</p>
                                <p>Halaman dibawah ini tidak berafiliasi dengan Kodinger, Dan mungkin mengandung konten yang berbahaya.</p>
                            </div>
		            		<h4 class="text-lg font-bold text-gray-600 border-b-2 border-gray-200 pb-4 mb-6"></h4>

		            		<p class="mb-2 text-gray-600">Halaman Terkait</p>
                            <a href="{{ $redirectData['url'] }}" class="flex items-center bg-gray-100 hover:bg-gray-200 hover:border-gray-300 border border-gray-200 mb-8 p-3 rounded">
		            			<div class="bg-cover w-16 h-16 rounded" style="background-image: url({{ $redirectData['preview']->image }});"></div>	
		            			<div class="ml-4">
		            				<h4 class="font-semibold text-indigo-600">{{ $redirectData['preview']->title }}</h4>
		            				<p class="text-sm text-gray-600 mt-1">{{ truncate($redirectData['preview']->description, 60) }}</p>
		            			</div>
		            		</a>

							@button([
                                'tag' => 'a',
                                'href' => url()->previous(),
                                'class' => 'w-full mt-8  opacity-75 submit-btn bg-red-100',
                            ])
                            Kembali
                            @endbutton

							@button([
                                'tag' => 'a',
                                'href' => $redirectData['url'],
                                'class' => 'w-full mt-8  opacity-75 submit-btn bg-red-100',
                            ])
                            Lanjutkan
							@endbutton
						</div>
	            	</div>
	            </form>
            </div>
        </div>
    </div>
@stop

@push('js')
	<script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
@endpush