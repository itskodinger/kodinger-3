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