@include('layouts.posts_header')
<div class="posts"></div>

@push('search_js')
	<script>
		const type = 'POST',
			  postType = '{{ request()->type ?? false }}',
			  sort = '{{ request()->sort ?? 'newest' }}',
			  url = routes.post_timeline,
			  discover = false,
			  lazyimage = true,
			  wrap = false;
	</script>
@endpush