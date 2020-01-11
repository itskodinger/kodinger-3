import { post } from './libs/post';

let posts = post.init('.posts', {
    url: routes.profile_loves.replace(/slug/g, slug),
    params: params => ({
        ...params,
        ajax: '1'
    }),
    truncate_content: true
});
