/**
 * Wrap element
 * @param {Object} 	wrap  	Parent object
 * @param {Node} 	element Child element
 * @return {Node} 			Wrapped element
 */
function wrapNode(wrap, element)
{
	let wrapping = document.createElement(wrap.tag);
	Object.keys(wrap.attrs).forEach(function(key) {
		wrapping[key] = wrap.attrs[key];
	});

	wrapping.appendChild(element);

	return wrapping;
}

export default wrapNode;