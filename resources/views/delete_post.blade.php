@extends('layouts.app', ['title' => 'Konfirmasi Penghapusan'])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6 justify-center">
            <div class="w-6/12 px-6">
            	<div class="p-8 bg-white border-2 border-gray-200 rounded">
            		<div>
	            		<h4 class="text-lg font-bold text-gray-600 border-b-2 border-gray-200 pb-4 mb-6">Konfirmasi</h4>

                        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-2 mb-4" role="alert">
                            <p class="font-bold">Perhatian</p>
                            <p>Post akan dihapus secara permanent dan tidak dapat dikembalikan.</p>
                        </div>

	            		<p class="mb-2 text-gray-600">Post Terkait</p>
                        <a href="" class="flex bg-gray-100 hover:bg-gray-200 hover:border-gray-300 border border-gray-200 mb-8 p-3 rounded">
	            			<div class="bg-cover w-24 rounded flex-shrink-0" style="background-image: url({{$post_card['thumbnail']}});"></div>	
	            			<div class="ml-4 w-full">
	            				<h4 class="font-semibold text-indigo-600">{{ $post_card['title'] }}</h4>
	            				<p class="text-sm text-gray-600 mt-1">{{ $post_card['description'] }}</p>
	            			</div>
	            		</a>

	            		<a onclick="document.querySelector('#delete').submit();" role="button" class="cursor-pointer bg-red-600 block text-center py-3 rounded text-white hover:bg-red-700">
                            Hapus
	            		</a>
	            		<form method="post" action="@route('post.delete', $post->id)" id="delete">
	            			@method('DELETE')
	            			@csrf
	            		</form>

						<div class="text-center">
							<a href="@route('discover')" class="text-gray-600 mt-5 hover:text-indigo-600 inline-block">Kembali</a>
						</div>
					</div>
            	</div>
            </div>
        </div>
    </div>
@stop

@push('js')
	<script src="https://cdnjs.cloudflare.com/ajax/libs/list.js/1.5.0/list.min.js"></script>
@endpush