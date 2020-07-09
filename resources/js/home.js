import { post } from './libs/post';

window.posts = post.init('.posts', {
    url: routes.post_timeline,
    carousel: false,
    truncate_content: true
});

require('./discover');