/**
 * Alternative to the `.add` method. 
 * You can add multiple string at once
 * @param  {Object} me  Target
 * @param  {String} str String you want to add
 * @return {String}     
 */
function adds(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.add(item);
	});

	return str;
}

export default adds;