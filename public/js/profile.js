let posts = Kodinger.API.Post.init('.posts', {
    url: routes.post_both,
    params: params => ({
        ...params,
        username: this_user
    }),
    carousel: false,
    truncate_content: true
});
