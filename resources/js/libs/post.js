import wrapNode from '../utils/wrap-node';
import str2dom from '../utils/str2dom';
import objExtend from '../utils/obj-extend';
import isVideo from '../utils/is-video';
import adds from '../utils/adds';
import removes from '../utils/removes';
import fullUrlWithQuery from '../utils/full-url-with-query';
import finds from '../utils/finds';
import find from '../utils/find';
import getHostname from '../utils/get-hostname';
import showLoginAlert from '../comps/show-login-alert';
import Clipboard from 'clipboard';

/**
 * Post API with IIFE
 *
 * Flow: init -> run -> fetching -> templating (& attach event) -> append -> rendered
 */

/**
 * Post types constant
 * @type {Object}
 */
const types = {
	COMMUNITY: {
		template: 'community',
		shimmer: 'community'
	},
	USER: {
		template: 'user',
		shimmer: 'user'
	},
	POST: {
		template: 'post',
		shimmer: 'post',
	},
	MARKDOWN: {
		template: 'markdown',
		shimmer: 'post',
	},
	DISCOVER: {
		template: 'post',
		shimmer: 'discover',
	},
}

/**
 * Private API
 * @type {Object}
 */
let api = {
	vars: {
		/**
		 * Share URIs
		 * @type {Array}
		 */
		uris: [
			{
				uri: 'https://www.facebook.com/sharer.php?u=',
				icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g></svg>',
				name: 'Facebook',
				class: 'bg-facebook'
			},
			{
				uri: 'https://twitter.com/share?url=',
				icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g></svg>',
				name: 'Twitter',
				class: 'bg-twitter'
			},
			{
				uri: 'https://telegram.me/share/url?url=',
				icon: '<svg class="w-4 fill-current mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>',
				name: 'Telegram',
				class: 'bg-telegram'
			},
			{
				uri: 'https://api.whatsapp.com/?text=',
				icon: '<svg class="w-4 fill-current mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg>',
				name: 'WhatsApp',
				class: 'bg-whatsapp'
			},
			{
				action: 'copy',
				icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g></svg>',
				name: 'Copy Link',
				class: 'text-gray-600 border border-gray-400 hover:bg-gray-200 cursor-pointer',
				rm_class: 'shadow-md mb-3'
			},
		]
	},
	/**
	 * Element Interaction APIs
	 * @type {Object}
	 */
	interactions: {
		syntax: function(element) {
			if(window.hljs) {
				element.querySelectorAll('pre code').forEach((block) => {
				  hljs.highlightBlock(block);
				});
			}
		},

		/**
		 * Lazy-load Image Using Intersection Observer
		 * @param  {Node} element Target element
		 */
		lazyimage: function(element) {
			const { io } = api;

			let the_image = find(element, '.lazy-image');

			if(the_image) {
				let image = new Image;

				image.src = the_image.dataset.blurry;
				image.dataset.src = the_image.dataset.src;
				image.className = 'w-full';
				image.style = 'filter: blur(20px);';

				image.addEventListener('load', function(e) {
						image = wrapNode({
					    	tag: 'div',
					    	attrs: {
					    		className: 'overflow-hidden'
					    	}
					    }, image);
					the_image.parentNode.appendChild(image);
					the_image.remove();

					io.observe(image);
				});

				image.addEventListener('error', function(e) {
				});
			}
		},

		/**
		 * Attach carousel (Siema) to the element
		 * @param  {Node} element Target element
		 */
		carousel: function(element) {
			try {
	            var cr = new window.tns({
	                container: find(element, '.carousel'),
	                controls: false,
	                nav: true,
					items: 1,
					autoHeight: true,
					loop: false,
					mouseDrag: true,
	            });

	            const firstImg = find(element, '.carousel img:first-child');

	            firstImg.addEventListener('load', () => {
	            	// just make sure
	            	setTimeout(() => cr.updateSliderHeight(), 500);
	            });

	            cr.events.on('indexChanged', () => {
	            	const currentSlide = cr.getInfo().index;

					const captions = finds(element, '[data-index]');

					if(captions.length > 0) {
						captions.forEach(el => el.classList.add('hidden'));
						find(element, '[data-index="'+ currentSlide +'"]').classList.remove('hidden');
					}
	            })

	            find(element, '.prev').addEventListener('click', () => cr.goTo('prev'));
	            find(element, '.next').addEventListener('click', () => cr.goTo('next'));
			} catch(e) {
				console.warn('Failed when attaching carousel: ', e);
			}
		},

		/**
		 * Save buttons
		 * @param  {Node} parent Target element
		 */
		save: function(parent, post_id) {
			let ic_save = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>',
			    ic_unsave = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g></svg>',
			    ic_spin = '<svg class="fill-current spin" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

			function toggle_icon_save(is_saved, item, calc=false)
			{
				if(find(item, 'span svg'))
					find(item, ' span svg').remove();

				if(is_saved){
					find(item, 'span').append(str2dom(ic_unsave));

					if(calc)
						find(item, '.post-save-count').innerText = parseInt(find(item, '.post-save-count').innerText) + 1;
				}else{
					find(item, 'span').append(str2dom(ic_save));

					if(calc)
						find(item, '.post-save-count').innerText = parseInt(find(item, '.post-save-count').innerText) - 1;
				}
			}

			finds(parent, '[data-save]').forEach(function(item){
				let	is_saved = typeof item.dataset.saved == 'string' ? true : false;

				toggle_icon_save(is_saved, item);

				item.addEventListener('click', function(e) {
					toggle_icon_save(is_saved, item);

					item.classList.add('pointer-events-none');

					if(find(item, 'span svg'))
						find(item, 'span svg').remove();

					find(item, 'span').append(str2dom(ic_spin));

					const saving = (async function() {
						const res = await fetch(routes.save, {
							method: 'POST',
							headers: {
								'X-CSRF-TOKEN': token,
								'Content-Type': 'application/json',
								'Accept': 'application/json'
							},
							body: JSON.stringify({
								row_id: post_id,
								method: 'save',
								model: 'Post'
							})
						});

						if(!res.ok)
							return Promise.reject(res);

						const json = await res.json();

						return Promise.resolve(json);
					})()
					.finally(function() {
						find(item, 'span svg').remove();
						item.classList.remove('pointer-events-none');
					})
					.then(function(res) {
						is_saved = res.saved;
						item.dataset.saved = res.saved;

						toggle_icon_save(is_saved, item, true);
					})
					.catch(function(error) {
						toggle_icon_save(false, item);

						if(error.status == 401)
							showLoginAlert();
					});

					e.preventDefault();
				});
			});
		},

		/**
		 * Love buttons
		 * @param  {Node} parent Target element
		 */
		love: function(parent, post_id) {
			let ic_love = '<svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
				ic_unlove = '<svg class="fill-current text-red-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
			    ic_spin = '<svg class="stroke-current spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

			function toggle_icon_love(is_loved, item, calc=false)
			{
				if(is_loved){
					find(item, 'span').append(str2dom(ic_unlove));

					if(calc)
						find(item, '.post-love-count').innerText = parseInt(find(item, '.post-love-count').innerText) + 1;
				}
				else {
					find(item, 'span').append(str2dom(ic_love));

					if(calc)
						find(item, '.post-love-count').innerText = parseInt(find(item, '.post-love-count').innerText) - 1;
				}
			}

			finds(parent, '[data-love]').forEach(function(item) {
				let is_loved = typeof item.dataset.loved == 'string' ? true : false;

				toggle_icon_love(is_loved, item);

				item.addEventListener('click', function(e) {

					item.classList.add('pointer-events-none');

					if(find(item, 'span svg'))
						find(item, 'span svg').remove();

					find(item, 'span').append(str2dom(ic_spin));

					const saving = (async function() {
						const res = await fetch(routes.save, {
							method: 'POST',
							headers: {
								'X-CSRF-TOKEN': token,
								'Content-Type': 'application/json',
								'Accept': 'application/json'
							},
							body: JSON.stringify({
								row_id: post_id,
								method: 'love',
								model: 'Post'
							})
						});

						if(!res.ok)
							return Promise.reject(res);

						const json = await res.json();

						return Promise.resolve(json);
					})()
					.finally(function() {
						find(item, 'span svg').remove();
						item.classList.remove('pointer-events-none');
					})
					.then(function(res) {
						is_loved = res.saved;
						item.dataset.loved = res.saved;

						toggle_icon_love(is_loved, item, true);
					})
					.catch(function(error) {
						toggle_icon_love(false, item);
						if(error.status == 401)
							showLoginAlert();
					});

					e.preventDefault();
				});
			});
		},

		/**
		 * Share button
		 * @param  {Node} parent Target element
		 */
		share: function(parent) {
			const { uris } = api.vars;
			let cjs;

			// if modal not initialized yet
			// then append all buttons to the modal element
			if($$('.share-buttons a').length < 1) {
				// this is share button template
				let share_btn = '<a href="" target="_blank" class="text-white shadow-md mb-3 py-3 px-4 flex justify-center items-center rounded"></a>';

				// show all the buttons from the `uris` key (see the uris var form destructuring object above)
				for(let i=0; i < uris.length; i++) {
					var key = uris[i],  // the "button"
						btn = ''; // button wrapper

					// convert share_btn template to DOM
					btn = str2dom(share_btn);

					if(key.class.split(' ').length > 1)
						adds(btn.classList, key.class);
					else
						btn.classList.add(key.class);

					if(key.rm_class)
						removes(btn.classList, key.rm_class);

					// adding the button icon
					btn.appendChild(str2dom(key.icon))
					// adding the button text
					btn.appendChild(str2dom('<span>' + key.name + '</span>'));

					// let's append the button to the list
					$('.share-buttons').appendChild(
						btn
					);
				}

				// adding click event to the close button element
				$('.share-modal .share-modal-close').addEventListener('click', function() {
					// yes, destroy the cjs instance
					if(cjs) cjs.destroy();
					// let share-modal-dialog sleep
					$('.share-modal').classList.add('hidden');
					// bring back the overflow behavior to the body element
					$("body").classList.remove('overflow-hidden');
				});
			}

			// find element with `share-button` class inside parent element
			finds(parent, '.share-button').forEach(function(item) {
				item.addEventListener('click', function(e) {
					let url = item.dataset.url; // retrieve the url

					// show the modal by removing the `hidden` class
					$('.share-modal').classList.remove('hidden');

					for(let i=0; i < uris.length; i++) {
						// when the button has uri value
						if(uris[i].uri)
							// set the href attribute to the value of the uri property
							$$('.share-buttons a')[i].setAttribute('href', uris[i].uri + url);

						// when the button is has copy action
						if(uris[i].action == 'copy') {
							// select the button
							var the_btn = $$('.share-buttons a')[i];
							// set data-clipboard-text to the url variable
							the_btn.dataset.clipboardText = url;
							// remove the href attribute
							the_btn.removeAttribute('href');
							// adding `copy-btn` class
							the_btn.classList.add('copy-btn');

							// cjs means clipboard js (clipboard instance)
							cjs = new Clipboard('.copy-btn');

							// when cjs success copying text to a clipboard
							cjs.on('success', function() {
								// change the text
								find(the_btn, 'span').innerHTML = 'Copied';
								// disable button
								the_btn.classList.add('pointer-events-none');

								// revert text to the original one after 1500ms
								setTimeout(function() {
									find(the_btn, 'span').innerHTML = uris[i].name;
									the_btn.classList.remove('pointer-events-none');
								}, 1500);
							})
						}
					}

					// hide overflow behavior in the body element
					$("body").classList.add('overflow-hidden');

					// ok, i think you already knew this one
					e.preventDefault();
				});
			});
		}
	},

	/**
	 * API Lifecycle
	 * @type {Object}
	 */
	lifecycle: {
		onStartImplementing: function({io}) {
			// init observer
			io.init();

		},

		onContentCollected: function({dom, interactions}) {
			// do stuff here
		},

		onContentLoaded: function() {
			// do stuff here
		},

		firstContentLoaded: function() {
			const { loadMore, options } = api;

			if(!options.first) {
				let scrollReachBottom = (function(reach) {
					window.addEventListener('scroll', function(e) {
						if ((window.innerHeight + window.scrollY) >= $('#app').offsetHeight) {
							reach.call(this);
					    }
					});
				});

				scrollReachBottom(function() {
					loadMore.call(this, api);
				});
			}
		}
	},

	/**
	 * Template collection
	 * @type {Object}
	 */
	templates: {
		/**
		 * Empty state template
		 * @return {String}				Interpolated template string
		 */
		empty: function() {
			let tpl = `
				<div class="text-center">
					<svg width="300" class="inline-block" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><defs><style>.cls-1{fill:#e2e2e2;}.cls-2{fill:#f3f3f3;}.cls-3{fill:#d37c59;}.cls-4{fill:#de8e68;}.cls-5{fill:#56cad8;}.cls-6{fill:#74d5de;}.cls-7{fill:#fed385;}.cls-8{fill:#dc8e6c;}.cls-9{fill:#fb836d;}.cls-10{fill:#d3d3d3;}.cls-11,.cls-13,.cls-14,.cls-15,.cls-16{fill:none;}.cls-11{stroke:#d3d3d3;stroke-miterlimit:10;}.cls-11,.cls-14,.cls-15{stroke-width:3.69px;}.cls-12{fill:#fed892;}.cls-13,.cls-14,.cls-16{stroke:#fed385;}.cls-13,.cls-14,.cls-15,.cls-16{stroke-linecap:round;stroke-linejoin:round;}.cls-13{stroke-width:3.84px;}.cls-15{stroke:#74d5de;}.cls-16{stroke-width:2.39px;}</style></defs><path class="cls-1" d="M711.1,528.1c0-21.86-47-74.85-84.67-74.85-28.93,0-29.4,15.3-57.59,15.3-43.46,0-75.71-72.66-159.29-72.66-89.05,0-205.41,83.58-205.41,149.14C204.14,638.91,711.1,661.41,711.1,528.1Z"/><path class="cls-2" d="M935.51,849.68c1-102,2.6-265.85,2.6-290.1,0-35.58-52.84-142.15-145.27-142.15-101.26,0-151.3,116.21-217.58,116.21-60.75,0-65.54-30.76-140.74-30.76-49,0-149.82,62.8-149.82,127l67.11,219.75Z"/><ellipse class="cls-3" cx="602.59" cy="679.96" rx="11.73" ry="5.25" transform="translate(-105.6 1249.11) rotate(-87.24)"/><path class="cls-3" d="M590.19,739.68c-.2-1.94,4.32-42.23,7.92-55a16,16,0,0,1,6.71-.94l-.34,39.7-5,18.67Z"/><polygon points="620.7 683.58 589.26 686.18 588.26 679.96 618.52 670.39 620.7 683.58"/><rect class="cls-4" x="544.3" y="999.24" width="13.77" height="11.65"/><rect class="cls-4" x="586.9" y="1001.06" width="13.77" height="11.65"/><path class="cls-5" d="M542.87,805V999.88H559l18.54-104.26S580.09,839.22,542.87,805Z"/><path class="cls-6" d="M596,801.16c.45,5.62,6.06,107.88,6.06,107.88v93.11l-16.55,1.77-10.64-99-32-99.92C547.71,802.34,583.16,797.33,596,801.16Z"/><path class="cls-7" d="M566.51,715.47c31.79,0,33.3,80.83,29.52,85.69s-49,8.17-53.16,3.83S526.9,715.47,566.51,715.47Z"/><ellipse class="cls-4" cx="607.86" cy="679.96" rx="11.73" ry="5.25" transform="translate(-100.59 1254.37) rotate(-87.24)"/><polygon points="585.61 1010.89 585.61 1022.54 618.35 1022.54 618.35 1018.3 601.32 1010.89 585.61 1010.89"/><polygon points="543.87 1009.05 543.87 1020.7 576.61 1020.7 576.61 1016.46 559.58 1009.05 543.87 1009.05"/><rect x="585.55" y="681.34" width="3.86" height="3.86" transform="translate(-98.87 99.39) rotate(-8.92)"/><path class="cls-3" d="M568.84,722.5c0,2.67-12.41,3-12.41,0V696h12.41Z"/><ellipse class="cls-8" cx="568.46" cy="688.32" rx="13.03" ry="19.89"/><path class="cls-9" d="M545.77,680.12c0-6.13,2.67-10,4.84-11.23,4.19-2.4,5.94-1.33,10.16-3.2,4.57-2,8.49-7.84,13.84-7.84,5,0,4.55,2.84,7.94,3.68,2,.49,13.36-2.12,13.36,5.23,0,11.32-12.57,12.24-15.48,13.69a37.43,37.43,0,0,0-1.52-3.83c-2.29,2.36-10.58,4-11.92,4.53-3.1,1.28-4.58,6.13-4.58,9.3s-2.87,3.18-3.59,3.18C552.19,693.63,545.77,689.38,545.77,680.12Z"/><circle class="cls-8" cx="556.67" cy="691.67" r="4.33"/><rect class="cls-10" x="512.81" y="718.34" width="25.14" height="84.61" rx="12.57" ry="12.57"/><ellipse class="cls-11" cx="544.89" cy="751.24" rx="30.38" ry="32.89"/><path class="cls-4" d="M576.84,736.83c2.53,0,15.29.53,20.48,2.4.4-2.53,2.66-38.77,6.51-50.91,1.47-1.62,7.45-1.43,7.45,0s8.51,60.88,0,67.93-37.37-2.4-38.56-3.33S576.84,736.83,576.84,736.83Z"/><path class="cls-12" d="M549.66,734.69c2.82-11.48,28.36-1.93,30.67.69,2.77,3.14-2.18,20.84-6,21.66C568.1,758.39,546,749.58,549.66,734.69Z"/><polygon class="cls-12" points="266.38 341.65 142.64 849.68 390.13 849.68 266.38 341.65"/><polygon class="cls-5" points="169.62 341.65 45.87 893.9 293.36 893.9 169.62 341.65"/><line class="cls-13" x1="170.29" y1="891.44" x2="170.29" y2="395.36"/><line class="cls-13" x1="170.29" y1="558.95" x2="197.18" y2="529.72"/><line class="cls-13" x1="170.29" y1="698.94" x2="210.7" y2="655.02"/><line class="cls-13" x1="170.29" y1="844.98" x2="233.14" y2="776.66"/><line class="cls-13" x1="170.29" y1="558.95" x2="143.4" y2="529.72"/><line class="cls-13" x1="170.29" y1="698.94" x2="129.89" y2="655.02"/><line class="cls-13" x1="170.29" y1="844.98" x2="107.44" y2="776.66"/><rect class="cls-6" x="190.5" y="734.34" width="135.39" height="197.16" rx="67.69" ry="67.69"/><line class="cls-14" x1="258.19" y1="982.94" x2="258.19" y2="795.85"/><path class="cls-14" d="M258.19,875.41c37,0,37-22.28,37-56"/><path class="cls-14" d="M258.19,841.33c-25.65,0-25.65-15.47-25.65-38.84"/><path class="cls-7" d="M1152.37,849.68V667.57a81.52,81.52,0,0,0-81.28-81.28h0a81.65,81.65,0,0,0-13.07,1.06V377.78a55.64,55.64,0,0,0-55.63-55.64h0a55.64,55.64,0,0,0-55.64,55.64v44.86a80.64,80.64,0,0,0-26-4.31h0a81.52,81.52,0,0,0-81.28,81.29V649H804.08a55.7,55.7,0,0,0-55.53,55.53V833.86a55.18,55.18,0,0,0,2.32,15.82Z"/><path class="cls-15" d="M1000.16,740.85c91.61,0,91.61-41,91.61-103"/><path class="cls-15" d="M1000.25,795.48c-50.4,0-50.4-22.56-50.4-56.67"/><line class="cls-15" x1="1000.16" y1="849.68" x2="1000.16" y2="364.17"/><line class="cls-15" x1="1000.16" y1="637.85" x2="949.94" y2="587.62"/><line class="cls-15" x1="1000.16" y1="534.21" x2="1030.55" y2="503.83"/><path class="cls-2" d="M750.49,341.65a47.18,47.18,0,0,0-86.25-35.55,37.43,37.43,0,0,0-52.84,34.1c0,.49,0,1,0,1.45Z"/><path class="cls-2" d="M291.91,268.28a47.18,47.18,0,0,1,86.25-35.55A37.4,37.4,0,0,1,431,266.83c0,.48,0,1,0,1.45Z"/><path class="cls-6" d="M924.33,936.06c-50.28,0-91,21.47-91,48h182.05C1015.35,957.53,974.6,936.06,924.33,936.06Z"/><path class="cls-9" d="M502.76,1006.93c-12.55,0-22.73,8.76-22.73,19.57H525.5C525.5,1015.69,515.32,1006.93,502.76,1006.93Z"/><path class="cls-9" d="M833.3,902.44c-12.56,0-22.73,13-22.73,29.06H856C856,915.45,845.85,902.44,833.3,902.44Z"/><path class="cls-9" d="M120.87,974.57c-20,0-36.16,6.51-36.16,14.53H157C157,981.08,140.84,974.57,120.87,974.57Z"/><path class="cls-9" d="M1030.55,974.57c-20,0-36.16,6.51-36.16,14.53h72.31C1066.7,981.08,1050.52,974.57,1030.55,974.57Z"/><rect class="cls-6" x="838.22" y="746.55" width="87.67" height="127.66" rx="43.83" ry="43.83"/><line class="cls-16" x1="882.06" y1="907.53" x2="882.06" y2="786.38"/><path class="cls-16" d="M882.06,837.9C906,837.9,906,823.47,906,801.64"/><path class="cls-16" d="M882.06,815.83c-16.61,0-16.61-10-16.61-25.16"/><line class="cls-14" x1="331.71" y1="947.65" x2="412.75" y2="947.65"/><line class="cls-14" x1="668.4" y1="893.9" x2="722.14" y2="893.9"/><line class="cls-14" x1="627.87" y1="907.53" x2="681.62" y2="907.53"/><line class="cls-14" x1="116.88" y1="918.64" x2="170.63" y2="918.64"/><line class="cls-14" x1="748.55" y1="999.24" x2="824.1" y2="999.24"/></svg>
					<h2 class="text-xl font-semibold">Ya ampun! Data tidak ditemukan</h2>
					<p class="mt-2 leading-loose text-gray-600">Apa yang kamu cari sehingga data tidak ditemukan? Tapi, sepertinya ini salah kami memiliki konten yang terlalu sedikit 😿.</p>
				</div>
			`;

			return tpl;
		},
		/**
		 * Community template
		 * @param  {Object} options.post:   community     Post data
		 * @param  {Object} options.options Instance options
		 * @return {String}                 Interpolated template string
		 */
		community: function({post: community, options}) {
			let tpl = `
	    		<div class="bg-white rounded border border-gray-200 w-full">
	    			<div class="pb-8 pt-6 px-6">
	    				<div class="float-right">
	    					<a target="_blank" ${ community.website ? `href="${community.website}" `:'' }class="${!community.website ? 'pointer-events-none opacity-50 ':''}flex leading-relaxed items-center hover:bg-indigo-600 hover:text-white hover:border-indigo-600 border border-gray-200 uppercase text-sm font-semibold tracking-wider py-1 px-3 rounded-full">
	    						Website
	    						<svg class="ml-1 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-forward"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M5 13h11.86l-3.63 4.36a1 1 0 0 0 1.54 1.28l5-6a1.19 1.19 0 0 0 .09-.15c0-.05.05-.08.07-.13A1 1 0 0 0 20 12a1 1 0 0 0-.07-.36c0-.05-.05-.08-.07-.13a1.19 1.19 0 0 0-.09-.15l-5-6A1 1 0 0 0 14 5a1 1 0 0 0-.64.23 1 1 0 0 0-.13 1.41L16.86 11H5a1 1 0 0 0 0 2z"/></g></g></svg>
	    					</a>
	    				</div>
	    				<div class="rounded p-2 w-16 h-16 flex-shrink-0 flex items-center justify-center border" ${ community.logo_bg ? 'style="background-color: ' + community.logo_bg + ';"' : '' }>
	    					<img src="${ community.logo }" alt="${ community.name }" class="w-full">
	    				</div>
	        			<h2 class="font-bold text-lg mt-4 truncate">${ community.name }</h2>
	        			<p class="mt-1 text-gray-600 font-light leading-relaxed h-12">${ community.short_description }</p>
	    			</div>
	    			<div class="flex px-6 pb-6">
	    				<div class="flex items-center">
	    					<svg class="w-5 mr-1 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="person"><rect width="24" height="24" opacity="0"/><path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z"/><path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"/></g></g></svg>
	    					${ community.formatted_member }+
	    				</div>
	        			<div class="inline-flex ml-auto">
	        				${ community.facebook ? `
	        				<a target="_blank" href="${ community.facebook }">
	        					<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g></svg>
	        				</a>` : ''}

	        				${ community.twitter ? `
	        				<a target="_blank" href="${ community.twitter }">
								<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g></svg>
							</a>` : ''}

							${ community.github ? `
	        				<a target="_blank" href="${ community.github }">
	        					<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"/></g></svg>
							</a>` : ''}

							${ community.telegram ? `
	        				<a target="_blank" href="${ community.telegram }">
	        					<svg class="fill-current text-gray-600 hover:text-indigo-600 w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>
							</a>` : ''}
	        			</div>
	        		</div>
	    		</div>
	    	`;

	    	return tpl;
		},

		user: function({post: user, options}) {
			let tpl = `
	    		<div class="bg-white rounded border border-gray-200 w-full">
	    			<div class="py-6 px-6">
	    				<div class="flex">
	    					<img src="${ user.the_avatar }" alt="${ user.name }" class="rounded w-16 h-16 border flex-shrink-0">
		    				<div class="ml-4 overflow-hidden">
			        			<h2 class="font-bold truncate text-lg">${ user.name }</h2>
			        			<p class="mt-1 text-gray-600">@${ user.username }</p>
		        			</div>
	        			</div>
	        			<div class="flex -mx-2 mt-6 border-t border-b border-gray-200 py-2">
	        				<div class="w-6/12 text-center px-2">
	        					<div class="text-xs uppercase tracking-wider font-semibold text-gray-600">Posts</div>
	        					<div class="text-xl">${user.posts.length}</div>
	        				</div>
	        				<div class="w-6/12 text-center px-2">
	        					<div class="text-xs uppercase tracking-wider font-semibold text-gray-600">Diskusi</div>
	        					<div class="text-xl">${user.comments.length}</div>
	        				</div>
	        			</div>

	        			<a class="block text-center mt-4 rounded py-2 text-white bg-indigo-600 hover:bg-indigo-700" href="${routes.single + user.username}">Lihat Profile</a>
	    			</div>
	    		</div>
	    	`;

	    	return tpl;
		},

		/**
		 * Community shimmer template
		 * @return {String}           Interpolated template string
		 */
		communityShimmer: function() {
			let tpl = `
		    	<div class="w-full">
		    		<div class="bg-white rounded border border-gray-200">
		    			<div class="pb-8 pt-6 px-6">
		    				<div class="float-right">
		    					<div class="flex py-1 px-3 rounded-full bg-gray-200 w-16 h-6">
		    					</div>
		    				</div>
		    				<div class="rounded p-2 w-16 h-16 flex-shrink-0 bg-gray-100"></div>
		        			<h2 class="mt-4 w-32 h-6 bg-gray-200 rounded"></h2>
		        			<div class="mt-3 bg-gray-100 h-3 rounded w-full"></div>
		        			<div class="mt-2 bg-gray-100 h-3 rounded w-20"></div>
		    			</div>
		    			<div class="flex px-6 pb-6">
		    				<div class="flex items-center">
			    				<div class="rounded w-16 h-4 bg-gray-200"></div>
		    				</div>
		        			<div class="inline-flex ml-auto">
			    				<div class="rounded h-4 w-4 bg-gray-100 mr-2"></div>
			    				<div class="rounded h-4 w-4 bg-gray-100 mr-2"></div>
			    				<div class="rounded h-4 w-4 bg-gray-100 mr-2"></div>
			    				<div class="rounded h-4 w-4 bg-gray-100"></div>
		        			</div>
		        		</div>
		    		</div>
		    	</div>
			`;

			return tpl;
		},

		userShimmer: function() {
			let tpl = `
		    	<div class="w-full">
		    		<div class="bg-white rounded border border-gray-200">
		    			<div class="pb-8 pt-6 px-6">
		    				<div class="flex">
			    				<div class="rounded p-2 w-16 h-16 flex-shrink-0 bg-gray-100"></div>
			    				<div class="ml-4">
				        			<div class="mt-2 w-32 h-6 bg-gray-200 rounded"></div>
				        			<div class="mt-3 bg-gray-100 h-3 rounded w-full"></div>
			    				</div>
		    				</div>
			    			<div class="flex -mx-2 mt-6 border-t border-b border-gray-100 py-2">
			    				<div class="w-6/12 px-2 text-center flex items-center flex-col">
			    					<div class="inline-block mb-2 w-20 h-4 bg-gray-100 rounded"></div>
			    					<div class="inline-block"><div class="w-10 h-6 bg-gray-200 rounded"></div></div>
			    				</div>
			    				<div class="w-6/12 px-2 text-center flex items-center flex-col">
			    					<div class="inline-block mb-2 w-20 h-4 bg-gray-100 rounded"></div>
			    					<div class="inline-block"><div class="w-10 h-6 bg-gray-200 rounded"></div></div>
			    				</div>
			    			</div>
		    				<div class="mt-4 rounded w-full h-10 bg-gray-200"></div>
		    			</div>
		    		</div>
		    	</div>
			`;

			return tpl;
		},

		compTags: function({post}) {
			const tpl = `
		        <div class="flex flex-wrap">
		        ${post.tags.map(function(tag) {
		        	if(tag.tag !== null) {
	                    return `<a class="mt-2 border border-gray-300 bg-gray-100 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded py-1 px-3" href="${routes.search + fullUrlWithQuery({tag: tag.tag.name})}">
	                        #${ tag.tag.name }
	                    </a>`;
		        	}else {
		        		return '';
		        	}
		        }).join('')}
		        </div>
			`;

			return tpl;
		},

		compCtas: function({post}) {
			const tpl = `
				<div class="border-t border-gray-200">
				    <div class="flex w-full items-center">
				        <a data-love ${ post.is_post_loved ? 'data-loved' : '' } class="py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200" href="#">
				            <span></span>
				            <div class="ml-2 inline-block post-love-count">${post.total_loves}</div>
				        </a>
				        ${post.type !== 'link' ?
				        `<a class="py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200" href="${routes.post_single.replace(/username/g, post.user.username).replace(/slug/g, post.slug) + '#comments'}">
				            <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
				            <div class="ml-2 inline-block post-comment-count">${post.total_comments}</div>
				        </a>`
				        : ''}
				        <a class="py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200" data-save ${ post.is_post_saved ? 'data-saved' : '' } href="#">
				        	<span></span>
				            <div class="ml-2 inline-block post-save-count">${post.total_saves}</div>
				        </a>
				        <a data-url="${ routes.post_single.replace(/username/g, post.user.username).replace(/slug/g, post.slug) }" class="share-button py-4 px-5 hover:bg-gray-100 flex-1 sm:flex-none text-gray-600 flex items-center justify-center border-r border-gray-200" href="#">
				            <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
				        </a>
				    </div>
				</div>
			`;

			return tpl;
		},

		/**
		 * General post template
		 * @param  {Object} options.post    Post data
		 * @param  {Object} options.options Instance options
		 * @return {String}                 Interpolated template string
		 */
		post: function({post, options}) {
			let tpl = `
			<div class="bg-white rounded border border-gray-200 mb-10">
			    <div class="flex p-6 items-center">
			        <a href="${routes.single + post.user.username}">
			            <img class="rounded w-12 rounded border" src="${ post.user.the_avatar_sm }">
			        </a>
			        <div class="ml-3">
			            <h4 class="font-semibold">
			                <a class="text-lg" href="${ routes.single + post.user.username }">
			                    ${ post.user.name }
			                </a>
			            </h4>
			            <div class="-mx-1 flex items-center text-sm text-gray-500">
			                <p class="mx-1">@${ post.user.username }</p>
			                <p class="mx-1">&bull;</p>
			                <p class="mx-1 font-semibold">${ post.time }</p>
			            </div>
			        </div>
			    </div>

			    ${ post.type == 'link' ? `
				    <div class="md:border border-b border-t md:rounded md:mx-6">

				        ${post.post_card.has_embeddable_code ? `

				            <div class="embeddable-frame">
				                ${post.post_card.embeddable_code}
				            </div>`
				        : // else
				        `
				        	<a href="${post.post_card.url}" target="_blank">
				        	${post.post_card.thumbnail !== null ?
					            `<img src="${post.post_card.thumbnail}" class="w-full h-64 object-cover">`
				            : // else
					            `<img src="${post.post_card.default_thumbnail}" class="w-full h-64 object-scale-down">`
					        }
					        </a>
				        `}

				        <div class="p-4 border-t bg-gray-100">

				            <h2 class="md:text-xl mb-2 text-base font-semibold hover:text-indigo-600"><a target="_blank" href="${post.post_card.url}">${post.post_card.title}</a></h2>

				            ${post.post_card.description ? `
				                <p class="text-gray-600 break-all"><a target="_blank" href="${post.post_card.url}">${ post.post_card.description.substr(0, 200)}</a></p>
				            ` : ''}
				            <div class="uppercase tracking-wider text-sm mt-3 text-teal-500 font-semibold">${ post.post_card.hostname }</div>
				        </div>
				    </div>
			    ` : ``}

			    ${ post.type !== 'link' ? `

			    <div class="relative${post.content_object.length > 1 && options.carousel ? ' carousel-outer w-full' : ''}">
			        <div class="${post.content_object.length > 1 && options.carousel ? 'carousel w-full' : ''}">

			            ${'carousel' in options && options.carousel == false ?
			            	`<a href="${routes.post_single.replace(/username/g, post.user.username).replace(/slug/g, post.slug)}">
			                    <div data-blurry="${post.blurry_image}" data-src="${!post.is_markdown ? post.first_slide_media : post.cover}" class="lazy-image w-full bg-gray-200 bg-cover h-40 sm:h-64"></div>
			                </a>`

		                : // else

			                post.content_object.map(function(slide) {
			                	const img = slide.url;

			                    if(isVideo(slide.type.replace(/video\//g, ''))) {
				                    return `<video controls="" poster="${slide.video_thumbnail_url}">
				                        <source src="${img}" type="${slide.type}">
				                    </video>`;
			                    }else{
			                    	return `<img src="${img}" alt="image">`;
			                    }
			                }).join("")
			            }
			        </div>

			        ${post.content_object.length > 1 && options.carousel !== false ? `
				        <button class="prev">&lsaquo;</button>
				        <button class="next">&rsaquo;</button>`
			        : ''}
			    </div>
			    ` : ''}

			    <div class="p-6 text-gray-700 leading-relaxed">
			        ${post.title ?
				        `<h2 class="text-2xl mb-2 text-black font-bold"><a class="text-indigo-600" href="${routes.post_single.replace(/username/g, post.user.username).replace(/slug/g, post.slug)}">
				            ${post.title}
				        </a></h2>`
			        : ''}

			        ${!options.discover && post.type !== 'link' && (options.truncate_content || (!options.truncate_content && post.is_single_caption)) ?
				        `<div class="mb-3 ${options.first ? 'markdowned' : ''}">${options.truncate_content ? (post.is_markdown ? post.content_markdown_truncated : post.first_slide_caption_truncated) : post.first_slide_caption}</div>`
			        : ''}

			        ${!options.discover && !options.truncate_content && !post.is_single_caption ?
			        	post.content_object.map((slide, index) => {
				        	return `<div data-index="${index}" class="mb-3 markdowned ${index != 0 ? 'hidden' : ''}">${slide.caption || '<i>Tidak ada keterangan</i>'}</div>`;
			        	}).join('')
		        	: ''}

		        	${this.compTags({post})}
			    </div>

			    ${this.compCtas({post})}
			</div>`;

			return tpl;
		},

		markdown: function({post, options}) {
			let tpl = `
				<div class="mb-10">
					<img src="${post.cover}" class="rounded-tl rounded-tr" />

					<div class="border border-gray-200 rounded-bl rounded-br">
						<div class="lg:p-10 p-6">
							<h1 class="text-4xl font-bold">${post.title}</h1>
							<div class="flex items-center text-gray-600 -mx-2 mt-4 mb-8 border-t border-b border-gray-200 py-4">
								<div class="px-2 flex items-center">
									<img class="w-8 h-8 rounded-full" src="${post.user.the_avatar}">
									<div class="ml-2">
										<a class="text-indigo-600 hover:text-indigo-800 font-semibold" href="${routes.single + post.user.username}">${post.user.name}</a>
									</div>
								</div>
								<div class="px-2">&bull;</div>
								<div class="px-2">${post.time}</div>
								<div class="px-2">&bull;</div>
								<div class="px-2">${post.ert} baca</div>
							</div>
							<div class="prose prose-lg max-w-full mb-4">
								${post.content_markdown}
							</div>

				        	${this.compTags({post})}
			        	</div>
					    ${this.compCtas({post})}
					</div>
				</div>
			`;

			return tpl;
		},

		/**
		 * Post shimmer template
		 * @param  {String} shi_class Generated unique shimmer class
		 * @return {String}           Interpolated template string
		 */
		postShimmer: function(shi_class) {
			let tpl = `
				<div class="${shi_class} bg-white rounded border border-gray-200 mb-10">
				    <div class="flex p-6 items-center">
					    <div class="w-12 h-12 bg-gray-200 rounded"></div>
				        <div class="ml-3">
				            <div class="mb-3 w-32 h-4 bg-gray-200 rounded"></div>
				            <div class="-mx-1 flex items-center">
				                <div class="mx-1 h-2 w-12 bg-gray-100 rounded"></div>
				            </div>
				        </div>
				    </div>

				    <div class="bg-gray-100 w-full" style="height: 470px;">
				    </div>


				    <div class="p-6">
				        <div class="mb-4 bg-gray-200 w-64 h-8 rounded-lg"></div>

				        <div class="mb-3 bg-gray-100 w-full h-3 rounded"></div>
				        <div class="bg-gray-100 w-40 h-3 rounded"></div>

				        <div class="flex">
					        <div class="border border-gray-200 w-20 h-8 mt-6 rounded-full"></div>
					        <div class="border border-gray-200 w-20 h-8 mt-6 rounded-full ml-2"></div>
				        </div>

				        <div class="mt-8">
				            <div class="flex w-full">
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
				            </div>
				        </div>
				    </div>
				</div>
			`;

			return tpl;
		},

		/**
		 * Discover shimmer template
		 * @param  {String} shi_class Generated unique shimmer class
		 * @return {String}           Interpolated template string
		 */
		discoverShimmer: function(shi_class) {
			let tpl = `
				<div class="${shi_class} bg-white rounded border border-gray-200 mb-10">
				    <div class="flex p-6 items-center">
					    <div class="w-12 h-12 bg-gray-200 rounded"></div>
				        <div class="ml-3">
				            <div class="mb-3 w-32 h-4 bg-gray-200 rounded"></div>
				            <div class="-mx-1 flex items-center">
				                <div class="mx-1 h-2 w-12 bg-gray-100 rounded"></div>
				            </div>
				        </div>
				    </div>

				    <div class="mx-6 border border-gray-200 rounded">
					    <div class="bg-gray-100 w-full h-64">
					    </div>
				        <div class="p-4 border-t">
				            <h2 class="w-64 h-6 rounded bg-gray-300 mb-4"></h2>
			                <p class="h-3 w-full rounded bg-gray-200 mb-3"></p>
			                <p class="h-3 w-40 rounded bg-gray-200"></p>
				            <div class="rounded bg-gray-200 h-4 w-20 bg-gray-300 mt-10"></div>
				        </div>
				    </div>

				    <div class="p-6">
				        <div class="flex">
					        <div class="border border-gray-200 w-20 h-8 rounded-full"></div>
					        <div class="border border-gray-200 w-20 h-8 rounded-full ml-2"></div>
				        </div>

				        <div class="mt-8">
				            <div class="flex w-full">
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
					            <div class="w-12 h-12 rounded-full bg-gray-200 mr-2"></div>
				            </div>
				        </div>
				    </div>
				</div>
			`;

			return tpl;
		}
	},

	/**
	 * Target element instance
	 * @type Node
	 * @default Undefined
	 */
	elem: undefined,

	/**
	 * Set element target method
	 * @param  {String} elem Target selector
	 * @return {Node}      	 Target element node
	 */
	set target(elem) {
		if($(elem) !== null) {
			return this.elem = $(elem);
		}

		return this.elem = false;
	},

	/**
	 * Init page number for query
	 * @param  {Number} num Number of a page
	 */
	set initPage(num) {
		api.vars.__page__ = num;
	},

	/**
	 * Increment page method
	 * @return {Number} Current page number
	 */
	incrementPage: function() {
		api.vars.__page__ += 1;

		return api.page;
	},

	/**
	 * Get current page
	 * @return {Number} Current page number
	 */
	get page() {
		return api.vars.__page__;
	},

	/**
	 * Build parameters method
	 * @param  {Object} defParams Default parameters object
	 * @return {String}           Generated URL parameter string
	 */
	buildParams: function(defParams) {
		const { params } = api.options;

		let parameters;

		if(params) {
			parameters = params.call(this, defParams);
		}else{
			parameters = defParams;
		}

		Object.keys(parameters).forEach(function(key) {
			if(parameters[key] == "" || parameters[key] == null)
				delete parameters[key];
		});

		let url = new URLSearchParams(parameters).toString();

		return (url ? '?' + url : '');
	},

	/**
	 * Query/Fetch method
	 * @param  {Number} options.page         	Current page number
	 * @param  {Object} options.queryPending 	Query pending object
	 * @param  {String} options.url          	Target URL endpoint
	 * @param  {Function} options.buildParams  	Build params method
	 * @param  {Function} init                 	Function callback
	 * @return {Promise}                      	Resolve or reject; idk
	 */
	query: async function({page, queryPending, url, buildParams}, init) {
		/** Check current query pending status */
		if(queryPending.status == true) {
			return false;
		}

		/** Calling init callback */
		if(init)
			init.call(this);

		/** Init query pending */
		queryPending.init();

		let objParams = {
			...(page ? {page} : {}),
		}

		const params = buildParams(objParams);

		let http = await fetch(url + params, {
			headers: {
				'Accept': 'application/json',
			}
		});

		if(http) {
			queryPending.dispose();
		}

		if(http.ok)
			return Promise.resolve(http.json());
		else
			return Promise.reject(http);
	},

	/**
	 * Query pending is an object to check if there is a current request
	 * @type {Object}
	 */
	queryPending: {
		/** Start query pending */
		init: function() {
			api.vars.__queryPending__ = true;
		},

		/** Stop query pending; when the HTTP request is complete (failed or success) */
		dispose: function() {
			api.vars.__queryPending__ = false;
		},

		/** Current query pending status */
		get status() {
			return api.vars.__queryPending__;
		}
	},

	/**
	 * Default instance options
	 * @type {Object}
	 */
	defOptions: {
		first: false,
		carousel: false,
		syntax: false,
		truncate_content: false,
		discover: false,
		page: 1,
		params: null,
		url: undefined,
		type: types.POST,
		lazyimage: true,
		shimmer: 1,
		wrap: ''
	},

	/**
	 * Instance Options
	 * @type {Object}
	 */
	options: {},

	/**
	 * Set options method
	 * @param  {Object} options Object to be set
	 */
	set opts(options) {
		this.options = objExtend(this.defOptions, options);
	},

	/**
	 * Intersection observer
	 * @type {Object}
	 */
	io: {
		/**
		 * Initialize IO
		 */
		init: function() {
			api.vars.io = new IntersectionObserver(function(entries) {
				entries.forEach(function(entry) {
					if(entry.isIntersecting) {
						let target = entry.target.querySelector('img');
						let image = new Image;
						image.src = target.dataset.src;
						image.className = 'w-full';

						image.addEventListener('load', function() {
							setTimeout(function() {
								target.parentNode.appendChild(image);

								api.vars.io.unobserve(target);

								target.remove();
							});
						});
					}
				});
			});

			$$('.lazy-image').forEach(function(image) {
				io.observe(image);
			});
		},

		/**
		 * Observe element
		 * @param  {Node} element Target element to be observe
		 * @return {IntersectionObserver}
		 */
		observe: function(element) {
			if(!element)
				return false;

			return api.vars.io.observe(element);
		}
	},

	/**
	 * Events method
	 * @type {Object}
	 */
	events: {
		/**
		 * Attach a few events before the target element to be appended
		 * @param  {Node} options.element      		Target element
		 * @param  {Object} options.interactions 	List of interactions we have
		 * @param  {Object} options.options      	Instance Options
		 */
		attach: function({post: data, element, interactions, options}) {
			const { types } = post;

			// if post type is discover or post
			if(options.type == types.POST || options.type == types.DISCOVER || options.type == types.MARKDOWN) {
				interactions.love(element, data.id);
				interactions.save(element, data.id);
				interactions.share(element);

				if(options.carousel && find(element, '.carousel'))
					interactions.carousel(element);

				if(options.lazyimage !== false)
					interactions.lazyimage(element);

				if(options.syntax !== false)
					interactions.syntax(element);
			}
		}
	},

	/**
	 * Templating method; get template string, pass an object to it;
	 * attach a few events
	 * @param  {Object}    data:res     		Post data
	 * @param  {Object}    options.options      Instance options
	 * @param  {Object}    options.templates    List of template literal we have
	 * @param  {Object}    options.interactions List of interaction we have
	 * @param  {Object}    options.events       Call the event object
	 * @param  {Object}    options.args         Spread operator
	 * @return {Promise}                        Resolve or Reject
	 */
	templating: function({data:res, direct, prepend, render, options, templates, interactions, events, ...args}) {
		const { data:posts } = res;

		let wrapper = document.createDocumentFragment();
        let adsSlot = 1

		// append post element to the wrapper
		let appendingTemplate = function(post) {
			if(!(options.type.template in templates)) return Promise.reject('Template not found: ' + options.type.template);

			// selecting template literal
			let element = templates[options.type.template]({
				post, options
			});

			// converting to dom
			element = str2dom(element);

			// if wrap option defined
			let wrap = options.wrap;
			if(wrap && typeof wrap == 'object') {
				// then wrap the element template
				element = wrapNode(wrap, element);
			}

			// just to make sure
			setTimeout(function() {
				// attaching events
				events.attach({post, element, interactions, options});
			});

			// appending
			wrapper.appendChild(element);


			return element;
		}

		let checkPost = function(post) {
			if("post" in post) {
				return true;
			}

			return false;
		}

		return new Promise(function(resolve, reject) {
			// if `posts`` has only one data
			if(options.first || direct){
				appendingTemplate(posts);
			}else{
				if(!posts.length) return reject({ templates, empty: true, ...args });

				// if `posts` has many post data
				// then iterate it
				posts.forEach(function(post) {
					if(checkPost(post)) {
						post = post.post;
					}

					appendingTemplate(post);

				});

			}

			if(direct) {
				render({
					dom: wrapper,
					...args,
					prepend
				}).catch(function(error) {
					console.log(error);
				});
			}

			return resolve({dom: wrapper, render, templates, interactions, ...args});
		});
	},

	/**
	 * Last data from query method
	 * @type {Object}
	 */
	lastData: {
		/** Set the data */
		set function(value) {
			api.vars.__lastData__ = value;
		},

		/** Get current data */
		get function() {
			return api.vars.__lastData__;
		},

		/** Remove the data */
		dispose: function() {
			api.vars.__lastData__ = '';
		}
	},

	/**
	 * Called when element has been appended
	 * @param  {Node}    options.elem 	Target element
	 * @param  {Node}    options.dom  	Current element to be appended
	 * @param  {Object}  options.args 	More args
	 * @return {Promise}                Resolve or reject
	 */
	render: function({elem, dom, prepend, ...args}) {
		return new Promise(function(resolve, reject) {
			if(prepend) {
				elem.prepend(dom);
			}else{
				elem.appendChild(dom);
			}

			return resolve({elem, ...args});
		});
	},

	/**
	 * Load more method
	 * @param  {Function}    options.run       	Run method
	 * @param  {Object}    	 options.endOfPage 	EndOfPage method
	 * @param  {Object} 	 options.args      	More args
	 */
	loadMore: function({run, endOfPage, ...args}) {
		// do more stuff here

		if(endOfPage.status == false)
			run({...args});
	},

	/**
	 * Shimmer method
	 * @type {Object}
	 */
	shimmer: {
		/**
		 * Add shimmer element to the target element instance
		 * @param {Node} 	options.elem      		Target element instance
		 * @param {Object} 	options.templates 		List of template literal we have
		 * @param {Object} 	options.options   		Instance options
		 */
		add: function(method='appendChild') {
			const {elem, templates, options} = api;

			let shi_class = 'shimmer-' + new Date().valueOf();

			let tpl = str2dom(templates[options.type.shimmer + 'Shimmer'](
				shi_class
			));

			// if wrap option defined
			let wrap = options.shimmerWrap;
			if(wrap && typeof wrap == 'object') {
				// then wrap the element template
				tpl = wrapNode(wrap, tpl);
			}

			tpl.classList.add(shi_class);

			for(let i = 0; i < options.shimmer; i++) {
				elem[method](tpl.cloneNode(true));
			}

			return {
				dispose: function() {
					$$('.' + shi_class).forEach(function(shimmer) {
						shimmer.remove();
					});
				}
			}
		},

		dispose: function(target) {
			$(target).remove();
		}
	},

	/**
	 * End of page is an object to check whether the last page
	 * @type {Object}
	 */
	endOfPage: {
		/**
		 * Set end of page to false
		 */
		start: function() {
			api.vars.__endOfPage__ = false;
		},

		/**
		 * Init method
		 */
		init: function() {
			api.vars.__endOfPage__ = true;
		},

		/**
		 * Delete value
		 */
		dispose: function() {
			api.vars.__endOfPage__ = false;
		},

		/**
		 * Get current status
		 * @return {Boolean}
		 */
		get status() {
			return api.vars.__endOfPage__;
		}
	},

	/**
	 * End method; start end of page
	 */
	end: function() {
		const { endOfPage } = api;

		endOfPage.init();
	},

	/**
	 * List of exception or error handler
	 * @type {Object}
	 */
	exception: {
		/**
		 * When data is empty
		 * @param  {Node} options.elem Target element
		 */
		empty: function({elem, templates}) {
			let tpl = templates.empty();

			elem.insertAdjacentHTML('beforeEnd', tpl);
		}
	},

	/**
	 * Run instance (fetching, templating, attaching events, appending, rendering)
	 * @param  {Node}    	options.elem         Target element
	 * @param  {Function} 	options.end          End function
	 * @param  {Object}    	options.options      Instance options
	 * @param  {Object}    	options.lastData     Lastdata object
	 * @param  {Function}   options.buildParams  BuildParams method
	 * @param  {Object}    	options.shimmer      Shimmer object
	 * @param  {Object}    	options.queryPending QueryPending object
	 * @param  {Function}   options.query        Query method
	 * @param  {Object} 	options.args         More args
	 * @return {Promise}                         Resolve or reject
	 */
	run: function({elem, end, options, lastData, buildParams, shimmer, queryPending, query, ...args}) {
		// get new page (don't retrieve from the argument)
		const {page, incrementPage} = api;

		return new Promise(function(resolve, reject) {
			// init the shimmer
			let shi;

			// 0. start fetching
			query({page, queryPending, url: options.url, buildParams, options},
				function() {
					// init query callback
					// show the shimmer
					shi = shimmer.add();
				}
			)
			.finally(function() {
				// dispose shimmer
				if(shi)
					shi.dispose();
			})
			// 1. collecting post data
			.then(function(data) {
				if(data == false)
					return;

				// page++
				incrementPage();

				lastData = data;

				const { last_page } = data;

				// end of page or stop fetching
				if((page == last_page) || (options.first)) {
					end();
				}

				if(options.first || (!options.first && page <= last_page)){
					// 2. templating & listen (event listener)
					(function({templating, ...args}) {
						// i promise you <3
						return new Promise(function(resolve) {
							templating({...args}).then(function(res) {
								// templating success
								return resolve(res);
							}).catch(function(error) {
								console.log(error)

								if(typeof error == 'object') {
									const {empty, exception, ...args} = error;
									// if empty data
									if(empty) {
										exception.empty({...args});
									}
								}
							});
						});
					})({data, lastData, elem, options, ...args})
					// 3. appending element
					.then(function({render, ...args}) {
						return render({...args});
					})
					// 4. rendered
					.then(function({lifecycle, elem, ...args}) {
						lifecycle.onContentLoaded();

						return resolve({
							elem,
							lastData
						});
					});
				}

			})
			// oh, shit! there was an error! reject, reject, reject!
			.catch(function(error) {
				// do more stuff here

				return reject(error);
			});
		});
	},
}

/**
 * Public Object
 * @type {Object}
 */
const post = {
	/**
	 * Post types
	 * @type {Object}
	 */
	types,

	/**
	 * Initialize
	 * @param  {Node} 	target Target element
	 * @param  {Object} opts   Options given
	 * @return {Object}        Public API
	 */
	init: function(target, opts) {
		// set target element
		api.target = target;

		if(!api.elem) {
			return console.error('Oh, sh!t. Target element couldn\'t be found. 😭');
		}

		// set options
		api.opts = opts;

		// set page
		if(!api.options.first)
			api.initPage = api.options.page;

		// set end of page
		api.endOfPage.start();

		// destructuring
		const {
			elem,
			options,
			query,
			templates,
			templating,
			exception,
			lifecycle,
			loadMore,
			shimmer,
			io,
			events,
			page,
			incrementPage,
			queryPending,
			interactions,
			end,
			endOfPage,
			buildParams,
			lastData,
			onrendered,
			render,
		} = api;

		// start implementing
		const args = {
			elem,
			options,
			query,
			templates,
			templating,
			exception,
			lifecycle,
			loadMore,
			shimmer,
			io,
			events,
			page,
			incrementPage,
			queryPending,
			interactions,
			end,
			endOfPage,
			buildParams,
			lastData,
			onrendered,
			render
		}

		lifecycle.onStartImplementing.call(this, args);

		const instance = api.run(args);

		instance.then(function() {
			lifecycle.firstContentLoaded.call(this, args);
		});

		let append = function(data, prepend) {
			templating({
				data,
				direct: true,
				prepend,
				...args
			}).catch(function(error) {

			});
		}

		let output = {
			onRender: instance,
			shimmer,
			elem,
			append
		};

		return output;
	}
}

export { post, types }
