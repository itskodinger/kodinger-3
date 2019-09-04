const $ = document.querySelector.bind(document),
	  $$ = document.querySelectorAll.bind(document);

String.prototype.str2dom = function()
{
	let p = document.createElement('p');
	p.innerHTML = this;

	return p.firstChild;
}