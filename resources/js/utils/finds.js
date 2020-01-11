/**
 * Equivalent to jQuery's $.fn.find()
 * @param  {Node} 	parent 	Parent Node
 * @param  {String} query  	Query string
 * @return {Node}        	DOM Node
 */
function finds(parent, query)
{
	return parent.querySelectorAll(query);
}

export default finds;