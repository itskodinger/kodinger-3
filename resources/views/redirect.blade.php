@extends('layouts.app', ['title' => 'Lanjutkan Link'])

@section('content')
    <div class="container px-6 mx-auto">
        <div class="flex justify-center py-12 -mx-6">
            <div class="w-full px-6 lg:w-6/12">
            	<form method="post" id="form">
	            	<div class="p-8 bg-white border border-gray-200 rounded">
	            		<div>
		            		<h4 class="pb-4 mb-6 text-lg font-bold text-gray-600 border-b border-gray-200">Mengalihkan</h4>

                            <div class="px-4 py-2 mb-4 text-blue-700 bg-blue-100 border-l-4 border-blue-500" role="alert">
                                <p class="font-bold">Perhatian</p>
                                <p>Halaman di bawah ini tidak berafiliasi dengan Kodinger, dan mungkin mengandung konten yang berbahaya.</p>
                            </div>

		            		<p class="mb-2 text-gray-600">Halaman Terkait</p>
                            <div class="flex flex-wrap items-center p-3 mb-8 bg-gray-100 border border-gray-200 rounded lg:flex-nowrap">
		            			<div class="flex-shrink-0 w-full h-32 bg-center bg-cover rounded lg:h-16 lg:w-16" style="background-image: url({{ isset($redirectData['preview']) ? $redirectData['preview']->image : '' }});"></div>
		            			<div class="mt-2 lg:ml-4 lg:mt-0">
		            				<h4 class="font-semibold text-indigo-600">{{ isset($redirectData['preview']) ? $redirectData['preview']->title : truncate($redirectData['url'], 50) }}</h4>
		            				<p class="mt-1 text-gray-600">{{ isset($redirectData['preview']) ? truncate($redirectData['preview']->description, 60) : '' }}</p>

		            			</div>
		            		</div>

							@button([
                                'tag' => 'a',
                                'href' => $redirectData['url'],
                                'class' => 'block text-center bg-red-100 mt-6',
                            ])
                            Lanjutkan
							@endbutton

							<div class="text-center">
								<a href="{{ url()->previous() }}" class="inline-block mt-5 text-gray-600 hover:text-indigo-600">Kembali</a>
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
