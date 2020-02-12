/**
 * Is this video?
 * @param  {String}  str The string to be tested
 * @return {Boolean}     
 */
function isVideo(str)
{
	const videos = [
		'mp4',
		'webm',
		'ogg'
	];

	return videos.includes(str) ? true : false;
}

export default isVideo;