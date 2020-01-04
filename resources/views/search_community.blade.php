<div class="posts"></div>

@push('search_js')
	<script>
		const type = Kodinger.API.Post.TYPE.COMMUNITY,
			  url = routes.communities,
			  lazyimage = false,
			  wrap = {
			  	tag: 'div',
			  	attrs: {
			  		className: 'mb-6'
			  	}
			  };
	</script>
@endpush