let communities = Kodinger.API.Post.init('.communities', {
    url: routes.communities,
    carousel: false,
    truncate_content: true,
    type: Kodinger.API.Post.TYPE.COMMUNITY,
    shimmer: 4,
    wrap: {
    	tag: 'div',
    	attrs: {
    		className: 'sm:px-4 px-0 lg:w-3/12 md:w-6/12 mb-6 w-full'
    	}
    }
});
