let posts = Kodinger.API.Post.init('.posts', {
    url: routes.profile_saves,
    params: params => ({
        ...params,
        ajax: '1'
    }),
    truncate_content: true
});
