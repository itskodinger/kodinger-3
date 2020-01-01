let posts = Kodinger.API.Post.init('.posts', {
    url: routes.post,
    carousel: false,
    truncate_content: true,
    params: params => ({
		...params,
		search,
		tag
    })
});
