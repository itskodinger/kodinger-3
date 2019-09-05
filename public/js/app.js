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
    ic_unsave = '<svg class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g></svg>';

function toggle_icon(is_saved, item)
{
	if(item.$('svg'))
		item.$('svg').remove();

	if(is_saved)
		item.append(ic_unsave.str2dom());
	else
		item.append(ic_save.str2dom());
}

$$('[data-save]').forEach((item) => {
	let post_id = item.dataset.save,
		is_saved = item.dataset.saved;

	toggle_icon(is_saved, item);

	item.addEventListener('click', function(e) {

		if(is_saved) {
			is_saved = false; 
			item.dataset.saved = false;
		}
		else
		{
			is_saved = true; 
			item.dataset.saved = true;
		}

		toggle_icon(is_saved, item);

		e.preventDefault();
	});
});
