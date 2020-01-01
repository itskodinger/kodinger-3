if(typeof lazyimage == 'undefined') {
	lazyimage = true;
}

let posts = Kodinger.API.Post.init('.posts', {
    url: url,
    carousel: false,
    truncate_content: true,
    type,
    lazyimage,
    params: params => ({
		...params,
		search,
		tag
    })
});
