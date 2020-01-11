import validateUrl from './utils/validate-url';
import getMultipleInputValue from './utils/get-multiple-input-value';
import List from 'list.js';

/**
 * Generate random string
 */
let ID = function () {
  return Math.random().toString(36).substr(2, 9);
}

/**
 * Init options
 * @type {Object}
 */
let options = {
	item: 'link-item',
	valueNames: [
		'url',
		{ name: 'link-id', attr: 'data-id' }
	]
};

/**
 * Init List values
 * @type {Array}
 */
let values = [];

/**
 * Init List.js
 * @type {List}
 */
let links = new List('links', options, values);

/**
 * URLs that invalid
 * @return {[type]} [description]
 */
let getInvalid = function() {
	let invalid = [];

	document.querySelectorAll('#links .list .url').forEach(function(input) {
		if(input.value.trim().length < 1 || validateUrl(input.value) == false) {
			invalid.push(input);
		}
	});

	return invalid;
}

/**
 * Disable button functionality
 */
let disableButtonCheck = function() {
	let invalid = getInvalid();

	let submit_btn = document.querySelector('.submit-btn');
	if(invalid.length < 1 && document.querySelector('#links .list').children.length > 0) {
		submit_btn.classList.remove('pointer-events-none');
		submit_btn.classList.remove('opacity-75');
	}else{
		submit_btn.classList.add('pointer-events-none');
		submit_btn.classList.add('opacity-75');				
	}
}

/**
 * Required check
 * @param  {Node} field Target input
 */
let required = function(field) {
	field.focus();
	if(field.value.length == 0) 
		field.setAttribute('placeholder', 'Harap isi kolom ini dulu (Contoh: https://kodinger.com/tutorial-javascript)');
	else if(validateUrl(field.value) == false)
		field.setAttribute('placeholder', 'URL tidak valid. Mungkin berisi spasi atau karakter spesial');
}

/**
 * Add a new link
 */
let linkAdd = function() {
	let last = document.querySelector('#links .list');

	if(last.children.length > 0) {
		last = last.lastChild.querySelector('.url')
	}else{
		last = false;
	}

	let invalid = getInvalid();

	if(last && (last.value.trim().length == 0 || validateUrl(last.value) == false)) {
		required(last);
	}else if(invalid.length > 0) {
		required(invalid[0]);
	}else{
		links.add({
			'link-id': ID()
		});

		disableButtonCheck();

		document.querySelector('#links .list').lastChild.querySelector('.url').focus();
	}
}

document.getElementById('link-add').addEventListener('click', function(e) {
	linkAdd();

	e.preventDefault();
});

document.querySelector('#links').addEventListener('click', function(e) {
	if(e.target && e.target.classList.contains('link-delete')) {
		e.preventDefault();

		let id = e.target.parentNode.querySelector('.link-id').dataset.id;

		links.remove('link-id', id);

		disableButtonCheck();
	}
});

document.querySelector('#links').addEventListener('keydown', function(e) {
	if(e.target && e.target.classList.contains('url')) {
		let nodes = Array.prototype.slice.call(document.querySelector('#links .list').children),
			current = nodes.indexOf(e.target.parentNode);

		if(current == document.querySelector('#links .list').children.length - 1) {
			if(e.keyCode == 9) {
				e.preventDefault();
				
				linkAdd();
			}
		}
	}
});

document.querySelector('#links').addEventListener('keyup', function(e) {
	if(e.target && e.target.classList.contains('url')) {
		disableButtonCheck();
	}
});

document.getElementById('form').addEventListener('submit', function(e) {
	e.preventDefault();

	let submit_btn = document.querySelector('.submit-btn'),
		form = this,
		form_data = new FormData(this);

	submit_btn.classList.add('pointer-events-none');
	submit_btn.classList.add('opacity-75');

	var xhr = new XMLHttpRequest();
	xhr.open("POST", routes.contribute_store.replace(/post_id/g, post_id).replace(/col/g, col));
    xhr.setRequestHeader("X-CSRF-TOKEN", $('[name=csrf-token]').getAttribute('content'));
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("links=" + JSON.stringify(getMultipleInputValue(this)));
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			submit_btn.classList.remove('pointer-events-none');
			submit_btn.classList.remove('opacity-75');

			if(xhr.status == 200) {
				document.querySelector('#success-message').classList.remove('hidden');
				document.querySelector('#form-block').classList.add('hidden');
			}else{
				document.querySelector('#error-message').classList.remove('hidden');
				document.querySelector('#form-block').classList.add('hidden');
			}
		}
	}
});

document.querySelector('#try-again').addEventListener('click', function(e) {
	e.preventDefault();

	document.querySelector('#error-message').classList.add('hidden');
	document.querySelector('#form-block').classList.remove('hidden');
});
