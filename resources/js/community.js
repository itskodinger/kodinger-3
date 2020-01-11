import { post, types } from './libs/post';

let communities = post.init('.communities', {
    url: routes.communities,
    carousel: false,
    truncate_content: true,
    type: types.COMMUNITY,
    shimmer: 4,
    wrap: {
    	tag: 'div',
    	attrs: {
    		className: 'sm:px-4 px-0 lg:w-3/12 md:w-6/12 mb-8 w-full'
    	}
    },
    shimmerWrap: {
    	tag: 'div',
    	attrs: {
    		className: 'sm:px-4 px-0 lg:w-3/12 md:w-6/12 mb-8 w-full'
    	}
    }
});
