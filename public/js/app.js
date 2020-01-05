// START
console.clear();

let contributors = [
	{
		name: 'Muhamad Nauval Azhar',
		url: 'https://nauv.al',
		contribute: '💻'
	},
	{
		name: 'Rizal Fakhri',
		url: 'https://rizalfakhri.id',
		contribute: '💻'
	},
	{
		name: 'Indah Ratna Sari',
		url: undefined,
		contribute: '📔'
	},
	// you
]

console.log('%cHayo mau ngapain, antum?', 'color: red; font-size: 40px;');
console.log('%cFound a bug? Report an issue: https://github.com/itskodinger/kodinger-3/issues \nContribute: https://github.com/itskodinger/kodinger-3', 'font-size: 16px;line-height: 30px;');
console.group('Contributors');
console.log('%cGive thanks to our dev💙rs:', 'font-size: 16px;');
console.table(contributors);
console.groupEnd();
console.log('%c\n\nWith 💚 by Nauval & All contributors. Makasi!', 'font-size: 14px;');

/**
 * Helpers
 */

// https://codepen.io/gabrieleromanato/pen/LpLVeQ
function toJSONString( form ) {
 var obj = {};
 var elements = form.querySelectorAll( "input, select, textarea" );
 for( var i = 0; i < elements.length; ++i ) {
     var element = elements[i];
     var name = element.name;
     var value = element.value;

     if( name ) {
         obj[ name ] = value;
     }
 }

 return JSON.stringify( obj );
}

/**
 * Wrap element
 * @param {Object} 	wrap  	Parent object
 * @param {Node} 	element Child element
 * @return {Node} 			Wrapped element
 */
function wrapNode(wrap, element)
{
	let wrapping = document.createElement(wrap.tag);
	Object.keys(wrap.attrs).forEach(function(key) {
		wrapping[key] = wrap.attrs[key];
	});

	wrapping.appendChild(element);

	return wrapping;
}

/**
 * Laravel-like Request's fullUrlWithQuery method
 * @param  {Object} newQuery New query
 * @return {String}          Generated URL
 */
function fullUrlWithQuery(newQuery)
{
	// get current URL params
	let params = window.location.search;

	if(params.substr(0, 1) === '?')
		params = params.substr(1, params.length);

	if(params)
		params = JSON.parse('{"' + decodeURI(params.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
	else
		params = {};

	if(newQuery)  {
		// if object given
		if(typeof newQuery === 'object' && Object.prototype.toString.call(newQuery) !== '[object Array]') {
			// then extend with current URL params
			params = objExtend(params, newQuery);
		}else{
			// if array given
			if(Object.prototype.toString.call(newQuery) === '[object Array]') {
				// then delete keys from object
				newQuery.forEach(function(q) {
					delete params[q];
				});
			}else{
				return console.warn('Not valid datatype; value given:', newQuery);
			}
		}
	}

	params = (new URLSearchParams(params).toString());

	return params ? '?' + params : '';
}

// https://stackoverflow.com/questions/5866169/how-to-get-all-selected-values-of-a-multiple-select-box/39363742
function getSelectValues(select) {
 var result = [];
 var options = select && select.options;
 var opt;

 for (var i=0, iLen=options.length; i<iLen; i++) {
     opt = options[i];

     if (opt.selected) {
         result.push(opt.value || opt.text);
     }
 }
 return result;
}


// https://stackoverflow.com/questions/14321862/javascript-get-value-from-multiple-inputs-in-an-array
function getMultipleInputValue(form) {
 var inputs = form.querySelectorAll('input, select, textarea'),
     names  = [].map.call(inputs, function( input ) {
         if(input.value.trim().length > 0) 
             return input.value;
     });

 return names;
}

/**
 * URL string validation
 * @param  {String} value The string to be tested
 * @return {Boolean}
 */
function validateUrl(value) {
 return /^(?:(?:(?:https?):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

/**
 * Is this video?
 * @param  {String}  str The string to be tested
 * @return {Boolean}     
 */
function isVideo(str)
{
	return str.indexOf('.mp4') > -1 ? true : false;
}

/**
 * Equvalent to jQuery's $.extends()
 * @param  {Object} out Object you want to extend
 * @return {Object}     Extended object
 */
let objExtend = function(out) {
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

/**
 * Get hostname from the URL string
 * @param  {String} url Target string
 * @return {String}     The hostname
 */
let getHostname = function(url) {
	let a = document.createElement('a');
	    a.href = url;

	return a.hostname;

}

/**
 * Equivalent to jQuery's $.fn.find()
 * @param  {Node} 	parent 	Parent Node
 * @param  {String} query  	Query string
 * @return {Node}        	DOM Node
 */
let find = function(parent, query)
{
	return parent.querySelector(query);
}

/**
 * Equivalent to jQuery's $.fn.find()
 * @param  {Node} 	parent 	Parent Node
 * @param  {String} query  	Query string
 * @return {Node}        	DOM Node
 */
let finds = function(parent, query)
{
	return parent.querySelectorAll(query);
}

/**
 * Convert DOM Node to HTML string
 * @param  {Node} 	dom DOM object or DOM Node
 * @return {String}     HTML string
 */
let dom2str = function(dom)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	return div.innerHTML;
}

/**
 * Find and remove element (not sure; i forgot)
 * @param  {Node} 	dom   Target element
 * @param  {String} query Query string
 * @return {String}       Removed
 */
let findRemove = function(dom, query)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	find(div, query).remove();

	return div.innerHTML;
}

/**
 * Convert HTML string to DOM node
 * @param  {String} str Raw HTML string
 * @return {Node}     DOM Node
 */
let str2dom = function(str)
{
	let div = document.createElement('div');
	div.innerHTML = str;

	return div.children[0];
}

/**
 * Alternative to the `.remove` method. 
 * You can remove multiple string at once
 * @param  {Object} me  Target
 * @param  {String} str String you want to remove
 * @return {String}     
 */
let removes = function(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.remove(item);
	});

	return str;
}

/**
 * Alternative to the `.add` method. 
 * You can add multiple string at once
 * @param  {Object} me  Target
 * @param  {String} str String you want to add
 * @return {String}     
 */
let adds = function(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.add(item);
	});

	return str;
}

/**
 * Show login element
 */
let showLoginAlert = function()
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

/**
 * Sidebar toggle (mobile only)
 */
$$('.side-toggle').forEach(function(item) {
	const original_html = item.innerHTML;
	item.addEventListener('click', function(e) {
		const target = this.dataset.target,
			  overlay = $('.nav-bottom-overlay');

		$(target).classList.toggle('off-canvasify--show');

		overlay.classList.toggle('hidden');

		item.classList.toggle('text-red-600');

		if($(target).className.indexOf('off-canvasify--show') > -1)
			item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 inline-block fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>';
		else
			item.innerHTML = original_html;

		if(target.indexOf('sidebar') > -1) {
			overlay.style.left = item.clientWidth + 'px';
			overlay.style.right = 0;
		}

		if(target.indexOf('rightbar') > -1) {
			overlay.style.left = 0;
			overlay.style.right = item.clientWidth + 'px';
		}

		e.preventDefault();
	});
});

$('body').addEventListener('click', function(e) {
	// close dropdown
	if(e.target && !e.target.classList.contains('user-dropdown') && $('.user-dropdown-menu')) {
		$('.user-dropdown-menu').classList.add('hidden');
		$('body').classList.remove('overflow-hidden');
	}
});

// Initialize Kodinger API (creating empty object without "hassle")
const Kodinger = Object.create(null);
Kodinger.API = Object.create(null);