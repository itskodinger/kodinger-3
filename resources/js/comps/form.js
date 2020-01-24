import React, { Component } from 'react';
import slugify from '../utils/slugify';
import validateUrl from '../utils/validate-url';
import objExtend from '../utils/obj-extend';
import Toast from './toast';
import adds from '../utils/adds';
import removes from '../utils/removes';
import Sortable from 'sortablejs';
import SimpleMDE from 'simplemde/dist/simplemde.min.js';
import 'simplemde/dist/simplemde.min.css';
import Tagify from '@yaireo/tagify';

/**
 * INI HARUSNYA SEPARATION OF CONCERN AWKOAWKOWAK
 */

class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			id: false,
			title: '',
			slug: '',
			slugDirty: false,
			keyword: '',
			tags: [],
			images: [],
			pages: [],
			inspirations: [],
			tutorials: [],
			helps: [],
			examples: [],

			currentLinkKey: Object.keys(key2str)[0],
		}

		this.allowedVideoTypes = [
			'video/mp4',
			'video/webm',
			'video/ogg'
		];

		this.allowedVideoTypesReadable = [
			'mp4',
			'webm',
			'ogg'
		];

		this.allowedImageTypes = [
			'image/png',
			'image/jpeg',
			'image/bmp',
			'image/png',
			'image/webp',
			'image/svg+xml',
		];

		this.allowedImageTypesReadable = [
			'png',
			'jpeg',
			'bmp',
			'png',
			'webp',
			'svg',
		];

		this.allowedMediaTypes = [
			...this.allowedImageTypes,
			...this.allowedVideoTypes
		];

		this.maxFileSize = 2000000; // 2 mb
	}

	handleRemove(id, e) {
		const {images} = this.state,
			  selected_image = images.find(function(item) {
			  	return item.id == id;
			  });

		if(images.length > 1 && selected_image.isDirty) {
			this.removeImage(id);
		}
	}

	setID(id) {
		if(this.state.id !== undefined) return false;

		this.setState({id});

		this.autoSaveAll();
	}

	saveAll(data) {
		console.log('Saved', data);
	}

	autoSaveAll(data) {
		this.autoSaveAllTimeout = setTimeout(() => {
			this.saveAll(data);
		}, 2000);
	}

	startAutoSaveAll(data) {
		clearTimeout(this.autoSaveAllTimeout);

		this.autoSaveAll(data);
	}

	componentDidMount() {
		this.addTagify();
		this.addSortable();
		this.addDropzone();
		this.addToast();
		this.addSimplemde();
		this.addControllerForm();
	}

	addControllerForm() {
		const nav_empty_wrapper = document.querySelector('.nav-empty-wrapper')
		nav_empty_wrapper.insertAdjacentHTML('beforeEnd', 
			`<div class="ml-auto flex items-center">
				<div class="text-gray-600 text-sm mr-6">
					Saved
				</div>
				<button class="items-center bg-gradient text-white px-4 py-2 text-sm rounded mr-6 shadow-md hover:shadow-none flex">
					Publish Post
				</button>
			</div>`
		);
	}

	addToast() {
		this.toast = new Toast();
	}

	addSortable() {
		const el = document.querySelector('.image-files');

		if(el)
			this.sortable = Sortable.create(el, {
				handle: '.handle',
			});
	}

	addSimplemde() {
		const el = document.querySelector('.simplemde');

		if(el) {
			this.simplemde = new SimpleMDE({
				element: el,
				hideIcons: ['image', 'fullscreen', 'side-by-side', 'guide', 'heading-1'],
				status: false
			});
		}
	}

	addTagify() {
		this.tagify = new Tagify($('.tags'), {
		    enforceWhitelist : true,
		    whitelist        : [],
		    maxTags: 5,
		    editTags: false,
		    skipInvalid: true,
		    dropdown : {
		            highlightFirst: true,
		            maxItems: 7
		    },
		    placeholder: 'Pilih maksimal 5 tag',
		    templates : {
		        wrapper(input, settings){
		            return `<tags class="tagify focus-within:border-indigo-600 ${settings.mode ? "tagify--" + settings.mode : ""} ${input.className}"
	                            ${settings.readonly ? 'readonly aria-readonly="true"' : 'aria-haspopup="listbox" aria-expanded="false"'}
	                            role="tagslist">
						            <span tabindex="3" contenteditable data-placeholder="${settings.placeholder || '&#8203;'}" aria-placeholder="${settings.placeholder || ''}"
					                    class="tagify__input p-0 m-0 py-1 inline-block"
					                    role="textbox"
					                    aria-controls="dropdown"
					                    aria-autocomplete="both"
					                    aria-multiline="${settings.mode=='mix'?true:false}"></span>
                            </tags>`;
		        },

		        tag(value, tagData){
		                return `
			                <tag title='${tagData.title || value}'
		                                contenteditable='false'
		                                spellcheck='false'
		                                class='tagify__tag m-0 mr-2 rounded ${tagData['class'] ? tagData['class'] : ""}'
		                                ${this.getAttributes(tagData)}>
			                        <div>
		                                <span class='tagify__tag-text'>${value}</span>
			                        </div>
			                </tag>`;
		        },

		        dropdownItem( item ){
		            var mapValueTo = this.settings.dropdown.mapValueTo,
		                    value = (mapValueTo
		                            ? typeof mapValueTo == 'function'
		                                    ? mapValueTo(item)
		                                    : item[mapValueTo]
		                            : item.value) || item.value,
		                    sanitizedValue = (value || item).replace(/`|'/g, "&#39;");

		            return `<div ${this.getAttributes(item)}
	                            class='tagify__dropdown__item text-sm px-4 ${item['class'] ? item['class'] : ""}'
	                            tabindex="0"
	                            role="option"
	                            aria-labelledby="dropdown-label">${sanitizedValue}</div>`;
		        }
		    }
		})

		let controller, tagify = this.tagify;

		/**
		 * Tagify on input
		 */
		tagify.on('input', onInput);

		tagify.on('add', this.tagAddHandle.bind(this));
		tagify.on('remove', this.tagRemoveHandle.bind(this));

		/**
		 * Tagify on input handler
		 * @param  {Object} e Event
		 */
		function onInput( e ){
		    var value = e.detail.value;
		    tagify.settings.whitelist.length = 0;

		    controller && controller.abort();
		    controller = new AbortController();

		    tagify.loading(true).dropdown.hide.call(tagify)

		    fetch(routes.post_tags + '?value=' + value, {signal:controller.signal})
		    .then(RES => RES.json())
		    .then(function(whitelist){
		        tagify.settings.whitelist.splice(0, whitelist.length, ...whitelist)
		        tagify.loading(false).dropdown.show.call(tagify, value);
		    })
		    .catch((err) => {})
		}
	}

	tagAddHandle(e) {
		const { tags: old_tags } = this.state;

		const tags = [
			...old_tags,
			e.detail.data.id
		];

		this.setState({
			tags
		});

		this.startAutoSaveAll(tags);
	}

	tagRemoveHandle(e) {
		const { tags: old_tags } = this.state;

		const tags = [
			...old_tags.filter((tag) => {
				return tag !== e.detail.data.id;
			})
		];

		this.setState({
			tags
		});

		this.startAutoSaveAll(tags);
	}

	addDropzone() {
		const dropzone = $('.dropzone');

		function onDragover() {
			removes(dropzone.classList, 'border-gray-300');
			adds(dropzone.classList, 'border-indigo-600 bg-indigo-100');
		}

		function onDragdone() {
			adds(dropzone.classList, 'border-gray-300');
			removes(dropzone.classList, 'border-indigo-600 bg-indigo-100');
		}

		dropzone.addEventListener('dragover', function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.dataTransfer.dropEffect = 'move';

			onDragover();
		});

		dropzone.addEventListener('dragleave', function(e) {
			onDragdone();
		});

		dropzone.addEventListener('drop', (e) => {
			e.stopPropagation();
			e.preventDefault();

			onDragdone();

			let files = e.dataTransfer.files;

			this.handleFiles(files);
		});
	}

	handleFiles(files) {
		if(!(files instanceof FileList))
			files = files.target.files;

		// check uploader first
		this.isUploadAllowed()
		.then(() => {
			// if dataTransfer contains files
			if(files.length > 0) {
				// collect all files into an array
				files = [].slice.call(files);
				// iterate it
				files.forEach((file) => {
					// validate each file
					this.validateImage({
						selectedFile: file
					})
					.then(() => {
						// if file is an valid image file
						this.addImage({file}).then(({id, node}) => {
							this.handleImage(id, node, file);
						});
					})
					.catch((error) => {
						this.toast.add(error);
					});
				});
			}
		})
		.catch((error) => {
			this.toast.add(error);
		});
	}

	isUploadAllowed() {
		const { title } = this.state;

		return new Promise((resolve, reject) => {
			if(title.trim().length < 1) {
				return reject('😢&nbsp; Harap isi judul terlebih dahulu');
			}

			return resolve(true);
		});
	}

	generateID() {
		return new Date().valueOf();
	}

	/**
	 * Remove image from the state
	 * @param  {Integer} id Target image ID
	 */
	removeImage(id) {
		let images = [...this.state.images];
		images = images.filter(function(item) {
			return item.id !== id;
		});

		this.setState({
			images
		});
	}

	/**
	 * Add image to the state
	 * @return {Object}
	 */
	addImage({file=undefined}) {
		return new Promise((resolve, reject) => {
			const id = this.generateID();

			this.setState(prevState => {
				// collect images from previous state
				let images = [
						...prevState.images,
						{id, file},
					];

				return {
					images
				}
			}, () => {
				let node = $('.image-files').firstChild;

				return resolve({
					id,
					node
				});
			});
		});
	}

	validateImage({selectedFile: selected_file}) {
		return new Promise((resolve, reject) => {
			if(!this.allowedMediaTypes.includes(selected_file.type)) {
				return reject(`🚷&nbsp; Jenis berkas ${selected_file.name} tidak didukung`);
			}

			if(selected_file.size > this.maxFileSize) {
				return reject('🐠&nbsp; Ukuran berkas maks. 2MB');
			}

			return resolve();
		});
	}

	handleImage(id, element, selected_file) {
		const selected_file_type = selected_file ? selected_file.type : false;

		this.validateImage({
			selectedFile: selected_file 
		})
		.then(() => {
			let promise_preview;

			if(this.allowedImageTypes.includes(selected_file_type)) {
				promise_preview = function() {
					return new Promise((resolve, reject) => {
						let img = element.querySelector('img');
						// set selected image into the src attribute via createObjectURL API
						let url_media = URL.createObjectURL(selected_file);
						img.src = url_media;
						// show the image
						img.classList.remove('hidden');

						return resolve(url_media);
					});
				}
			}

			// if video
			if(this.allowedVideoTypes.includes(selected_file_type)) {
				promise_preview = function() { 
					return new Promise((resolve, reject) => {
						let video = element.querySelector('video'),
							video_source = video.querySelector('source'),
							canvas = element.querySelector('canvas'),
							ctx = canvas.getContext('2d'),
							img = element.querySelector('img');

						// set selected video to the source
						video_source.src = URL.createObjectURL(selected_file);
						// load the videeo
						video.load();

						// listen to meta data
						video.addEventListener('loadedmetadata', function() {
							// show the video player
							video.classList.remove('hidden');

							// set the canvas dimension as the video
							canvas.width = video.videoWidth;
							canvas.height = video.videoHeight;
				
							// make sure everthing is ok
							setTimeout(function() {
								// draw the image into the canvas silently
								ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
								// convert canvas to the base64 image format and set into the src attribute
								let url_media = canvas.toDataURL();
								img.src = url_media;
								// show the image!
								img.classList.remove('hidden');
								// hide the videeo player
								video.classList.add('hidden');

								return resolve(url_media);
							}, 500);
						});
					});
				}
			}

			promise_preview().then((url_media) => {
				const current_image = this.updateImage(id, {
					isDirty: true,
					status: 'UPLOADING',
					file: selected_file,
					isAbort: false,
					url: url_media
				});

				this.uploadImage(current_image);
			});
		});
	}

	findImageById(id) {
		let images = this.state.images;

		const current_image = images.find((item) => {
			return item.id == id;
		});

		return current_image;
	}

	/**
	 * Update image state by id
	 * @param  {Integer} id  Image ID
	 * @param  {Object} obj  New object
	 * @return {Object}      Updated object
	 */
	updateImage(id, obj) {
		// get images data from state
		let images = this.state.images;

		// find current image element in array by given id
		const current_image = this.findImageById(id);

		objExtend(current_image, obj);

		this.setState({
			images
		});

		return current_image;
	}

	abortImage(image) {
		image.controller.abort();

		this.removeImage(image.id);
	}

	uploadImage(image) {
		const { id } = this.state.id;

		let form_data = new FormData();

		if(id)
			form_data.append('id', id);

		form_data.append('image', image.file);

		image = this.updateImage(image.id, {
			controller: new AbortController()
		});

		fetch(routes.post_store, {
			method: 'POST',
			headers: {
			    'X-CSRF-TOKEN': token,
			    'Accept': 'application/json'
			},
			body: form_data,
			signal: image.controller.signal
		})
		.then(res => res.json())
		.finally(() => {

		})
		.then((data) => {
			console.log(data);

			const current_image = this.updateImage(image.id, {
				status: 'UPLOADED',
				isAbort: undefined,
				prod_url: data.res // change later
			});
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	componentDidUpdate() {
	}

	componentWillUnmount() {
	}

	keywordOnInput(e) {
		const keyword = e.target.value;

		this.setState({keyword});

		this.startAutoSaveAll({keyword});
	}

	titleOnInput(e) {
		const title = e.target.value;

		let data = {
			title
		}

		let auto_save_data = {title};

		if(!this.state.slugDirty) {
			data = {...data, slug: slugify(title)}
			auto_save_data = {...auto_save_data, slug: slugify(title)}
		}

		this.setState(data);

		this.startAutoSaveAll(auto_save_data);
	}

	slugOnInput(e) {
		const slug = slugify(e.target.value);

		this.setState({
			slug,
			slugDirty: true
		});

		this.startAutoSaveAll({slug});
	}

	slugOnBlur(e) {
		e.target.value = this.state.slug;
	}

	// thanks, dude! 
	// https://stackoverflow.com/a/14919494/3690607
	humanFileSize(bytes, si) {
	    var thresh = si ? 1000 : 1024;
	    if(Math.abs(bytes) < thresh) {
	        return bytes + ' B';
	    }
	    var units = si
	        ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
	        : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
	    var u = -1;
	    do {
	        bytes /= thresh;
	        ++u;
	    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
	    return bytes.toFixed(1)+' '+units[u];
	}

	uploadingImageStatus() {
		const images = this.state.images;

		let uploading_image = images.filter((image) => {
			return image.status == 'UPLOADING';
		});

		let uploaded_image = images.filter((image) => {
			return image.status == 'UPLOADED';
		});

		return {
			uploadingImage: uploading_image.length,
			totalImage: images.length,
			uploadedImage: uploaded_image.length
		};
	}

	isUploadingImage() {
		return this.uploadingImageStatus().uploadingImage > 0 ? true : false;
	}

	flattenedImageFormat(auto_save=false) {
		const { images } = this.state;

		let new_images = [];
		images.forEach(({status, caption, prod_url: url}) => {
			if(status == 'UPLOADED') {
				new_images.push({caption, url})
			}
		});

		if(auto_save)
			this.startAutoSaveAll({content: new_images});

		return new_images;
	}

	/**
	 * Set caption to the image by id
	 */
	setCaptionToImage() {
		const images = this.updateImage(this.currentImageId, {
			caption: this.simplemde.value()
		});

		this.flattenedImageFormat(true);
	}

	/**
	 * Caption autosave
	 */
	autoSaveCaption() {
		// run auto-save after 2000s (when user has no activity on the textarea)
		this.autoSaveTimeout = setTimeout(() => {
			this.setCaptionToImage();
		}, 2000);
	}

	/**
	 * Show caption modal
	 */
	showCaptionModal() {
		const caption_modal = $('.caption-modal');
		caption_modal.classList.remove('hidden');

		$('body').classList.add('overflow-hidden');
	}

	/**
	 * Start captioning
	 */
	setCaption(id) {
		this.currentImageId = id;

		// current image object
		const current_image = this.findImageById(id);

		// set value
		setTimeout(() => {
			if(current_image.caption) this.simplemde.value(current_image.caption);
			else this.simplemde.value('');
		}, 0);

		// show the modal first
		this.showCaptionModal();

		// when user typing
		this.simplemde.codemirror.on('change', () => {
			// clear the autosave timeout
			clearTimeout(this.autoSaveTimeout);

			// start auto-saving again
			this.autoSaveCaption();
		});
	}

	/**
	 * Close caption modal
	 */
	closeCaptionModal() {
		this.setCaptionToImage();

		delete this.currentImageId;

		clearTimeout(this.autoSaveTimeout);

		const caption_modal = $('.caption-modal');
		caption_modal.classList.add('hidden');

		$('body').classList.remove('overflow-hidden');
	}

	/**
	 * Set key to the current link key
	 * @param {String} key String given
	 */
	setLinkKey(key) {
		this.setState({
			currentLinkKey: key
		});

		this.checkButtonLinkDisabled();
	}

	/**
	 * Validate link
	 * @return {String} Link 	Link to be tested
	 */
	validateLink(link) {
		if(link.trim().length < 1) {
			return false;
		}else if(!validateUrl(link)) {
			return false;
		}

		return true;
	}

	allLinkInput() {
		const current_link_key = this.state.currentLinkKey;
		const all_current_input = document.querySelectorAll('[name=link-' + current_link_key + ']');

		return all_current_input;
	}

	lastLinkInput() {
		const all_current_input = this.allLinkInput();

		return all_current_input[all_current_input.length - 1];
	}

	/**
	 * Add link to the current key
	 */
	addLinkToKey() {
		const {currentLinkKey: current_link_key} = this.state;
		const current_link_data = this.state[current_link_key];
		const last_value = current_link_data[current_link_data.length - 1];

		const add_new_empty_link = () => {
			const new_link = {};
			new_link[current_link_key] = current_link_data;
			new_link[current_link_key].push({id: this.generateID(), value: ''});
			
			this.setState(new_link);
		}

		// first time link
		if(current_link_data.length == 0) {
			add_new_empty_link();
		}

		const invalid_input = this.getAllInvalidInputLink();

		if(invalid_input.length < 1) {
			setTimeout(() => {
				this.lastLinkInput().focus();
			}, 0);
		}

		if(invalid_input.length > 0) {
			invalid_input[0].focus();
		}

		if(
			last_value && 
			this.validateLink(last_value.value) &&
			invalid_input.length < 1
		) {
			add_new_empty_link();
		}

		this.checkButtonLinkDisabled();
	}

	currentLinkData() {
		const {currentLinkKey: current_link_key} = this.state;
		const current_link_data = this.state[current_link_key];

		return current_link_data;	
	}

	/**
	 * Transform link object to flattened array
	 * @param 	{Object} 	data 		Data to be flattened
	 * @param 	{Boolean} 	auto_save 	Run autosave?
	 * @return 	{Array} 	 			Flattened array
	 */
	flattenLinkFormat(data, auto_save=false) {
		let new_data = [];
		data[this.state.currentLinkKey].forEach((item) => {
			new_data.push(item.value);
		});

		let new_data_output = [];
		new_data_output[this.state.currentLinkKey] = new_data;

		// auto save link if there's no invalid link
		if(this.getAllInvalidInputLink().length < 1 && auto_save) {
			this.startAutoSaveAll(new_data_output);
		}

		return new_data_output;
	}

	/**
	 * Set link value to the state by id 
	 * @param {Integer} id Link id
	 * @param {String} value  Value to be added
	 */
	setLinkValueById(id, value) {
		const current_link_data = this.currentLinkData();
		const current_link_key = this.state.currentLinkKey;

		const current_link_object = current_link_data.find((item) =>{
			return item.id == id;
		});

		current_link_object.value = value;

		const updated_link_data = {};
		updated_link_data[current_link_key] = [
			...current_link_data
		];

		this.setState(updated_link_data);

		this.flattenLinkFormat(updated_link_data, true)
	}

	/**
	 * On link input blur
	 * @param  {Integer} id State id
	 * @param  {Event} 	 e     Input event
	 */
	linkInputHandle(id, e) {
		this.setLinkValueById(id, e.target.value);
	}

	/**
	 * Get all invalid input links
	 * @return 	{Array}
	 */
	getAllInvalidInputLink() {
		let invalid = [], current_input_name = 'link-' + this.state.currentLinkKey;

		document.querySelectorAll('[name=' + current_input_name + ']').forEach((input) => {
			if(!this.validateLink(input.value)) {
				invalid.push(input);
			}
		});

		return invalid;
	}

	removeLinkFromKey(id) {
		const current_link_data = this.currentLinkData();
		const current_link_key = this.state.currentLinkKey;

		const updated_link_data = {};
		updated_link_data[current_link_key] = [
			...current_link_data.filter((item) => {
				return item.id !== id;
			})
		];

		this.setState(updated_link_data);

		this.flattenLinkFormat(updated_link_data, true)

		this.checkButtonLinkDisabled();
	}

	linkKeydownHandle(e) {
		if(e.target) {
			let all_link_input = [].slice.call(this.allLinkInput()),
				current = all_link_input.indexOf(e.target);

			if(current == all_link_input.length - 1) {
				if(e.keyCode == 9) {
					e.preventDefault();
					
					this.addLinkToKey();
				}
			}
		}
	}

	linkKeyupHandle(e) {
		this.checkButtonLinkDisabled();
	}

	checkButtonLinkDisabled() {
		setTimeout(() => {
			const invalid = this.getAllInvalidInputLink();
			const current_link_data = this.currentLinkData();

			let submit_btn = document.querySelector('.add-link-btn');

			function enable_button() {
				submit_btn.classList.remove('pointer-events-none');
				submit_btn.classList.remove('opacity-75');
			}

			function disable_button() {
				submit_btn.classList.add('pointer-events-none');
				submit_btn.classList.add('opacity-75');								
			}

			// first time
			if(current_link_data.length < 1) return enable_button();

			if(invalid.length < 1 && current_link_data.length > 0) {
				enable_button();
			}else{
				disable_button();
			}
		}, 0);
	}

	render() {
		const { message } = this.props;
		const { title, slug, images, currentLinkKey: current_link_key } = this.state;
		const { 
			uploadingImage: uploading_image, 
			totalImage: total_image,
			uploadedImage: uploaded_image
		} = this.uploadingImageStatus();

		return (
			<>
				<div className="caption-modal overflow-y-auto fixed top-0 left-0 w-full h-full flex z-20 items-start justify-center hidden">
				    <div className="fixed bg-black opacity-50 w-screen h-screen"></div>
				    <div className="p-10 my-0 md:my-10 sm:w-6/12 lg:w-6/12 md:w-8/12 w-full h-full md:h-auto bg-white relative md:rounded shadow-lg">
				        <div onClick={this.closeCaptionModal.bind(this)} className="absolute top-0 right-0 bg-red-600 w-10 h-10 rounded-bl text-center cursor-pointer hover:bg-red-700 flex items-center justify-center"><svg className="inline-block w-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg></div>
				        <h2 className="text-xl font-bold">Tentukan Deskripsi</h2>
				        <p className="text-sm text-gray-600 mt-2 leading-relaxed">Berikan deskripsi pada slide ini. Kamu dapat mengosongkan deskripsi bila tidak ada.</p>
				        <div className="mt-6">
				        	<textarea className="simplemde"></textarea>
				        </div>
				        <button onClick={this.closeCaptionModal.bind(this)} className="bg-indigo-600 p-6 text-sm text-white font-semibold rounded shadow block w-full text-center" type="button">Simpan Perubahan</button>
				    </div>
				</div>
			    <div className="container mx-auto px-4 sm:px-0">
			        <div className="flex py-12 -mx-4 justify-center">
			            <div className="w-full lg:w-6/12 px-4 md:w-8/12">
							<div className="border-2 border-gray-200 p-8 rounded">
						        <h1 className="text-indigo-600 text-xl font-semibold">Buat Post</h1>
						        <p className="mb-4 mt-2 text-sm text-gray-600">Bagikan pengetahuan kamu dengan developer lain; begitu pula dengan developer lain, mereka akan melakukan hal serupa.</p>

								<div className="mb-6 mt-6">
									<label className="mb-1 text-sm inline-block text-gray-600">Judul</label>
									<input onChange={this.titleOnInput.bind(this)} type="text" name="title" className="text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" autoComplete="off" tabIndex="1" />
								</div>
								<div className="mb-6 mt-6">
									<label className="mb-1 text-sm inline-block text-gray-600">Slug</label>
									<input onChange={this.slugOnInput.bind(this)} onBlur={this.slugOnBlur.bind(this)} type="text" name="slug" className="text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" autoComplete="off" defaultValue={slug} tabIndex="2" />
									<p className="mt-2 text-sm text-indigo-600">{routes.single.replace(/slug/g, '') + slug}</p>
								</div>
								<div className="mb-6">
									<label className="mb-1 text-sm inline-block text-gray-600">Topik</label>
									<input type="text" name="tags[]" className="tags text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" tabIndex="3" />
								</div>
								<div>
									<label className="mb-1 text-sm inline-block text-gray-600">Design Keyword <span className="text-xs">(Optional)</span></label>
									<input onChange={this.keywordOnInput.bind(this)} type="text" name="keyword" className="text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" tabIndex="4" />
									<p className="mt-2 text-xs text-indigo-600">
										<span className="tooltip cursor-help border-b border-dotted border-indigo-600" data-title="Keyword ini bukan untuk SEO, melainkan digunakan untuk mencari inspirasi desain ke situs di luar Kodinger, seperti Dribbble, Behance, atau Uplabs. Jadi, bila kamu sedang membahas library carousel, maka kamu dapat mengisi keyword dengan 'carousel'. Lalu, sistem akan menggunakan kata 'carousel' tadi untuk digunakan sebagai keyword pencarian ke 3 situs tadi.">
											Saya harus mengisi ini dengan apa?
										</span>
									</p>
								</div>
							</div>

							<div className="border-2 border-gray-200 p-8 rounded mt-10">
						        <h2 className="text-indigo-600 mb-4 text-xl font-semibold">Media</h2>

								<div className="mb-6">
									<div className="dropzone rounded-lg border-2 border-dashed border-gray-300 w-full flex items-center justify-center">
										<div className="p-20 text-center">
											<h4 className="text-xl">Tarik gambar atau video kamu ke sini</h4>
											<p className="text-sm mt-2 text-gray-600">
												Maksimal: 2MB. Format yang didukung: {[...this.allowedImageTypesReadable, ...this.allowedVideoTypesReadable].join(', ')}
											</p>
											<label className="mt-6 text-indigo-600 font-semibold inline-block cursor-pointer" htmlFor="images-input" tabIndex="5">Browse</label>
											<input type="file" multiple id="images-input" className="hidden" onChange={this.handleFiles.bind(this)} />
										</div>
									</div>

									{images.length > 0 && (
										<>
											<div className="mt-6 text-xs uppercase font-semibold tracking-wider mb-2 text-gray-600">
												Media yang dipilih { this.isUploadingImage() ? '(' + uploaded_image + '/' + total_image + ')' : '' }
											</div>
										</>
									)}
									<div className="image-files">
										{ images.map((image) => {
											return (
												<div key={image.id} className="bg-white flex justify-center w-full mb-4 rounded border-2 border-gray-200 hover:border-gray-400">
													<div className="handle flex-shrink-0 p-2 items-center flex border-r-2 border-gray-200 bg-gray-100 mr-4 cursor-move">
														<svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current text-gray-600" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>
													</div>
													<div className="w-16 h-16 mr-4 flex-shrink-0 py-4">
														<img className={'rounded' + (image.url ? '' : ' hidden')} src={image.url ? image.url : null} />
														<video className="hidden" controls><source /></video>
														<canvas className="hidden"></canvas>
													</div>
													<div className="w-full py-4 pr-4">
														<div className={'text-xs float-right font-semibold tracking-wider inline-block' + (image.status == 'UPLOADED' ? ' text-teal-600' : ' text-orange-600')}>{image.status}</div>
														<div className="text-indigo-600 mb-1">{image.file.name}</div>
														<div className="text-xs text-gray-600">{this.humanFileSize(image.file.size)}</div>
														<div className="flex mt-2 text-sm">
														{(!image.isAbort && image.isAbort !== undefined) &&
															<div className="cursor-pointer text-red-600" onClick={this.abortImage.bind(this, image)}>Batalkan</div>
														}
														{(image.isDirty && (image.isAbort == undefined && !image.isAbort)) &&
															<>
																<div onClick={this.removeImage.bind(this, image.id)} className="text-red-600 cursor-pointer">Hapus</div>
																<div onClick={this.setCaption.bind(this, image.id)} className="text-teal-600 cursor-pointer ml-4">Tentukan Deskripsi</div>
															</>
														}
														</div>
													</div>
												</div>
											);
										}) }
									</div>
								</div>
							</div>
							<div className="border-2 border-gray-200 p-8 rounded mt-10">
						        <h2 className="text-indigo-600 mb-4 text-xl font-semibold">Tautan <span className="text-xs text-gray-600">(Optional)</span></h2>
						        <p className="mb-4 mt-2 text-sm text-gray-600">Post yang baik menyertakan beberapa referensi yang dingunakan sebagai dasar pikiran.</p>

						        <div className="flex mb-4 overflow-x-auto flex-no-wrap">
						        	{ Object.keys(key2str).map((name, index) => {
							        	return (
							        		<div 
							        			onClick={this.setLinkKey.bind(this, name)}
							        			key={name} 
							        			className={'px-4 py-2 border-t border-r border-b '+ (current_link_key == name ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100') +' cursor-pointer border-gray-200 text-sm flex-1 justify-center flex items-center text-center' + (index == 0 ? ' border-l rounded-tl rounded-bl' : (index == Object.keys(key2str).length - 1 ? ' rounded-tr rounded-br' : ''))}
							        		>
							        			{key2str[name]}
							        		</div>
						        		);
							        })}
						        </div>

			            		<div className="bg-gray-100 border border-gray-200 rounded p-4">
		            				<div className="list">
		            					{ this.state[current_link_key].map((link, id) => {
				            				return (
				            					<div key={link.id} className="bg-white shadow rounded mb-4 text-sm text-blue-500 flex">
					            					<input onKeyDown={this.linkKeydownHandle.bind(this)} onKeyUp={this.linkKeyupHandle.bind(this)} onChange={this.linkInputHandle.bind(this, link.id)} tabIndex="6" type="text" name={'link-' + current_link_key} placeholder="Contoh: https://kodinger.com/tutorial-javascript" className="url w-full py-3 px-4 rounded outline-none" defaultValue={link.value} />
					            					<button type="button" onClick={this.removeLinkFromKey.bind(this, link.id)} className="uppercase font-semibold bg-red-500 text-white px-4 flex items-center cursor-pointer hover:bg-red-600 rounded-tr rounded-br">Hapus</button>
					            				</div>
			            					);
				            			})}
				            		</div>

			            			<button type="button" onClick={this.addLinkToKey.bind(this)} tabIndex="7" className="add-link-btn bg-white w-full shadow rounded py-3 px-4 text-sm text-blue-500 text-center cursor-pointer hover:bg-indigo-600 hover:text-white">Tambah URL</button>
			            		</div>
					        </div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Form;