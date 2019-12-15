let find = function(parent, query)
{
	return parent.querySelector(query);
}

let str2dom = function(str)
{
	let div = document.createElement('div');
	div.innerHTML = str;

	return div.children[0];
}

let removes = function(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.remove(item);
	});

	return str;
}

let adds = function(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.add(item);
	});

	return str;
}

let ic_save = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>',
    ic_unsave = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g></svg>',
    ic_spin = '<svg class="fill-current spin" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

function toggle_icon_save(is_saved, item)
{
	if(find(item, 'svg'))
		find(item, 'svg').remove();

	if(is_saved)
		item.append(str2dom(ic_unsave));
	else
		item.append(str2dom(ic_save));
}

function save(data, done)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
        	if(done)
        		done.call(this, JSON.parse(xhr.responseText));

        	if(xhr.status == 401)
        		alert('Anda perlu login dulu!')
		}
    }
    xhr.open("post", save_url, true);
    xhr.setRequestHeader("X-CSRF-TOKEN", $('[name=csrf-token]').getAttribute('content'));
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send('row_id=' + data.post_id + '&method='+ data.method +'&model=' + data.model);
}

$$('[data-save]').forEach((item) => {
	let post_id = item.dataset.save,
		is_saved = typeof item.dataset.saved == 'string' ? true : false;

	toggle_icon_save(is_saved, item);

	item.addEventListener('click', function(e) {

		item.classList.add('pointer-events-none');

		if(find(item, 'svg'))
			find(item, 'svg').remove();

		item.append(str2dom(ic_spin));

		save({
			post_id,
			method: 'save',
			model: 'Post'
		}, function(res) {
			find(item, 'svg').remove();
			item.classList.remove('pointer-events-none');
	
			is_saved = res.saved; 
			item.dataset.saved = res.saved;

			toggle_icon_save(is_saved, item);
		});

		e.preventDefault();
	});
});

let ic_love = '<svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
	ic_unlove = '<svg class="fill-current text-red-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    ic_spin = '<svg class="w-6 stroke-current spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

function toggle_icon_love(is_loved, item) 
{
	if(is_loved)
		find(item, 'span').append(str2dom(ic_unlove));
	else
		find(item, 'span').append(str2dom(ic_love));
}

$$('[data-love]').forEach((item) => {
	let post_id = item.dataset.love,
		is_loved = typeof item.dataset.loved == 'string' ? true : false;

	toggle_icon_love(is_loved, item);

	item.addEventListener('click', function(e) {

		item.classList.add('pointer-events-none');

		if(find(item, 'span svg'))
			find(item, 'span svg').remove();

		find(item, 'span').append(str2dom(ic_spin));

		save({
			post_id,
			method: 'love',
			model: 'Post'
		}, function(res) {
			find(item, 'span svg').remove();
			item.classList.remove('pointer-events-none');
	
			is_loved = res.saved; 
			item.dataset.loved = res.saved;

			toggle_icon_love(is_loved, item);
		});

		e.preventDefault();
	});
});

let uris = [
	{
		uri: 'https://www.facebook.com/sharer.php?u=',
		icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g></svg>',
		name: 'Facebook',
		class: 'facebook'
	},
	{
		uri: 'https://twitter.com/share?url=',
		icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g></svg>',
		name: 'Twitter',
		class: 'twitter'
	},
	{
		uri: 'https://telegram.me/share/url?url=',
		icon: '<svg class="w-4 fill-current mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>',
		name: 'Telegram',
		class: 'telegram'
	},
	{
		action: 'copy',
		icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g></svg>',
		name: 'Copy Link',
		class: 'text-gray-600 border-2 border-gray-400 hover:bg-gray-200 cursor-pointer',
		rm_class: 'shadow-md mb-3'
	},
], share_btn = '<a href="" class="text-white shadow-md mb-3 py-3 px-4 flex justify-center items-center rounded text-sm"></a>';

for(let i=0; i < uris.length; i++) {
	var key = uris[i], btn = '';
	btn = str2dom(share_btn);

	if(key.class.split(' ').length > 1)	
		adds(btn.classList, key.class);
	else
		btn.classList.add(key.class);

	if(key.rm_class)
		removes(btn.classList, key.rm_class);

	btn.appendChild(str2dom(key.icon))
	btn.appendChild(str2dom('<span>' + key.name + '</span>'));

	$('.share-buttons').appendChild(
		btn
	);
}

var cjs;
$$('.share-button').forEach((item) => {
	let url = item.dataset.url;

	item.addEventListener('click', function(e) {
		$('.share-modal').classList.remove('hidden');

		for(let i=0; i < uris.length; i++) {
			if(uris[i].uri)
				$$('.share-buttons a')[i].setAttribute('href', uris[i].uri + url);

			if(uris[i].action == 'copy') {
				var the_btn = $$('.share-buttons a')[i];
				the_btn.dataset.clipboardText = url;
				the_btn.removeAttribute('href');
				the_btn.classList.add('copy-btn');

				cjs = new ClipboardJS('.copy-btn');

				cjs.on('success', function() {
					find(the_btn, 'span').innerHTML = 'Copied';
					the_btn.classList.add('pointer-events-none');
					setTimeout(function() {
						find(the_btn, 'span').innerHTML = uris[i].name;
						the_btn.classList.remove('pointer-events-none');
					}, 1500);
				})
			}
		}

		$("body").classList.add('overflow-hidden');

		e.preventDefault();
	});
});

$('.share-modal .share-modal-close').addEventListener('click', function() {
	cjs.destroy();
	$('.share-modal').classList.add('hidden');

	$("body").classList.remove('overflow-hidden');
});