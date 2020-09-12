import { post } from './libs/post';

window.posts = post.init('.posts', {
    url: routes.post_timeline,
    params: params => ({
        ...params,
        type,
        sort
    }),
    carousel: false,
    truncate_content: true
});
