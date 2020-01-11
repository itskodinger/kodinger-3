/**
 * Is this video?
 * @param  {String}  str The string to be tested
 * @return {Boolean}     
 */
function isVideo(str)
{
	return str.indexOf('.mp4') > -1 ? true : false;
}

export default isVideo;