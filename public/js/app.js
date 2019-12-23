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

// Initialize Kodinger API
const Kodinger = Object.create(null);
Kodinger.API = Object.create(null);