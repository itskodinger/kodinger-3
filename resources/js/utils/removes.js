
/**
 * Alternative to the `.remove` method. 
 * You can remove multiple string at once
 * @param  {Object} me  Target
 * @param  {String} str String you want to remove
 * @return {String}     
 */
function removes(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.remove(item);
	});

	return str;
}

export default removes;