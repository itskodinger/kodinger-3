import { post, types } from './libs/post';

let users = post.init('.users', {
    url: routes.users,
    carousel: false,
    truncate_content: true,
    type: types.USER,
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
