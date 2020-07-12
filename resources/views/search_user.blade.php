@include('layouts.posts_header')
<div class="posts"></div>

@push('search_js')
	<script>
		const type = 'USER',
			  postType = '',
			  sort = false,
			  url = routes.users,
			  lazyimage = false,
			  discover = false,
			  wrap = {
			  	tag: 'div',
			  	attrs: {
			  		className: 'mb-6'
			  	}
			  };
	</script>
@endpush