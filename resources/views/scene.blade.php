@extends('layouts.app', ['title' => 'Figma Untuk Pemula'])

@section('content')
	<div class="container mx-auto py-12">
		<div class="flex -mx-4">
			<div class="w-8/12 px-4">
				<div class="rounded-lg border border-gray-200 overflow-hidden">
					<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="LKFHsATT8mA"></div>
				</div>

				<div class="border border-gray-200 rounded mt-8">
					<div class="flex items-center px-6 pt-6">
						<h2 class="text-lg font-semibold text-indigo-600 items-center flex">
							<svg class="w-5 mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg>
							Deskripsi
						</h2>

						<button class="ml-auto flex items-center hover:bg-indigo-500 hover:text-white border-indigo-600 border px-4 py-2 rounded text-indigo-600">
							<svg class="mr-2 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
							Tandai Sudah Selesai
						</button>
					</div>

					<div class="p-6 markdowned">
						<p>Video seri tutorial Figma untuk pemula akan mengenalkan kamu software desain Figma, langkah awal untuk mencoba memulai menjadi seorang UI desainer. Tentu, Figma bukan merupakan satu-satunya software untuk mendesain UI atau jenis desain lainnya. Setiap video memiliki masing-masing goal untuk menjelaskan fitur-fitur yang ada pada Figma. Goal dari video seri ini adalah untuk memberi kamu pemahaman dasar cara menggunakan Figma.</p>

						<p>Homepage: https://figma.com
												Download: https://figma.com/downloads
												Dokumentasi Figma: https://help.figma.com</p>

						<p>Nama Pemateri: Muhamad Nauval Azhar
												Facebook: https://facebook.com/int11
												GitHub: https://github.com/nauvalazhar</p>

						<p>Untuk menambah wawasan kamu seputar Web Development, kamu dapat mengikuti akun Kodinger:
												Instagram: https://instagram.com/itskodinger
												Facebook: https://www.facebook.com/itskodinger</p>
					</div>
				</div>

				<div class="border border-gray-200 rounded mt-8">
					<div class="flex items-center px-6 pt-6">
						<h2 class="text-lg font-semibold text-indigo-600 items-center flex">
							<svg class="w-5 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
							Diskusi
						</h2>
					</div>

					<div class="p-6">
						@include('layouts.card_comment')
					</div>
				</div>
			</div>
			<div class="w-4/12 px-4">
				<div class="border border-gray-200 rounded p-6">
					<h1 class="text-xl font-bold">Figma Untuk Pemula</h1>
					<div class="mt-2 flex -mx-2">
						<div class="text-gray-600 mx-2 flex items-center">
							<svg class="mr-1" width="13" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
							03:13
						</div>
						<div class="text-gray-600 mx-2 flex items-center">
							<svg class="mr-1" width="13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
							2 Menit Yang Lalu
						</div>
					</div>

					<div class="flex mt-6 bg-gray-100 rounded p-4 border border-gray-200">
						<img class="w-10 h-10 rounded-full flex-shrink-0" src="{{ auth()->user()->the_avatar }}">
						<div class="ml-4 flex-shrink-0">
							<div class="font-bold">{{ auth()->user()->name }}</div>
							<div class="font-light text-gray-600 text-sm">{{ auth()->user()->username }}</div>
						</div>
					</div>

					<div class="flex flex-wrap mt-4">
						<a class="mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3 text-sm" href="${routes.search + fullUrlWithQuery({tag: tag.tag.name})}">
							#javascript
						</a>
						<a class="mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3 text-sm" href="${routes.search + fullUrlWithQuery({tag: tag.tag.name})}">
							#html
						</a>
						<a class="mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3 text-sm" href="${routes.search + fullUrlWithQuery({tag: tag.tag.name})}">
							#css
						</a>
					</div>
				</div>

				<div class="border border-gray-200 rounded mt-6">
					<h2 class="text-lg font-semibold text-indigo-600 px-6 py-6">Daftar Isi</h2>

					<div class="flex flex-col">
						<a href="#" class="flex border-b border-gray-200 px-6 py-4 hover:bg-gray-100 cursor-pointer">
							<div class="text-lg flex-shrink-0 text-white w-8 h-8 rounded flex justify-center items-center bg-indigo-600 mr-4">1</div>
							<div class="overflow-hidden">
								<h4 class="truncate font-semibold">Memulai Berkenalan Dengan Figma asdjalksdjlkasjd aslkjdlask </h4>
								<div class="text-sm mt-1 text-gray-600 flex items-center">
									<svg class="mr-1" width="13" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
									02:29
								</div>
							</div>
						</a>
						<a href="#" class="flex border-b border-gray-200 px-6 py-4 hover:bg-gray-100 cursor-pointer">
							<div class="text-lg flex-shrink-0 border border-gray-200 w-8 h-8 rounded flex justify-center items-center bg-gray-100 mr-4">2</div>
							<div class="overflow-hidden">
								<h4 class="truncate font-semibold">Memulai Berkenalan Dengan Figma asdjalksdjlkasjd aslkjdlask </h4>
								<div class="text-sm mt-1 text-gray-600 flex items-center">
									<svg class="mr-1" width="13" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
									02:29
								</div>
							</div>
						</a>
						<a href="#" class="flex border-b border-gray-200 px-6 py-4 hover:bg-gray-100 cursor-pointer">
							<div class="text-lg flex-shrink-0 border border-gray-200 w-8 h-8 rounded flex justify-center items-center bg-gray-100 mr-4">3</div>
							<div class="overflow-hidden">
								<h4 class="truncate font-semibold">Memulai Berkenalan Dengan Figma asdjalksdjlkasjd aslkjdlask </h4>
								<div class="text-sm mt-1 text-gray-600 flex items-center">
									<svg class="mr-1" width="13" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
									02:29
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="border border-gray-200 rounded mt-6">
					<h2 class="text-lg font-semibold text-indigo-600 px-6 py-6">Rekomendasi</h2>

					<div class="flex flex-col">
						@foreach([1,2,4,5] as $item)
						<a href="#" class="flex border-b border-gray-200 px-6 py-4 hover:bg-gray-100 cursor-pointer">
							<img class="w-20 rounded mr-4" src="https://i.ytimg.com/vi/LKFHsATT8mA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD9AM3ezFPnL4HQ4x_8KuOXgyppmA">
							<div class="overflow-hidden">
								<h4 class="truncate font-semibold">Memulai Berkenalan Dengan Figma asdjalksdjlkasjd aslkjdlask </h4>
								<div class="text-sm mt-1 text-gray-600 flex items-center">
									<svg class="mr-1" width="13" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
									02:29
								</div>
							</div>
						</a>
						@endforeach
					</div>
				</div>
			</div>
		</div>
	</div>
@stop

@push('js')
	<script src="{!! mix('js/scene.js') !!}"></script>
@endpush