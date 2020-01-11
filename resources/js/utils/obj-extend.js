/**
 * Equvalent to jQuery's $.extends()
 * @param  {Object} out Object you want to extend
 * @return {Object}     Extended object
 */
function objExtend(out) {
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

export default objExtend;