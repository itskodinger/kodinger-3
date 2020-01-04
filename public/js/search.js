if(typeof lazyimage == 'undefined') {
	lazyimage = true;
}

if(typeof wrap == 'undefined') {
	wrap = undefined;
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
    }),
    wrap
});

let tagSearch = function() {
	$('.tag-search').classList.toggle('hidden');
}

let tagSearchButton = function() {
	$('.tags a[href^="#search"]').classList.toggle('hidden');
}

let tagSearchCollection = function(search) {
	if($('.tag-search-collection'))
		return;

	let this_height = search.clientHeight,
		tpl = `
		<div class="absolute z-10 text-sm left-0 w-full bg-white tag-search-collection shadow-lg rounded" style="top: ${this_height + 10}px;">
			<div class="px-4 py-2">Ketik min. 3 huruf</div>
		</div>`;

	tpl = str2dom(tpl);

	search.appendChild(tpl);
}

let addTagToCollection = function(collection) {
	const target = $('.tag-search-collection');

	let tagFunction = function(e) {
		let tag = this.dataset.name;

		window.location.href = routes.search + fullUrlWithQuery({tag})
	}

	// reset
	$$('.tag-search-item').forEach(function(tag) {
		tag.removeEventListener('click', tagFunction);
	});

	target.innerHTML = '';

	if(collection.length < 1) {
		collection = [];
		collection.push({
			value: 'Tidak ditemukan',
			id: -1
		})
	}

	collection.forEach(function(item) {
		target.appendChild(
			str2dom(`
				<div class="px-4 py-2 border-b border-gray-100 ${item.id !== -1 ? 'tag-search-item' : ''}" data-name="${item.value}">
					${item.id !== -1 ? '#' + item.value : item.value}
				</div>
			`)
		);
	});

	if(collection.length > 0) {	
		$$('.tag-search-item').forEach(function(tag) {
			tag.addEventListener('click', tagFunction);
		});
	}
}

let tagSearchCollectionMove = function(key) {
	const collection = $('.tag-search-collection'),
		  first_item = find(collection, '.tag-search-item'),
		  selected_classes = 'tag-selected bg-gray-200';

	if(collection && finds(collection, '.tag-search-item').length < 1)
		return;

	if(!find(collection, '.tag-selected')) {
		return adds(find(collection, '.tag-search-item').classList, selected_classes);
	}

	let selected = find(collection, '.tag-selected');
	removes(selected.classList, selected_classes);
	if(key == 'up') {
		let previous = selected.previousElementSibling;
		if(previous)
			adds(previous.classList, selected_classes);
		else
			adds(collection.lastChild.classList, selected_classes);
	}else if(key == 'down') {
		let next = selected.nextElementSibling;
		if(next)
			adds(next.classList, selected_classes);
		else
			adds(collection.firstChild.classList, selected_classes);
	}
}

$('.tags a[href^="#search"]').addEventListener('click', function(e) {
	let self = this;

	tagSearchButton();
	tagSearch();

	const search_input = $('.tag-search input');

	search_input.focus();

	tagSearchCollection($('.tag-search'));

	e.preventDefault();
});

let controller;
$('.tag-search input').addEventListener('keydown', function(e) {
	if(e.code == 'ArrowDown') {
		tagSearchCollectionMove('down');
		return e.preventDefault();
	}

	if(e.code == 'ArrowUp') {
		tagSearchCollectionMove('up');
		return e.preventDefault();
	}

	if(e.code == 'Enter') {
		if($('.tag-selected'))
			$('.tag-selected').click();
		return e.preventDefault();
	}
});
$('.tag-search input').addEventListener('keyup', function(e) {
	let self = this,
		value = self.value;

	if(e.code == 'ArrowUp' || e.code == 'ArrowDown')
		return;

	if(value.trim().length <= 2)
		return;

	controller && controller.abort();
	controller = new AbortController();

	fetch(routes.post_tags + '?value=' + value, {signal:controller.signal})
	.then(res => res.json())
	.then(function(data){
		addTagToCollection(data.slice(0, 5));
	});
});

$('.tag-search input').addEventListener('blur', function(e) {
	setTimeout(function() {
		tagSearchButton();
		tagSearch();
		tagSearchCollection(false);
	}, 500);
});