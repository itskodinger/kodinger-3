const $ = document.querySelector.bind(document),
	  $$ = document.querySelectorAll.bind(document);

Object.prototype.$ = function(query)
{
	return this.querySelector(query);
}

String.prototype.str2dom = function()
{
	let div = document.createElement('div');
	div.innerHTML = this;

	return div.children[0];
}

Object.prototype.removes = function(str)
{
	let me = this;
	str = str.split(' ');

	str.forEach((item) => {
		me.remove(item);
	});
}

Object.prototype.adds = function(str)
{
	let me = this;
	console.log(this)
	str = str.split(' ');

	str.forEach((item) => {
		me.add(item);
	});
}

let ic_save = '<svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>',
    ic_unsave = '<svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g></svg>',
    ic_spin = '<svg class="w-8 spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

function toggle_icon(is_saved, item)
{
	if(item.$('svg'))
		item.$('svg').remove();

	if(is_saved)
		item.append(ic_unsave.str2dom());
	else
		item.append(ic_save.str2dom());
}

function save(data, done)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
        	if(done)
        		done.call(this, JSON.parse(xhr.responseText));
		}
    }
    xhr.open("post", save_url, true);
    xhr.setRequestHeader("X-CSRF-TOKEN", $('[name=csrf-token]').getAttribute('content'));
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send('row_id=' + data.post_id + '&method=save&model=Post');
}

$$('[data-save]').forEach((item) => {
	let post_id = item.dataset.save,
		is_saved = typeof item.dataset.saved == 'string' ? true : false;

	toggle_icon(is_saved, item);

	item.addEventListener('click', function(e) {

		item.classList.add('pointer-events-none');

		if(item.$('svg'))
			item.$('svg').remove();

		item.append(ic_spin.str2dom());

		save({
			post_id
		}, function(res) {
			item.$('svg').remove();
			item.classList.remove('pointer-events-none');
	
			is_saved = res.saved; 
			item.dataset.saved = res.saved;

			toggle_icon(is_saved, item);
		});


		e.preventDefault();
	});
});
