/**
 * Convert HTML string to DOM node
 * @param  {String} str Raw HTML string
 * @return {Node}     DOM Node
 */
function str2dom(str)
{
	let div = document.createElement('div');
	div.innerHTML = str;

	return div.children[0];
}

export default str2dom;