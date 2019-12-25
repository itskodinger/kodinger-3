/**
 * Helpers
 */

function isVideo(str)
{
	return str.indexOf('.mp4') > -1 ? true : false;
}

let objExtend = function(out) {
	out = out || {};

	for (var i = 1; i < arguments.length; i++) {
		if (!arguments[i])
			continue;

		for (var key in arguments[i]) {
			if (arguments[i].hasOwnProperty(key))
			 out[key] = arguments[i][key];
		}
	}

	return out;
};

let getHostname = function(url) {
	let a = document.createElement('a');
	    a.href = url;

	return a.hostname;

}

let find = function(parent, query)
{
	return parent.querySelector(query);
}

let finds = function(parent, query)
{
	return parent.querySelectorAll(query);
}

let dom2str = function(dom)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	return div.innerHTML;
}

let findRemove = function(dom, query)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	find(div, query).remove();

	return div.innerHTML;
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

$$('.side-toggle').forEach(function(item) {
	const original_html = item.innerHTML;
	item.addEventListener('click', function(e) {
		const target = this.dataset.target,
			  overlay = $('.nav-bottom-overlay');

		$(target).classList.toggle('off-canvasify--show');

		overlay.classList.toggle('hidden');

		if($(target).className.indexOf('off-canvasify--show') > -1)
			item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';
		else
			item.innerHTML = original_html;

		if(target.indexOf('sidebar') > -1) {
			overlay.style.left = item.clientWidth + 'px';
			overlay.style.right = 0;
		}

		if(target.indexOf('rightbar') > -1) {
			overlay.style.left = 0;
			overlay.style.right = item.clientWidth + 'px';
		}

		e.preventDefault();
	});
});

// Initialize Kodinger API
const Kodinger = Object.create(null);
Kodinger.API = Object.create(null);