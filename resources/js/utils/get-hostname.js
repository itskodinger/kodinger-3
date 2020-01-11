/**
 * Get hostname from the URL string
 * @param  {String} url Target string
 * @return {String}     The hostname
 */
function getHostname(url) {
	let a = document.createElement('a');
	    a.href = url;

	return a.hostname;

}

export default getHostname;