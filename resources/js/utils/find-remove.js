/**
 * Find and remove element (not sure; i forgot)
 * @param  {Node} 	dom   Target element
 * @param  {String} query Query string
 * @return {String}       Removed
 */
function findRemove(dom, query)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	find(div, query).remove();

	return div.innerHTML;
}

export default findRemove;