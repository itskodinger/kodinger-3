import find from '../utils/find';

/**
 * Show login element
 */
function showLoginAlert()
{
	const el = $('.login-alert');

	if(el) {
		el.classList.remove('hidden');

		find(el, '.login-alert-close').addEventListener('click', function(e) {
			el.classList.add('hidden');
			e.preventDefault();
		});
	}
}

export default showLoginAlert;