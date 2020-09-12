@extends('layouts.app', ['title' => 'Konfirmasi Penghapusan'])

@section('content')
    <div class="container mx-auto">
        <div class="flex py-12 -mx-6 justify-center">
            <div class="w-6/12 px-6">
            	<div class="p-8 bg-white border border-gray-200 rounded">
            		<div>
	            		<h4 class="text-lg font-bold text-gray-600 border-b border-gray-200 pb-4 mb-6">Konfirmasi</h4>

                        <div class="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-2 mb-4" role="alert">
                            <p class="font-bold">Perhatian</p>
                            <p>Post akan dihapus secara permanent dan tidak dapat dikembalikan. <a href="@docs('content')#deleting-content" target="_blank" class="border-b border-red-500 text-red-700" target="_blank">Pelajari selengkapnya</a>.</p>
                        </div>

	            		<p class="mb-2 text-gray-600">Post Terkait</p>
                        <div class="flex bg-gray-100 border border-gray-200 mb-8 p-3 rounded">
	            			<div class="bg-cover w-24 rounded flex-shrink-0" style="background-image: url({{$post->cover ?? $post->first_slide_media ?? $post_card['thumbnail'] ?? ''}});"></div>	
	            			<div class="ml-4 w-full">
	            				<h4 class="font-semibold text-indigo-600">{!! $post->title ?? $post_card['title'] ?? '' !!}</h4>
	            				<p class="text-gray-600 mt-1">Oleh {{ $post->user->name }}</p>
	            			</div>
	            		</div>

	            		<a onclick="document.querySelector('#delete').submit();" role="button" class="cursor-pointer bg-red-600 block text-center py-3 rounded text-white hover:bg-red-700">
                            Hapus Konten Secara Permanen
	            		</a>
	            		<form method="post" action="@route('post.delete', $post->id)" id="delete">
	            			@method('DELETE')
	            			@csrf
	            		</form>

						<div class="text-center">
							<a href="@route('post.show', [$post->user->username, $post->slug])" class="text-gray-600 mt-5 hover:text-indigo-600 inline-block">Batalkan</a>
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