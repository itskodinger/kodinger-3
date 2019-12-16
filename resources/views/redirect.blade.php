@extends('layouts.app', ['title' => 'Lanjutkan Link'])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6 justify-center">
            <div class="w-6/12 px-6">
            	<form method="post" id="form">
	            	<div class="p-8 bg-white border-2 border-gray-200 rounded">
	            		<div>
		            		<h4 class="text-lg font-bold text-gray-600 border-b-2 border-gray-200 pb-4 mb-6">Mengalihkan</h4>

                            <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 px-4 py-2 mb-4" role="alert">
                                <p class="font-bold">Perhatian</p>
                                <p>Halaman di bawah ini tidak berafiliasi dengan Kodinger, dan mungkin mengandung konten yang berbahaya.</p>
                            </div>

                            <a href="{{ $redirectData['url'] }}" class="flex flex-col bg-gray-100 hover:bg-gray-200 hover:border-gray-300 border border-gray-200 p-3 rounded">
		            			<div class="bg-cover w-full h-64 rounded" style="background-image: url({{ $redirectData['preview']->image }});"></div>	
		            			<div class="mt-4">
		            				<h4 class="font-semibold text-indigo-600">{{ $redirectData['preview']->title }}</h4>
		            				<p class="text-sm text-gray-600 mt-1">{{ $redirectData['preview']->description }}</p>
		            			</div>
		            		</a>

							@button([
                                'tag' => 'a',
                                'href' => $redirectData['url'],
                                'class' => 'block text-center bg-red-100 mt-6',
                            ])
                            Lanjutkan
							@endbutton

							<div class="text-center">
								<a href="{{ url()->previous() }}" class="text-gray-600 mt-5 hover:text-indigo-600 inline-block">Kembali</a>
							</div>
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