/**
 * Helpers
 */

function isVideo(str)
{
	return str.indexOf('.mp4') > -1 ? true : false;
}

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

let getHostname = function(url) {
	let a = document.createElement('a');
	    a.href = url;

	return a.hostname;

}

let find = function(parent, query)
{
	return parent.querySelector(query);
}

let finds = function(parent, query)
{
	return parent.querySelectorAll(query);
}

let dom2str = function(dom)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	return div.innerHTML;
}

let findRemove = function(dom, query)
{
	let div = document.createElement('div');
	div.appendChild(dom);

	find(div, query).remove();

	return div.innerHTML;
}

let str2dom = function(str)
{
	let div = document.createElement('div');
	div.innerHTML = str;

	return div.children[0];
}

let removes = function(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.remove(item);
	});

	return str;
}

let adds = function(me, str)
{
	str = str.split(' ');

	str.forEach((item) => {
		me.add(item);
	});

	return str;
}

/**
 * Scrolling function
 */

let scrollReachBottom = (function(reach) {
	let calling = false, 
		old_scroll, 
		is_scroll_up = false,
		is_scroll_down = false;

	window.onscroll = function(e) {
		if ((window.innerHeight + window.scrollY) >= $('#app').offsetHeight) {
			if(calling == false) {
				reach.call(this);

				calling = true;
			}
	    }

	    // scroll up
	    if (old_scroll > window.scrollY) {
	    	if(is_scroll_up == false) {
	    		calling = false;

	    		is_scroll_up = true;
	    		is_scroll_down = false;	
	    	}

	   	// scroll down
	    }else{
	    	if(is_scroll_down == false) {
	    		// do stuff here

	    		is_scroll_up = false;
	    		is_scroll_down = true;
	    	}
	    }

	    old_scroll = window.scrollY;
	}
});

/**
 * Post API
 *
 * flow: init -> run -> fetching -> templating -> attach event -> append -> rendered
 */

const post = (function() {

	let api = {
		vars: {
			uris: [
				{
					uri: 'https://www.facebook.com/sharer.php?u=',
					icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="facebook"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"/></g></g></svg>',
					name: 'Facebook',
					class: 'facebook'
				},
				{
					uri: 'https://twitter.com/share?url=',
					icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"/><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"/></g></g></svg>',
					name: 'Twitter',
					class: 'twitter'
				},
				{
					uri: 'https://telegram.me/share/url?url=',
					icon: '<svg class="w-4 fill-current mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>',
					name: 'Telegram',
					class: 'telegram'
				},
				{
					uri: 'https://api.whatsapp.com/?text=',
					icon: '<svg class="w-4 fill-current mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp icon</title><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg>',
					name: 'WhatsApp',
					class: 'whatsapp'
				},
				{
					action: 'copy',
					icon: '<svg class="w-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link-2"><rect width="24" height="24" opacity="0"/><path d="M13.29 9.29l-4 4a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42z"/><path d="M12.28 17.4L11 18.67a4.2 4.2 0 0 1-5.58.4 4 4 0 0 1-.27-5.93l1.42-1.43a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42 0l-1.27 1.28a6.15 6.15 0 0 0-.67 8.07 6.06 6.06 0 0 0 9.07.6l1.42-1.42a1 1 0 0 0-1.42-1.42z"/><path d="M19.66 3.22a6.18 6.18 0 0 0-8.13.68L10.45 5a1.09 1.09 0 0 0-.17 1.61 1 1 0 0 0 1.42 0L13 5.3a4.17 4.17 0 0 1 5.57-.4 4 4 0 0 1 .27 5.95l-1.42 1.43a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.42-1.42a6.06 6.06 0 0 0-.6-9.06z"/></g></g></svg>',
					name: 'Copy Link',
					class: 'text-gray-600 border-2 border-gray-400 hover:bg-gray-200 cursor-pointer',
					rm_class: 'shadow-md mb-3'
				},
			]
		},
		interactions: {
			save: function(parent) {
				let ic_save = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6.09 21.06a1 1 0 0 1-1-1L4.94 5.4a2.26 2.26 0 0 1 2.18-2.35L16.71 3a2.27 2.27 0 0 1 2.23 2.31l.14 14.66a1 1 0 0 1-.49.87 1 1 0 0 1-1 0l-5.7-3.16-5.29 3.23a1.2 1.2 0 0 1-.51.15zm5.76-5.55a1.11 1.11 0 0 1 .5.12l4.71 2.61-.12-12.95c0-.2-.13-.34-.21-.33l-9.6.09c-.08 0-.19.13-.19.33l.12 12.9 4.28-2.63a1.06 1.06 0 0 1 .51-.14z"/></g></g></svg>',
				    ic_unsave = '<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="bookmark"><rect width="24" height="24" opacity="0"/><path d="M6 21a1 1 0 0 1-.49-.13A1 1 0 0 1 5 20V5.33A2.28 2.28 0 0 1 7.2 3h9.6A2.28 2.28 0 0 1 19 5.33V20a1 1 0 0 1-.5.86 1 1 0 0 1-1 0l-5.67-3.21-5.33 3.2A1 1 0 0 1 6 21z"/></g></g></svg>',
				    ic_spin = '<svg class="fill-current spin" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

				function toggle_icon_save(is_saved, item)
				{
					if(find(item, 'svg'))
						find(item, 'svg').remove();

					if(is_saved)
						item.append(str2dom(ic_unsave));
					else
						item.append(str2dom(ic_save));
				}

				finds(parent, '[data-save]').forEach(function(item){
					let	post_id = item.dataset.save,
						is_saved = typeof item.dataset.saved == 'string' ? true : false;

					toggle_icon_save(is_saved, item);

					item.addEventListener('click', function(e) {
						toggle_icon_save(is_saved, item);

						item.classList.add('pointer-events-none');

						if(find(item, 'svg'))
							find(item, 'svg').remove();

						item.append(str2dom(ic_spin));

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

							return await res.json();
						})()
						.then(function(res) {
							find(item, 'svg').remove();
							item.classList.remove('pointer-events-none');
					
							is_saved = res.saved; 
							item.dataset.saved = res.saved;

							toggle_icon_save(is_saved, item);
						});

						e.preventDefault();
					});
				});
			},
			
			love: function(parent) {
				let ic_love = '<svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
					ic_unlove = '<svg class="fill-current text-red-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
				    ic_spin = '<svg class="w-6 stroke-current spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>';

				function toggle_icon_love(is_loved, item) 
				{
					if(is_loved)
						find(item, 'span').append(str2dom(ic_unlove));
					else
						find(item, 'span').append(str2dom(ic_love));
				}

				finds(parent, '[data-love]').forEach(function(item) {
					let post_id = item.dataset.love,
						is_loved = typeof item.dataset.loved == 'string' ? true : false;

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

							return await res.json();
						})()
						.then(function(res) {
							find(item, 'span svg').remove();
							item.classList.remove('pointer-events-none');
					
							is_loved = res.saved; 
							item.dataset.loved = res.saved;

							toggle_icon_love(is_loved, item);
						});

						e.preventDefault();
					});
				});
			},

			share: function(parent) {
				const { uris } = api.vars;

				// if modal not initialized yet
				// then append all buttons to the modal element
				if($$('.share-buttons a').length < 1) {
					// this is share button template
					let share_btn = '<a href="" class="text-white shadow-md mb-3 py-3 px-4 flex justify-center items-center rounded text-sm"></a>';

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
						cjs.destroy();
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
								cjs = new ClipboardJS('.copy-btn');

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
		lifecycle: {
			onContentCollected: function({dom, interactions}) {
				interactions.save(dom);
				interactions.love(dom);
				interactions.share(dom);
			},
			onContentLoaded: function() {
				const { loadMore, options } = api;

				if(!options.first) {
					scrollReachBottom(function() {
						loadMore.call(this, api);
					});
				}

				if(options.carousel && $('.carousel')) {
		            var cr = new Siema({
		                selector: '.carousel'
		            });

		            document.querySelector('.prev').addEventListener('click', () => cr.prev());
		            document.querySelector('.next').addEventListener('click', () => cr.next());
				}
			}
		},
		template: function({post, options}) {
			let tpl = `
			<div class="bg-white rounded border-2 border-gray-200 mb-10">
			    <div class="flex p-6 items-center">
			        <a href="${routes.single + post.user.the_username}">
			            <img class="rounded w-12 rounded" src="${ post.user.the_avatar_sm }">
			        </a>
			        <div class="ml-3">
			            <h4 class="mb-1 font-bold">
			                <a class="text-indigo-600" href="${ routes.single + post.user.the_username }">
			                    ${ post.user.name }
			                </a>
			            </h4>
			            <div class="-mx-1 flex items-center text-xs text-gray-500">
			                <p class="mx-1">${ post.user.the_username }</p>
			                <p class="mx-1">&bull;</p>
			                <p class="mx-1 text-blue-500 font-semibold">${ post.time }</p>
			            </div>
			        </div>
			    </div>

			    ${ post.type == 'link' ? `
				    <div class="px-6 text-sm text-gray-700 leading-loose">
				        ${post.status == 'CONTAINS_PORNOGRAPHIC' ? `
				            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 px-4 py-2 mb-4" role="alert">
				                <p class="font-bold">Hati-hati</p>
				                <p>Post ini mungkin mengandung konten ponografi</p>
				            </div>
				        `: ''}
				    </div>

				    <div class="shimmer border rounded mx-6">

				        ${post.post_card.has_embeddable_code ? `

				            <div class="embeddable-frame">
				                ${post.post_card.embeddable_code}
				            </div>`
				        : // else
				        `
				        	${post.post_card.thumbnail !== null ? 
					            `<img src="${post.post_card.thumbnail}" class="w-full h-64 object-cover">`
				            : // else
					            `<img src="${post.post_card.default_thumbnail}" class="w-full h-64 object-scale-down">`
					        }
				        `}

				        <div class="p-4 border-t bg-gray-100">
				        
				            <h2 class="text-lg font-semibold hover:text-indigo-600"><a href="${post.post_card.url}">${post.post_card.title}</a></h2>

				            ${post.post_card.description ? `
				                <p class="text-gray-600 text-sm">${ post.post_card.description.substr(0, 200)}</p>
				            ` : ''}
				            <div class="uppercase tracking-wider text-xs mt-3 text-teal-500 font-semibold">${ getHostname(post.post_card.url) }</div>
				        </div>
				    </div>
			    ` : ``}

			    ${ post.type !== 'link' ? `
			    
			    <div class="relative${post.images.length > 1 ? ' carousel-outer' : ''}"> 
			        <div class="${post.images.length > 1 ? 'carousel' : ''}">
			            
			            ${'carousel' in options && options.carousel == false ? `
			                <a href="${routes.single + post.slug}">
			                    <img src="${post.images[0]}">
			                </a>` 

			                : // else
			                
			                post.images.map(function(img) {
			                    if(isVideo(img)) {
				                    return `<video controls="">
				                        <source src="${img}" type="video/mp4">
				                    </video>`;
			                    }else{
			                    	return `<img src="${img}" alt="image">`;
			                    }
			                }).join("")
			            }
			        </div>

			        ${post.images.length > 1 && options.carousel !== false ? `
				        <button class="prev">&lsaquo;</button>
				        <button class="next">&rsaquo;</button>`
			        : ''}
			    </div>
			    ` : ''}

			    <div class="p-6 text-sm text-gray-700 leading-loose">
			        ${post.title ?
				        `<h4 class="text-lg mb-2 text-black font-bold"><a class="text-indigo-700" href="${routes.single + post.slug}">
				            ${post.title}
				        </a></h4>`
			        : ''}

			        ${!options.discover ?
			        `<div class="mb-5">${options.truncate_content ? post.markdown_truncate : post.markdown}</div>`
			        : ''}

			        ${post.tags.map(function(tag) {
			        	if(tag.tag !== null) {
		                    return `<a class="border border-gray-300 hover:border-indigo-800 hover:text-indigo-800 mr-1 rounded-full py-2 px-4 text-xs" href="#">
		                        #${ tag.tag.name }
		                    </a>`;			        		
			        	}else {
			        		return '';
			        	}
			        }).join('')}

			        <div class="mt-8">
			            <div class="flex w-full">
			                <a data-love="${ post.id }" ${ post.is_post_loved ? 'data-loved' : '' } class="w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" href="#">
			                    <span></span>
			                </a>
			                <a class="ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" href="${routes.single + post.slug + '#comments'}">
			                    <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> 
			                </a>
			                <a data-url="${ routes.single + post.slug }" class="share-button ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" href="#">
			                    <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
			                </a>
			                <a class="ml-2 w-12 h-12 hover:bg-gray-100 rounded-full text-gray-600 flex items-center justify-center border-2 border-gray-200" data-save="${ post.id }" ${ post.is_post_saved ? 'data-saved' : '' } href="#"></a>
			            </div>
			        </div>
			    </div>
			</div>`;

			return tpl;
		},

		elem: undefined,

		set target(elem) {
			this.elem = $(elem);
		},

		set initPage(num) {
			api.vars.__page__ = num;
		},

		incrementPage: function() {
			api.vars.__page__ += 1;

			return api.page;
		},

		get page() {
			return api.vars.__page__;
		},

		buildParams: function(defParams) {
			const { params } = api.options;

			let parameters;

			if(params) {
				parameters = params.call(this, defParams);
			}else{
				parameters = defParams;
			}

			let url = new URLSearchParams(parameters).toString();

			return (url ? '?' + url : '');
		},

		query: async function({page, queryPending, url, buildParams}, init) {
			if(queryPending.status == true) {
				return Promise.reject({
					continue: false
				});
			}

			if(init)
				init.call(this);

			queryPending.init();

			let objParams = {
				...(page ? {page} : {})
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

		queryPending: {
			init: function() {
				api.vars.__queryPending__ = true;
			},
			dispose: function() {
				api.vars.__queryPending__ = false;
			},
			get status() {
				return api.vars.__queryPending__;
			}
		},

		// default options
		defOptions: {
			first: false,
			carousel: false,
			truncate_content: false,
			discover: false,
			page: 1,
			params: null,
			url: undefined
		},

		options: {},

		set opts(options) {
			this.options = objExtend(this.defOptions, options);			
		},

		templating: function({data:res, options, template, ...args}) {
			const { data:posts } = res;

			let wrapper = document.createElement('div');

			// append post element to the wrapper
			let appendingTemplate = function(post) {
				return wrapper.insertAdjacentHTML('beforeEnd',
					template({
						post, options
					})
				);
			}

			return new Promise(function(resolve, reject) {
				// if `posts`` has only one data 
				if(options.first){
					appendingTemplate(posts);
				}else{
					// if `posts` has many post data
					// then iterate it
					posts.forEach(function(post) {
						appendingTemplate(post);
					});
				}

				return resolve({dom: wrapper, ...args});
			});
		},

		render: function({elem, dom, ...args}) {
			return new Promise(function(resolve, reject) {
				elem.appendChild(
					dom
				);

				return resolve({elem, ...args});
			});
		},

		loadMore: function({run, endOfPage, ...args}) {
			// do more stuff here

			if(endOfPage.status == false)
				run({...args});
		},

		shimmer: {
			append: function({elem}) {
				let uq = 'shimmer-' + new Date().valueOf();

				let tpl = `
				<div class="${uq} bg-white rounded border-2 border-gray-200 mb-10">
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

				tpl = str2dom(tpl);

				elem.appendChild(tpl);

				return {
					dispose: function() {
						$('.' + uq).remove();
					}
				}
			}
		},

		// is end of page?
		endOfPage: {
			start: function() {
				api.vars.__endOfPage__ = false;
			},
			init: function() {
				api.vars.__endOfPage__ = true;
			},
			dispose: function() {
				api.vars.__endOfPage__ = false;
			},
			get status() {
				return api.vars.__endOfPage__;
			}
		},

		end: function() {
			const { endOfPage } = api;

			endOfPage.init();
		},

		exception: function() {
			console.log('error')
		},

		run: async function({elem, exception, end, options, buildParams, shimmer, queryPending, query, ...args}) {
			// get new page (don't retrieve from the argument)
			const {page, incrementPage} = api;

			// init the shimmer
			let shi;

			// 0. start fetching
			query({page, queryPending, url: options.url, buildParams}, 
				function() {
					// init query callback
					// show the shimmer
					shi = shimmer.append({elem})
				}
			)
			.finally(function() {
				// dispose shimmer
				shi.dispose();
			})
			// 1. collecting post data
			.then(function(data) {
				// page++
				incrementPage();

				const { last_page } = data;

				// end of page or stop fetching
				if((page == last_page) || (options.first)) {
					end();
				}

				if(options.first || (!options.first && page <= last_page)){
					return ({data, elem, options, ...args});
				}

			})
			// 1.1 oh, shit! there was an error! reject, reject, reject!
			.catch(function(error) {
				return Promise.reject('Fetching failed with an error ' + error.status);
			})
			// 2. templating
			.then(function({templating, ...args}) {
				return templating({...args});
			})
			// 3. attaching event listener
			.then(function({lifecycle, ...args}) {
				// just make sure all content are appended/collected correctly
				setTimeout(function() {
					// run ASAP
					lifecycle.onContentCollected({...args});
				});

				return {lifecycle, ...args};

			})
			// 4. appending element
			.then(function({render, ...args}) {
				return render({...args});
			})
			// 5. rendered
			.then(function({lifecycle, ...args}) {
				lifecycle.onContentLoaded();
	
				return Promise.resolve(1);
			});
		},
	}

	const post = {
		init: function(target, opts) {
			// set target element
			api.target = target;

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
				template, 
				templating,
				exception, 
				lifecycle, 
				loadMore,
				shimmer,
				page,
				incrementPage,
				queryPending,
				interactions,
				end,
				endOfPage,
				buildParams,
				onrendered,
				render
			} = api;

			// start implementing
			const instance = api.run({
				elem,
				options,
				query,
				template,
				templating,
				exception,
				lifecycle,
				loadMore,
				shimmer,
				page,
				incrementPage,
				queryPending,
				interactions,
				end,
				endOfPage,
				buildParams,
				onrendered,
				render
			});

			let events = {
				onRender: instance
			};

			return events;
		}
	}

	return post;
})();