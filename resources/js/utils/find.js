/**
 * Equivalent to jQuery's $.fn.find()
 * @param  {Node} 	parent 	Parent Node
 * @param  {String} query  	Query string
 * @return {Node}        	DOM Node
 */
function find(parent, query)
{
	return parent.querySelector(query);
}

export default find;