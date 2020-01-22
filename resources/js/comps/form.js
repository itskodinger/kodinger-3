import React, { Component } from 'react';
import slugify from '../utils/slugify';
import objExtend from '../utils/obj-extend';
import adds from '../utils/adds';
import removes from '../utils/removes';
import Sortable from 'sortablejs';
import SimpleMDE from 'simplemde/dist/simplemde.min.js';
import Tagify from '@yaireo/tagify';
import 'simplemde/dist/simplemde.min.css';

class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: '',
			slug: '',
			tags: [],
			images: [],
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

		this.maxFileSize = 2000000;
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

	componentDidMount() {
		this.addTagify();
		this.addSortable();
		this.addSimplemde();
		this.addDropzone();
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
				hideIcons: ['image', 'fullscreen', 'side-by-side', 'guide'],
				status: false
			});
		}
	}

	addTagify() {
		this.tagify = new Tagify($('.tags'), {
		    enforceWhitelist : true,
		    whitelist        : [],
		    maxTags: 5,
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
						            <span contenteditable data-placeholder="${settings.placeholder || '&#8203;'}" aria-placeholder="${settings.placeholder || ''}"
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
			                        <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
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
		tagify.on('input', onInput)

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
		}
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

			this.isUploadAllowed()
			.then(() => {
				if(files.length > 0) {
					files = [].slice.call(files);
					files.forEach((file) => {
						this.validateImage({
							selectedFile: file
						})
						.then(() => {
							this.addImage({file}).then(({id, node}) => {
								this.handleImage(id, node, file);
							});
						});
					});
				}
			});
		});
	}

	isUploadAllowed() {
		const { title } = this.state;

		return new Promise((resolve, reject) => {
			if(title.trim().length < 1) {
				return reject('Harap isi judul terlebih dahulu');
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
						{id, file},
						...prevState.images,
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
				return reject('Image type not supported');
			}

			if(selected_file.size > this.maxFileSize) {
				return reject('Max size is 2 MB');
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
		const current_image = images.find((item) => {
			return item.id == id;
		});

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
		let form_data = new FormData();
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
				isAbort: undefined
			});
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	submitMedia(e) {
		e.preventDefault();
		return this.handleStep('caption');

		const body = this.state;

		let form_data = new FormData();

		form_data.append('title', body.title);
		form_data.append('slug', body.slug);

		body.images.forEach(image => {
			form_data.append('images', image.file);
		});

		fetch(routes.post_store, {
			method: 'POST',
			headers: {
			    'X-CSRF-TOKEN': token,
			    'Accept': 'application/json'
			},
			body: form_data
		})
		.then(res => res.json())
		.then(function(data) {
			console.log(data);
		})
		.catch(function(error) {
			console.log(error);
		});

		e.preventDefault();
	}

	componentDidUpdate() {
	}

	componentWillUnmount() {
	}

	titleOnInput(e) {
		this.setState({
			title: e.target.value,
			slug: slugify(e.target.value)
		});
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

	render() {
		const { message } = this.props;
		const { title, slug, images, currentStep } = this.state;
		const { 
			uploadingImage: uploading_image, 
			totalImage: total_image,
			uploadedImage: uploaded_image
		} = this.uploadingImageStatus();

		return (
			<>
			    <div className="container mx-auto px-4 sm:px-0">
			        <div className="flex py-12 -mx-4 justify-center">
			            <div className="w-full lg:w-6/12 px-4 md:w-8/12">
							<div className="border-2 border-gray-200 p-8 rounded">
						        <h1 className="text-indigo-600 text-xl font-semibold">Buat Post</h1>
						        <p className="mb-4 mt-2 text-sm text-gray-600">Bagikan pengetahuan kamu dengan developer lain; begitu pula dengan developer lain, mereka akan melakukan hal serupa.</p>

								<div className="mb-6 mt-6">
									<label className="mb-1 text-sm inline-block text-gray-600">Judul</label>
									<input onChange={this.titleOnInput.bind(this)} type="text" name="title" className="text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" />
									<p className="mt-2 text-sm text-indigo-600">{routes.single.replace(/slug/g, '') + slug}</p>
								</div>
								<div>
									<label className="mb-1 text-sm inline-block text-gray-600">Topik</label>
									<input type="text" name="tags[]" className="tags text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" />
								</div>
							</div>

							<div className="border-2 border-gray-200 p-8 rounded mt-10">
						        <h2 className="text-indigo-600 mb-4 text-xl font-semibold">Media</h2>

								<div className="mb-6">
									<div className="dropzone rounded-lg border-2 border-dashed border-gray-300 w-full flex items-center justify-center mb-4">
										<div className="p-20 text-center">
											<h4 className="text-xl">Tarik gambar atau video kamu ke sini</h4>
											<p className="text-sm mt-2 text-gray-600">
												Maksimal: 2MB. Format yang didukung: {[...this.allowedImageTypesReadable, ...this.allowedVideoTypesReadable].join(', ')}
											</p>
											<p className="mt-6 text-indigo-600 font-semibold">Browse</p>
										</div>
									</div>

									{images.length > 0 && (
										<>
											<div className="text-xs uppercase font-semibold tracking-wider mb-2 text-gray-600">
												Media yang dipilih { this.isUploadingImage() ? '(' + uploaded_image + '/' + total_image + ')' : '' }
											</div>
										</>
									)}
									<div className="image-files">
										{ images.map((image) => {
											return (
												<div key={image.id} className="flex justify-center w-full mb-4 rounded border-2 border-gray-200 hover:border-gray-400">
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
															<div onClick={this.removeImage.bind(this, image.id)} className="text-red-600 cursor-pointer">Hapus</div>
														}
														</div>
													</div>
												</div>
											);
										}) }
									</div>
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