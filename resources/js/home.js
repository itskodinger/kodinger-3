import { post } from './libs/post';

let posts = post.init('.posts', {
    url: routes.post,
    carousel: false,
    truncate_content: true
});
