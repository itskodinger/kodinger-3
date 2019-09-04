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