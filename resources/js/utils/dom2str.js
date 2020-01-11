/**
 * Convert DOM Node to HTML string
 * @param  {Node} 	dom DOM object or DOM Node
 * @return {String}     HTML string
 */
function dom2str(dom)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	return div.innerHTML;
}

export default dom2str;