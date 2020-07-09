@extends('layouts.dashboard', ['title' => 'Dashboard'])

@inject('user', 'Services\UserService')
@inject('contribute', 'Services\ContributeService')
@inject('post', 'Services\PostService')
@inject('comment', 'Services\CommentService')

@section('dash_content')
	<div class="flex -mx-4 lg:flex-row flex-col">
		<div class="w-full lg:w-4/12 mx-4 mb-10 lg:mb-0">
			<div class="py-4 px-6 rounded shadow border-l-4 border-indigo-600">
				<div class="text-4xl">{{ $user->total() }}</div>
				<div class="text-gray-500 uppercase tracking-wider font-semibold">Total User</div>
			</div>
		</div>
		<div class="w-full lg:w-4/12 mx-4 mb-10 lg:mb-0">
			<div class="py-4 px-6 rounded shadow border-l-4 border-teal-600">
				<div class="text-4xl">{{ $contribute->total() }}</div>
				<div class="text-gray-500 uppercase tracking-wider font-semibold">Total Contribute</div>
			</div>
		</div>
		<div class="w-full lg:w-4/12 mx-4 mb-10 lg:mb-0">
			<div class="py-4 px-6 rounded shadow border-l-4 border-blue-600">
				<div class="text-4xl">{{ $post->total() }}</div>
				<div class="text-gray-500 uppercase tracking-wider font-semibold">Total Post</div>
			</div>
		</div>
	</div>

	<div class="flex -mx-4 mt-10 lg:flex-row flex-col">
		<div class="w-full lg:w-6/12 mx-4">
			<div class="mb-2 text-gray-600 text-lg flex items-center flex">
				<h2>Kontribusi Terbaru</h2>
				<div class="ml-auto"><a class="text-indigo-600 text-base" href="@route('contribute.index')">Lihat Semua &rsaquo;</a></div>
			</div>
            @forelse($contribute->latest(2) as $contribute)
                @include('layouts.card_contribute', ['contribute' => $contribute])
            @empty
                Tidak ada kontribusi
            @endforelse
		</div>
		<div class="w-full lg:w-6/12 mx-4">
			<div class="mb-2 text-gray-600 text-lg flex items-center flex">
				<h2>Diskusi Terbaru</h2>
				<div class="ml-auto"><a class="text-indigo-600 text-base" href="@route('comment.index')">Lihat Semua &rsaquo;</a></div>
			</div>

			@forelse($comment->latest(5) as $comment)
		        @include('layouts.card_comment_item', ['comment' => $comment])
			@empty
				Tidak ada diskusi
			@endforelse
		</div>
	</div>
@stop