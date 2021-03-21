import React, { Component } from 'react';
import slugify from '../utils/slugify';
import validateUrl from '../utils/validate-url';
import objExtend from '../utils/obj-extend';
import Toast from './toast';
import adds from '../utils/adds';
import removes from '../utils/removes';
import Sortable from 'sortablejs';
// import SimpleMDE from 'simplemde/dist/simplemde.min.js';
// import 'simplemde/dist/simplemde.min.css';
import Tagify from '@yaireo/tagify';
import he from 'he';

/** INI HARUSNYA SEPARATION OF CONCERN AWKOAWKOWAK
 *
 * TAU LU, BUKANYA DI SEPARATION OF CONCERN, MAKANYA MAIN JUDI DULU
 */

class Form extends Component {

	constructor(props) {
		super(props);

		this.postData = {
			title: 'Buat Slide Post',
			titleEdit: 'Sunting Slide Post',
			description: <>Bagikan pengetahuan kamu dengan developer lain; begitu pula dengan developer lain, mereka akan melakukan hal serupa. <a className="text-indigo-600 border-b border-indigo-600" target="_blank" href={routes.docs + '/content'}>Pelajari selengkapnya</a> tentang membuat konten dan <a className="text-indigo-600 border-b border-indigo-600" target="_blank" href={routes.docs + '/content'}>best practice</a>-nya.</>
		}

		if(props.postType == 'markdown') {
			this.postData = {
				title: 'Buat Markdown Post',
				titleEdit: 'Sunting Markdown Post',
				description: <>Menulis artikel dengan sintaksis Markdown. Cocok untuk menulis opini, tutorial, atau semacamnya.</>
			}
		}

		this.state = {
			edit: false,
			id: false,
			title: '',
			slug: '',
			slugDirty: false,
			keyword: '',
			tags: [],
			content: '',
			images: [],
			pages: [],
			tutorials: [],
			helps: [],
			examples: [],
			publicFolder: false,
			status: 'DRAFT',
			publish: false,
			statusSaving: '',
			cover: '',
			editorMaximized: false,
			editorState: 'editor',

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

		this.maxFileSize = 10000000; // 10 mb
	}

	isMarkdownPost() {
		return this.props.postType == 'markdown';
	}

	isSlidePost() {
		return this.props.postType == 'slide';
	}

	/**
	 * Get initial data
	 */
	loadData() {
		const url = new URL(window.location.href);
		let path = url.pathname.split(/\/post-slide\//g);

		if(this.isMarkdownPost())
			path = url.pathname.split(/\/post-md\//g);

		if(path[1]) {
			const id = path[1];

			this.setID(id);
			this.setState({
				stateStatus: 'LOADING'
			});

			this.getDataById(id)
			.then(data => {
				this.setState({
					stateStatus: 'LOADED',
					...data
				});

				this.addDOMFunctionality({
					defaultTags: data.tagify
				});
			});
		}
	}

	getDataById(id) {
		return new Promise((resolve, reject) => {
			this.request({
				route: routes.post_edit.replace(/id/g, id),
				method: 'GET'
			})
			.then(({
				data: {
					content,
					title,
					slug,
					keyword,
					tag_ids: tags = [],
					tagify,
					pages_object: pages,
					examples_object: examples,
					helps_object: helps,
					tutorials_object: tutorials,
					public_folder: publicFolder,
					status,
					cover
				}
			}) => {
				return resolve({
					content,
					title,
					slug,
					images: this.isMarkdownPost() ? [] : this.parseImagesJSON(content),
					tags: [...tags.map(tag => typeof tag == 'object' ? tag.id : tag)],
					tagify,
					keyword,
					pages,
					examples,
					helps,
					tutorials,
					slugDirty: true,
					publicFolder,
					edit: true,
					publish: true,
					status,
					statusSaving: status,
					cover
				});
			});
		});
	}

	parseImagesJSON(json) {
		if(!json) return [];
		// parse
		json = JSON.parse(json);

		// restructure object
		return ((newImages, images) => {
			images.forEach((image, key) => {
				newImages[key] = {...image};
				if(image.single_caption) newImages[key].singleCaption = image.single_caption;
				newImages[key].videoThumbnailUrl = image.video_thumbnail_url;
				newImages[key].videoThumbnailName = image.video_thumbnail_name;
			});

			return newImages;
		})([], json);
	}

	handleRemove(id, e) {
		const {images} = this.state,
			  selectedImage = images.find(function(item) {
			  	return item.id == id;
			  });

		if(images.length > 1 && selectedImage.isDirty) {
			this.removeImage(id);
		}
	}

	setID(id) {
		if(this.state.id !== false) return false;

		this.setState({id});

		window.history.pushState({}, null, (this.isMarkdownPost() ? '/post-md/' : '/post-slide/') + id);
	}

	setPublicFolder(publicFolder) {
		if(this.state.publicFolder !== false) return false;

		this.setState({publicFolder});
	}

	saveAll(data) {
		const { id, title, slug, statusSaving } = this.state;

		// if(!title || !slug) return this.toast.add('❓&nbsp; Auto-save akan jalan ketika kamu sudah mengisi judul dan slug');

		this.statusSaving();

		this.saveContentController && clearTimeout(this.saveContentController);
		this.saveContentController = new AbortController();

		let body = data;

		if(id) body = {...body, id};

		body = JSON.stringify(body);

		this.request({
			route: routes.post_update.replace(/slug/g, id),
			body,
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'PUT',
			signal: this.saveContentController.signal
		}).then(({data}) => {
			this.statusSaved();

			this.isContentDirty = false;
		});
	}

	autoSaveAll(data, time) {
		this.autoSaveAllTimeout = setTimeout(() => {
			this.saveAll(data);
		}, time);
	}

	startAutoSaveAll(data, time=5000) {
		const { id, statusSaving } = this.state;

		// reject
		if(!id || statusSaving.toUpperCase() == 'PROCESSING') return false;
		if((this.isSlidePost() && this.isUploadingImage()) || (this.isMarkdownPost() && this.uploadingCover)) return false;

		this.isContentDirty = true;

		clearTimeout(this.autoSaveAllTimeout);

		if(time === true) time = 0;
		this.autoSaveAll(data, time);
	}

	request(options) {
		return new Promise((resolve, reject) => {
			this._request(options)
			.then((data) => {
				return resolve(data);
			})
			.catch(({err, data}) => {
				if(err && !err.ok) {
					switch(err.status) {
						case 422:
							const {errors} = data;
							const firstKey = Object.keys(errors)[0];
							const firstError = errors[firstKey][0];

							if(firstKey == 'slug') {
								this.setState({
									slugOk: false
								});
							}

							this.toast.add(`😠&nbsp; ${firstError}`);
						break;

						case 500:
							this.toast.add(`😭&nbsp; Error 500: ${data.message}`);
						break;

						case 504:
							this.toast.add(`🐌&nbsp; Error 504: ${data.message}`);
						break;
					}

					this.statusFailed();
				}

				return reject(err);
			});
		});
	}

	async _request({ route, body, method, signal, headers }) {
		headers = Object.assign({
			'X-CSRF-TOKEN': token,
			'Accept': 'application/json'
		}, headers);

		const response = await fetch(route, {
			method,
			headers,
			signal,
			body
		});

		const json = await response.json();

		if(!response.ok) return Promise.reject({err: response, data: json});

		return Promise.resolve(json);
	}

	componentDidMount() {
		this.loadData();
		this.addToast();

		// unsaved changes!
		window.onbeforeunload = () => {
			if(this.state.id && this.isContentDirty) {
				return true;
			}
		}
	}

	addDOMFunctionality(options) {
		let defaultTags = [];
		if(options) defaultTags = options.defaultTags;

		setTimeout(() => {
			this.addTagify({defaultTags});

			if(this.isSlidePost()) {
				this.addSortable();
				this.addDropzone();
			}
			this.addKeyboardShortcut();
		}, 0);
	}

	publishWholeContent(data) {
		this.saveWholeContent(data)
		.then(() => {
			window.location.reload();
		})
		.catch((err) => {
			console.log(err);
		});
	}

	async saveWholeContent(objectData={}, route=false) {
		return new Promise((resolve, reject) => {
			// basic data
			const { title, slug, tags, cover, keyword, id, content } = this.state;

			if(!route) route = routes.post_publish.replace(/slug/g, id);

			// images
			const images = this.flattenedImageFormat();

			// validation
			if(this.isSlidePost() && this.isUploadingImage()) {
				this.toast.add(`🖼&nbsp; Sedang mengunggah media, post akan otomatis tersimpan bila proses telah selesai`);

				return reject();
			}else if(this.isSlidePost() && this.isDeletingImage()) {
				this.toast.add(`🐌&nbsp; Sedang menghapus media, post akan otomatis tersimpan bila proses telah selesai`);

				return reject();
			}else if(this.isSlidePost() && objectData && objectData.status.toUpperCase() == 'PUBLISH' && images.length < 1) {
				this.toast.add(`🐡&nbsp; Tidak ada gambar satu pun`);

				return reject();
			}else if(this.isSlidePost() && objectData && objectData.status.toUpperCase() == 'PUBLISH' && images.length > 0 && (!images[0].caption || images[0].caption.trim().length < 1)) {
				this.toast.add(`😏&nbsp; Slide pertama gambar harus diisi caption`);

				return reject();
			}else if(this.isMarkdownPost() && this.uploadingCover) {
				this.toast.add(`😏&nbsp; Tunggu, sedang mengunggah cover.`);

				return reject();
			}else if(this.isMarkdownPost() && !content) {
				this.toast.add(`😏&nbsp; Harap isi konten post`);

				return reject();
			}

			const body = Object.assign({
				title,
				slug,
				tags,
				keyword,
				cover,
				content: this.isSlidePost() ? JSON.stringify(images) : content,
				type: this.isMarkdownPost() ? 'markdown': null
			}, objectData);

			Object.keys(key2str).forEach((key) => {
				body[key] = this.doFlattenLinkFormat(key);
			});

			this.setState({
				statusSaving: 'Processing',
				publish: false
			});

			clearTimeout(this.autoSaveAllTimeout);

			this.request({
				method: 'PUT',
				route,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			})
			.then(() => {
				this.isContentDirty = false;
				this.statusSaved();

				return resolve(body);
			})
			.finally(() => {
				this.enablePublish();
			})
			.catch(() => {});
		});
	}

	disablePublish() {
		this.setState({
			publish: false
		});
	}

	enablePublish() {
		this.setState({
			publish: true
		});
	}

	statusSaving() {
		this.setState({
			publish: false,
			statusSaving: 'Saving'
		});
	}

	statusSaved() {
		this.setState({
			publish: true,
			statusSaving: 'Saved'
        }, () => {
            this.toast.add('💾&nbsp; Post disimpan secara otomatis.')
        });

	}

	statusFailed() {
		this.setState({
			statusSaving: 'Failed'
		});
	}

	addToast() {
		this.toast = new Toast();
	}

	addKeyboardShortcut() {
		const { status, id } = this.state;

		window.addEventListener('keydown', (e) => {
			const key = this.isMac() ? 'metaKey' : 'ctrlKey';

			if(status == 'draft' && (e[key] && e.key == 's')) {
				e.preventDefault();

				if(!this.isContentDirty) return this.toast.add('🤘&nbsp; Post sudah tersimpan sebagai draft');

				this.saveWholeContent({status: 'draft'}, routes.post_update.replace(/slug/g, id))
				.then(() => {
					this.toast.add(`🖖&nbsp; Post sudah disimpan sebagai draft`);
				}).catch(() => {});
			}

            if(( (e[key] && e.keyCode == '59') || (e[key] && e.keyCode == '186')) && this.state.editorMaximized) {
                e.preventDefault();

                if( this.state.editorState == 'editor' ) {
                    this.setState({editorState: 'preview'});
                    document.getElementById('previewButton').click();
                }
                else
                {
                    this.setState({editorState: 'editor'});
                    document.getElementById('editorButton').click();
                }


                this.toast.add(`Pindah ke mode ${this.state.editorState.charAt(0).toUpperCase()}${this.state.editorState.slice(1)}.`);

            }

            if( e.keyCode == '27' && this.state.editorMaximized) {
                e.preventDefault();

                document.getElementById('maximizeButton').click();

            }

		});
	}

	addSortable() {
		const el = document.querySelector('.image-files');

		if(el)
			this.sortable = Sortable.create(el, {
				dataIdAttr: 'data-id',
				handle: '.handle',
				onUpdate: (e) => {
					function arrayMove(arr, oldIndex, newIndex) {
					    if (newIndex >= arr.length) {
					        var k = newIndex - arr.length + 1;
					        while (k--) {
					            arr.push(undefined);
					        }
					    }
					    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
					    return arr;
					};

					this.setState({
						images: arrayMove(this.state.images, e.oldIndex, e.newIndex)
					});

					this.flattenedImageFormat(true);
				},
			});
	}

	// addSimplemde() {
	// 	const el = document.querySelector('.simplemde');

	// 	if(el) {
	// 		this.simplemde = new SimpleMDE({
	// 			element: el,
	// 			hideIcons: ['image', 'fullscreen', 'side-by-side', 'guide', 'heading-1'],
	// 			status: false
	// 		});
	// 	}
	// }

	addTagify({defaultTags}) {
		this.tagify = new Tagify($('.tags'), {
		    enforceWhitelist : true,
		    whitelist        : defaultTags ? [...defaultTags] : [],
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
	                            class='tagify__dropdown__item px-4 ${item['class'] ? item['class'] : ""}'
	                            tabindex="0"
	                            role="option"
	                            aria-labelledby="dropdown-label">${sanitizedValue}</div>`;
		        }
		    }
		});

		if(defaultTags) {
			this.tagify.addTags([...defaultTags]);
		}

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
		    .then(res => res.json())
		    .then(function(whitelist){
		        tagify.settings.whitelist.splice(0, whitelist.length, ...whitelist)
		        tagify.loading(false).dropdown.show.call(tagify, value);
		    })
		    .catch((err) => {})
		}
	}

	tagAddHandle(e) {
		const { tags: oldTags } = this.state;

		const tags = [
			...oldTags,
			e.detail.data.id
		];

		this.setState({
			tags
		});

		this.startAutoSaveAll({tags});
	}

	tagRemoveHandle(e) {
		const { tags: oldTags } = this.state;

		const tags = [
			...oldTags.filter((tag) => {
				return tag !== e.detail.data.id;
			})
		];

		this.setState({
			tags
		});

		this.startAutoSaveAll({tags});
	}

	addDropzone() {
		const dropzone = $('.dropzone');

		if(!dropzone) return;

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
		const { id, title, slug, slugOk } = this.state;

		return new Promise((resolve, reject) => {
			// if(!id && title.trim().length < 1) {
			// 	return reject('😢&nbsp; Harap isi judul terlebih dahulu');
			// }else if(!id && slug.trim().length < 1) {
			// 	return reject('😭&nbsp; Eh, slug-nya belum diisi');
			// }else if(!id && !slugOk) {
			// 	return reject('😹&nbsp; slug-nya benerin dulu, kak');
			// }

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
	removeImage(id, force=false) {
		const currentImage = this.findImageById(id);
		const { publicFolder: public_folder } = this.state;

		if(currentImage.status !== 'DELETING' && force !== true) {
			const ask = confirm("Gambar akan dihapus dan tidak dapat dikembalikan. Lanjutkan?");

			if(!ask) return false;
		}

		const deletingImages = this.state.images.filter((img) => {
			return img.status == 'DELETING';
		});

		if(currentImage.status == 'DELETING')
			return this.toast.add(`😙&nbsp; Penghapusan gambar ${currentImage.name ? currentImage.name : currentImage.file.name} masih proses`)

		// uncomment this if you want sync instead of async deleting process
		// else if(deletingImages.length > 0)
		// 	return this.toast.add(`😙&nbsp; Sabar, masih menghapus gambar yang lain`)

		function updateState(autoSave) {
			this.setState(({images}) => {
				images = images.filter(function(item) {
					return item.id !== id;
				});

				return {images};
			}, () => {
				if(autoSave) {
					this.flattenedImageFormat(true);
					this.statusSaved();
				}
			});
		}

		if(currentImage.status !== 'UPLOADED') {
			updateState.call(this);
		}else{
			this.isContentDirty = true;

			this.request({
				route: routes.post_delete_image,
				method: 'DELETE',
				headers: {
				    'Content-Type': 'application/json'
				},
				body: JSON.stringify({name: currentImage.name, public_folder}),
			})
			.then(({status}) => {
				if(status) updateState.call(this, true);
			})
			.catch((error) => {
			});

			this.updateImage(id, {
				status: 'DELETING'
			});
		}
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
						{id, file, status: 'PREPARING'},
					];

				return {
					images
				}
			}, () => {
				let node = $('.image-files').lastChild;

				return resolve({
					id,
					node
				});
			});
		});
	}

	validateImage({selectedFile}) {
		return new Promise((resolve, reject) => {
			if(!this.allowedMediaTypes.includes(selectedFile.type)) {
				return reject(`🚷&nbsp; Jenis berkas ${selectedFile.name} tidak didukung`);
			}

			if(selectedFile.size > this.maxFileSize) {
				return reject('🐠&nbsp; Ukuran berkas maks. 10MB');
			}

			return resolve();
		});
	}

	handleImage(id, element, selectedFile) {
		const selectedFileType = selectedFile ? selectedFile.type : false;

		this.validateImage({
			selectedFile
		})
		.then(() => {
			const promisePreview = () => {
				return new Promise((resolve, reject) => {
					if(this.allowedImageTypes.includes(selectedFileType)) {
						let img = element.querySelector('img');
						// set selected image into the src attribute via createObjectURL API
						let urlMedia = URL.createObjectURL(selectedFile);
						img.src = urlMedia;
						// show the image
						img.classList.remove('hidden');

						return resolve(urlMedia);
					}else if(this.allowedVideoTypes.includes(selectedFileType)) {
						let video = element.querySelector('video'),
							videoSource = video.querySelector('source'),
							canvas = element.querySelector('canvas'),
							ctx = canvas.getContext('2d'),
							img = element.querySelector('img');

						// set selected video to the source
						videoSource.src = URL.createObjectURL(selectedFile);
						// load the videeo
						video.load();

						// listen to meta data
						video.addEventListener('canplay', function() {
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
								let urlMedia = canvas.toDataURL();
								img.src = urlMedia;
								// hide the video player
								video.classList.add('hidden');
								// show the image!
								img.classList.remove('hidden');

								return resolve(urlMedia);
							}, 1000);
						});
					}else{
						return reject({
							error: 'Unsupported file type'
						});
					}

				});
			}

			promisePreview().then((urlMedia) => {
				const currentImage = this.updateImage(id, {
					isDirty: true,
					status: 'UPLOADING',
					file: selectedFile,
					isAbort: false,
					url: urlMedia
				});

				this.uploadImage(currentImage);
			})
			.catch(error => console.log(error));
		});
	}

	findImageById(id) {
		let images = this.state.images;

		const currentImage = images.find((item) => {
			return item.id == id;
		});

		return currentImage;
	}

	/**
	 * Update image state by id
	 * @param  {Integer|Object} idOrObj  Image ID or image object
	 * @param  {Object} obj  New object
	 * @return {Object}      Updated object
	 */
	updateImage(idOrObj, obj) {
		// get images data from state
		let images = this.state.images;

		// find current image element in array by given id
		const currentImage = typeof idOrObj == 'object' ? idOrObj : this.findImageById(idOrObj);

		objExtend(currentImage, obj);

		this.setState({
			images
		});

		return currentImage;
	}

	abortImage(image) {
		this.statusSaved();

		image.controller.abort();

		this._removeImage(image.id);
	}

	_removeImage(id) {
		this.setState(({images}) => ({
			images: images.filter(item => item.id !== id)
		}));
	}

	uploadImage(image) {
		const { id, publicFolder } = this.state;

		let formData = new FormData();

		if(id)
			formData.append('id', id);

		if(publicFolder)
			formData.append('public_folder', publicFolder);

		formData.append('image', image.file);
		formData.append('name', image.file.name);
		// is video
		if(image.file && this.allowedVideoTypes.includes(image.file.type)) {
			formData.append('video_thumbnail', image.url);
		}

		image = this.updateImage(image.id, {
			controller: new AbortController()
		});

		// change status saving
		this.statusSaving();
		this.isContentDirty = true;

		this.request({
			route: routes.post_upload_image,
			method: 'POST',
			body: formData,
			signal: image.controller.signal
		})
		.then(({data: {name,
						url,
						path,
						video_thumbnail_url: videoThumbnailUrl,
						video_thumbnail_name: videoThumbnailName}
		}) => {
			const currentImage = this.updateImage(image.id, {
				status: 'UPLOADED',
				isAbort: undefined,
				name,
				url,
				path,
				videoThumbnailUrl,
				videoThumbnailName
			});

			this.flattenedImageFormat(true); // run auto-save, temp solution
			this.statusSaved();
		})
		.catch((error) => {
			this.isContentDirty = false;

			// force delete unsupported image
			this._removeImage(image.id);
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

		let autoSaveData = {title};

		if(!this.state.slugDirty) {
			data = {...data, slug: slugify(title)}
			autoSaveData = {...autoSaveData, slug: slugify(title)}
		}

		this.setState(data);

		this.startAutoSaveAll(autoSaveData);
	}

	slugOnInput(e) {
		const { title, id } = this.state;
		const slug = slugify(e.target.value);

		this.setState({
			slug,
			slugDirty: true
		});

		if(!id) return false;

		this.slugController && this.slugController.abort();
		this.slugController = new AbortController();

		const body = JSON.stringify({slug, id});

		this.checkSlugTimeout && clearTimeout(this.checkSlugTimeout);

		this.checkSlugTimeout = setTimeout(() => {
			this.request({
				method: 'POST',
				route: routes.check_slug,
				headers: {
					'Content-Type': 'application/json'
				},
				signal: this.slugController.signal,
				body
			})
			.then((res) => {
				this.setState({
					slugOk: true
				});
				this.startAutoSaveAll({slug, title});
			})
			.catch((error) => {
				this.setState({
					slugOk: false
				});
			});
		}, 2000);
	}

	slugOnBlur(e) {
		if(e.target.value !== this.state.slug)
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
	    return bytes.toFixed(1) + ' ' + units[u];
	}

	uploadingImageStatus() {
		const images = this.state.images;

		let uploadingImage = images.filter((image) => {
			return image.status == 'UPLOADING';
		});

		let deletingImage = images.filter((image) => {
			return image.status == 'DELETING';
		});

		let uploadedImage = images.filter((image) => {
			return image.status == 'UPLOADED';
		});

		return {
			deletingImage: deletingImage.length,
			uploadingImage: uploadingImage.length,
			totalImage: images.length,
			uploadedImage: uploadedImage.length
		};
	}

	isUploadingImage() {
		return this.uploadingImageStatus().uploadingImage > 0 ? true : false;
	}

	isDeletingImage() {
		return this.uploadingImageStatus().deletingImage > 0 ? true : false;
	}

	OS() {
		return ((ua) => {
			if(ua.indexOf('Windows') != -1) return 'WINDOWS';
			else if(ua.indexOf('Mac') != -1) return 'MAC';
			else if(ua.indexOf('Linux') != -1) return 'LINUX';
		})(window.navigator.userAgent);
	}

	isWindows() {
		return this.OS() == 'WINDOWS' ? true : false;
	}

	isMac() {
		return this.OS() == 'MAC' ? true : false;
	}

	/**
	 * Fixing image format for database
	 * @param  {Boolean} autoSave 	Auto save the output?
	 * @param  {Boolean} now 		Run auto save immediately
	 * @return {Array}
	 */
	flattenedImageFormat(autoSave=false, now) {
		if(!this.isSlidePost()) return;

		const { images } = this.state;

		let newImages = [];
		images.forEach(({id, status, caption, singleCaption, name, size, type, url, file, videoThumbnailName, videoThumbnailUrl}) => {
			if(typeof size == 'number') size = size.toString();

			name = name || file.name;
			size = size || file.size;
			type = type || file.type;

			if(status == 'UPLOADED') {
				let newImageData = {caption, url, name, size, type, status, id, single_caption: singleCaption};

				if(videoThumbnailName) newImageData['video_thumbnail_name'] = videoThumbnailName;
				if(videoThumbnailUrl) newImageData['video_thumbnail_url'] = videoThumbnailUrl;

				newImages.push(newImageData);
			}
		});

		if(autoSave) {
			newImages = JSON.stringify(newImages);
			this.startAutoSaveAll({content: newImages}, now);
		}

		return newImages;
	}

	/**
	 * Set caption to the image by id
	 */
	setCaptionToImage() {
		const images = this.updateImage(this.currentImageId, {
			caption: this.captionArea.value
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
		const captionModal = $('.caption-modal');
		captionModal.classList.remove('hidden');

		this.captionSwitch('editor');

		$('body').classList.add('overflow-hidden');
	}

	/**
	 * Start captioning
	 */
	setCaption(id) {
		this.currentImageId = id;

		// set caption element
		this.captionArea = document.querySelector('.caption-area');

		// current image object
		const currentImage = this.findImageById(id);

		// set value
		setTimeout(() => {
			if(currentImage.caption) this.captionArea.value = currentImage.caption;
			else this.captionArea.value = '';
		}, 0);

		// show the modal first
		this.showCaptionModal();

		// when user typing
		this.captionArea.addEventListener('change', () => {
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

		const captionModal = $('.caption-modal');
		captionModal.classList.add('hidden');

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

		// this.checkButtonLinkDisabled();
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
		const currentLinkKey = this.state.currentLinkKey;
		const allCurrentInput = document.querySelectorAll('[name=link-' + currentLinkKey + ']');

		return allCurrentInput;
	}

	lastLinkInput() {
		const allCurrentInput = this.allLinkInput();

		return allCurrentInput[allCurrentInput.length - 1];
	}

	/**
	 * Add link to the current key
	 */
	addLinkToKey() {
		const {currentLinkKey} = this.state;
		const currentLinkData = this.state[currentLinkKey];
		const lastValue = currentLinkData[currentLinkData.length - 1];

		const addNewEmptyLink = () => {
			const newLink = {};
			newLink[currentLinkKey] = currentLinkData;
			newLink[currentLinkKey].push({id: this.generateID(), value: ''});

			this.setState(newLink);
		}

		// first time link
		if(currentLinkData.length == 0) {
			addNewEmptyLink();
		}

		const invalidInput = this.getAllInvalidInputLink();

		if(invalidInput.length < 1) {
			setTimeout(() => {
				this.lastLinkInput().focus();
			}, 0);
		}

		$$('.invalid-link').forEach(inv => inv.remove());
		if(invalidInput.length > 0) {
			const input = invalidInput[0];
			input.focus();

			let message = 'URL tidak valid, periksa kembali';

			if(input.value.trim() < 1)
				message = 'Masukkan URL yang ingin kamu gunakan.';
			else if(input.value.search(/^http:\/\/|https:\/\//g) < 0)
				message = 'Tambahkan <code>http://</code> atau <code>https://</code> di awal URL kamu.';

			input.parentNode.insertAdjacentHTML('afterend', '<p class="invalid-link mb-4 text-red-600 -mt-2">'+ message +'</p>');
		}

		if(
			lastValue &&
			this.validateLink(lastValue.value) &&
			invalidInput.length < 1
		) {
			addNewEmptyLink();
		}

		// this.checkButtonLinkDisabled();
	}

	currentLinkData() {
		const {currentLinkKey} = this.state;
		const currentLinkData = this.state[currentLinkKey];

		return currentLinkData;
	}

	doFlattenLinkFormat(key, data=false) {
		let newData = "";

		if(!data)
			data = this.state[key];

		data.forEach((item) => {
			newData += item.value + "\n";
		});
		newData = newData.replace(/\n+$/g, '');

		return newData;
	}

	/**
	 * Transform link object to flattened array
	 * @param 	{Object} 	data 		Data to be flattened
	 * @param 	{Boolean} 	autoSave 	Run autosave?
	 * @return 	{Array} 	 			Flattened array
	 */
	flattenLinkFormat(data, autoSave=false) {
		let newData = "";
		data[this.state.currentLinkKey].forEach((item) => {
			newData += item.value + "\n";
		});
		newData = newData.replace(/\n+$/g, '');

		let newDataOutput = [];
		newDataOutput[this.state.currentLinkKey] = newData;

		// auto save link if there's no invalid link
		if(this.getAllInvalidInputLink().length < 1 && autoSave) {
			this.startAutoSaveAll(newDataOutput);
		}

		return newDataOutput;
	}

	/**
	 * Set link value to the state by id
	 * @param {Integer} id Link id
	 * @param {String} value  Value to be added
	 */
	setLinkValueById(id, value) {
		const currentLinkData = this.currentLinkData();
		const currentLinkKey = this.state.currentLinkKey;

		const currentLinkObject = currentLinkData.find((item) =>{
			return item.id == id;
		});

		currentLinkObject.value = value;

		const updatedLinkData = {};
		updatedLinkData[currentLinkKey] = [
			...currentLinkData
		];

		this.setState(updatedLinkData);

		this.flattenLinkFormat(updatedLinkData, true)
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
		let invalid = [], currentInputName = 'link-' + this.state.currentLinkKey;

		document.querySelectorAll('[name=' + currentInputName + ']').forEach((input) => {
			if(!this.validateLink(input.value)) {
				invalid.push(input);
			}
		});

		return invalid;
	}

	removeLinkFromKey(id) {
		const currentLinkData = this.currentLinkData();
		const currentLinkKey = this.state.currentLinkKey;

		const invalidAlert = $('#link-' + id + ' + .invalid-link');
		if(invalidAlert)
			invalidAlert.remove();

		const updatedLinkData = {};
		updatedLinkData[currentLinkKey] = [
			...currentLinkData.filter((item) => {
				return item.id !== id;
			})
		];

		this.setState(updatedLinkData);

		this.flattenLinkFormat(updatedLinkData, true)

		// this.checkButtonLinkDisabled();
	}

	linkKeydownHandle(e) {
		if(e.target) {
			let allLinkInput = [].slice.call(this.allLinkInput()),
				current = allLinkInput.indexOf(e.target);

			if(current == allLinkInput.length - 1) {
				if(e.keyCode == 9) {
					e.preventDefault();

					this.addLinkToKey();
				}
			}
		}
	}

	linkKeyupHandle(e) {
		// this.checkButtonLinkDisabled();
	}

	checkButtonLinkDisabled() {
		setTimeout(() => {
			const invalid = this.getAllInvalidInputLink();
			const currentLinkData = this.currentLinkData();

			let submitBtn = document.querySelector('.add-link-btn');

			function enableButton() {
				submitBtn.classList.remove('pointer-events-none');
				submitBtn.classList.remove('opacity-75');
			}

			function disableButton() {
				submitBtn.classList.add('pointer-events-none');
				submitBtn.classList.add('opacity-75');
			}

			// first time
			if(currentLinkData.length < 1) return enableButton();

			if(invalid.length < 1 && currentLinkData.length > 0) {
				enableButton();
			}else{
				disableButton();
			}
		}, 0);
	}

	saveFirstStep(e) {
		const { title, slug } = this.state;
		const type = this.props.postType;

		const status = 'draft';

		if(title.trim().length < 1) {
			document.querySelector('[name=title]').focus();
		}else if(slug.trim().length < 1) {
			document.querySelector('[name=slug]').focus();
		}else{
			const button = e.target;

			adds(button.classList, 'pointer-events-none opacity-50');
			button.disabled = true;

			this.request({
				route: routes.post_store,
				method: 'POST',
				body: JSON.stringify({title, slug, status, type}),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(({data}) => {
				this.setID(data.id);
				this.setPublicFolder(data.public_folder);

				this.setState({
					status,
					publish: true
				});

				this.addDOMFunctionality();
			})
			.finally(() => {
				removes(button.classList, 'pointer-events-none opacity-50');
				button.disabled = false;
			})
		}
	}

	toggleStatus() {
		this.setState(({status}) => ({
			newStatus: status == 'publish' ? 'draft' : 'publish'
		}));
	}

	singleCaption() {
		const { images } = this.state;

		if(images.length > 0) {
			const image = images[0];

			this.updateImage(image, {
				singleCaption: image.singleCaption ? false : true
			});

			this.flattenedImageFormat(true);
		}
	}

	captionSwitch(mode) {
		if(mode == 'editor') {
			document.querySelector('.caption-editor').classList.remove('hidden');
			document.querySelector('.caption-preview').classList.add('hidden');
		}else if(mode == 'preview') {
			document.querySelector('.caption-editor').classList.add('hidden');
			document.querySelector('.caption-preview').classList.remove('hidden');

			const caption = document.querySelector('.caption-area').value.trim();

			this.request({
				route: routes.post_markdown,
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'post',
				body: JSON.stringify({caption})
			})
			.then((data) => {
				if("parsed" in data)
					document.querySelector('.caption-preview').innerHTML = data.parsed;
			})
			.catch(error => {
				document.querySelector('.caption-preview').innerHTML = "Gagal parsing markdown, coba kembali.";
			});
		}
	}

	lightbox(url, e) {
		e.preventDefault();

		const template = `<div class="fixed top-0 left-0 w-full h-full z-10 lightbox-modal">
			<div class="w-full h-full bg-white absolute opacity-75"></div>
			<div class="flex items-center justify-center p-4 md:p-10 w-full h-full relative z-10 lightbox-modal-dispose">
				<img src="${url}" alt="${url}" style="max-height: ${window.outerHeight - 200}px">
			</div>
		</div>`;

		document.body.insertAdjacentHTML('beforeend', template);

		document.querySelector('.lightbox-modal-dispose').addEventListener('click', disposeLightbox);

		function disposeLightbox(e) {
			if(e && e.target && e.target.tagName == 'IMG') return false;

			document.querySelector('.lightbox-modal-dispose').removeEventListener('click', disposeLightbox);
			window.removeEventListener('scroll', closeListener);
			document.querySelector('.lightbox-modal').remove();
		}

		let currentScroll = window.scrollY, move;
		function closeListener(e) {
			move = window.scrollY - currentScroll;

			if(move < -40 || move > 40) {
				disposeLightbox();
			}
		}

		window.addEventListener('scroll', closeListener);
	}

	/**
	 * Markdown functionality
	 */

	mdContentChange(e) {
		const target = e.target;
		const content = target.value.trim();

		this.setState({
			content
		});

		this.startAutoSaveAll({ content });
	}

	mdContentHandlePaste(e) {
		const data = (e.clipboardData || window.clipboardData);
	}


	fileObject(id) {
		const fileObjectElement = document.getElementById(id);
		if(fileObjectElement) fileObjectElement.remove();

		const file = document.createElement('input');
		file.type = 'file';
		file.style = 'display: hidden';
		file.id = id;
		file.accept = 'image/*';
		document.body.appendChild(file);
		file.click();

		return file;
	}

	// thanks my dude
	// https://stackoverflow.com/a/512542
	setCaretPosition(elem, caretPos) {
	    if(elem != null) {
	        if(elem.createTextRange) {
	            var range = elem.createTextRange();
	            range.move('character', caretPos);
	            range.select();
	        }
	        else {
	            if(elem.selectionStart) {
	                elem.focus();
	                elem.setSelectionRange(caretPos, caretPos);
	            }
	            else
	                elem.focus();
	        }
	    }
	}

	// thanks my dude
	// https://stackoverflow.com/a/11077016
	insertAtCursor(myField, myValue) {
	    //IE support
	    if (document.selection) {
	        myField.focus();
	        sel = document.selection.createRange();
	        sel.text = myValue;
	    }
	    //MOZILLA and others
	    else if (myField.selectionStart || myField.selectionStart == '0') {
	        var startPos = myField.selectionStart;
	        var endPos = myField.selectionEnd;
	        myField.value = myField.value.substring(0, startPos)
	            + myValue
	            + myField.value.substring(endPos, myField.value.length);

	        this.setCaretPosition(myField, startPos + myValue.length);
            myField.setSelectionRange(startPos, startPos + myValue.length)
	    } else {
	        myField.value += myValue;
	    }
	}


    toggleEditorMaximizer(e) {
        e.preventDefault()

        let container = document.getElementById('editorContainer');
        let classes = 'fixed inset-0 z-9999 bg-white p-10 mt-70';

        if( this.state.editorMaximized )  {
            classes.split(' ').map(c => container.classList.remove(c))
            this.setState({'editorMaximized': false})
            document.body.style.overflow = 'initial';
            this.contentSwitch('editor', {currentTarget: document.querySelector('.editor-modes button')})
        }
        else
        {
            classes.split(' ').map(c => container.classList.add(c))
            this.setState({'editorMaximized': true})
            document.body.style.overflow = 'hidden';
            this.contentSwitch('editor', {currentTarget: document.querySelector('.editor-modes button')})
        }


    }

	uploadContentImage(e) {
		const { id, publicFolder } = this.state;
		const btn = e.currentTarget;
		const contentArea = $('.content-area');

		const file = this.fileObject('upload-content-image');

		file.addEventListener('change', (f) => {
			const selectedFile = f.target.files[0];

			let formData = new FormData();

			if(id)
				formData.append('id', id);

			if(publicFolder)
				formData.append('public_folder', publicFolder);

			formData.append('image', selectedFile);
			formData.append('name', selectedFile.name);

			btn.classList.add('pointer-events-none');
			btn.classList.add('opacity-75');
			btn.querySelector('span').innerText = 'Mengunggah';

			this.request({
				route: routes.post_upload_image,
				method: 'POST',
				body: formData,
			})
			.finally(() => {
				btn.classList.remove('pointer-events-none');
				btn.classList.remove('opacity-75');
				btn.querySelector('span').innerText = 'Unggah Gambar';
			})
			.then(({data: {url} }) => {
				this.insertAtCursor(contentArea, '\n![]('+ url +')\n');

				const content = contentArea.value.trim();

				this.setState({ content });
				this.startAutoSaveAll({ content });
			});
		});
	}

	coverImageHandler(e) {
		const { id, publicFolder } = this.state;

		const target = e.currentTarget;

		const file = this.fileObject('cover-image');

		file.addEventListener('change', (f) => {
			const selectedFile = f.target.files[0];

			if(!this.allowedImageTypes.includes(selectedFile.type)) {
				return this.toast.add(`🚷&nbsp; Jenis berkas ${selectedFile.name} tidak didukung`);
			}else if(selectedFile.size > this.maxFileSize) {
				return this.toast.add('🐠&nbsp; Ukuran berkas maks. 10MB');
			}

			const urlImage = URL.createObjectURL(selectedFile);

			const imgFunc = (url) => {
				const img = new Image;
				img.src = url;
				img.className = 'w-full rounded';

				return img;
			}

			const img = imgFunc(urlImage);

			img.onload = () => {
				const currentImg = target.querySelector('img');
				currentImg && currentImg.remove();

				target.appendChild(img);
				target.classList.remove('h-64');
				adds(target.classList, 'pointer-events-none');
				img.classList.add('opacity-75')

				document.querySelector('.cover-image-label').innerText = 'Mengunggah';
				this.uploadingCover = true;

				let formData = new FormData();

				if(id)
					formData.append('id', id);

				if(publicFolder)
					formData.append('public_folder', publicFolder);

				let getExtension = selectedFile.name.split('.');
				getExtension = getExtension[getExtension.length - 1];
				formData.append('image', selectedFile);
				formData.append('name', 'cover.' + getExtension);
				formData.append('force', true);

				this.request({
					route: routes.post_upload_image,
					method: 'POST',
					body: formData,
				})
				.finally(() => {
					this.uploadingCover = false;
					target.classList.remove('pointer-events-none');
					img.classList.remove('opacity-75');
				})
				.then(({data: {url: cover} }) => {
					const { cover: currentCover } = this.state;

					if(!currentCover)
						img.remove();

					this.setState({
						cover
					});

					this.statusSaved();

					this.startAutoSaveAll({ cover });

					document.querySelector('.cover-image-label').innerText = 'Ganti Gambar';
				})
				.catch((error) => {
					const { cover: currentCover } = this.state;

					this.isContentDirty = false;
					img.remove();

					if(!currentCover) {
						target.classList.add('h-64');
						document.querySelector('.cover-image-label').innerText = 'Unggah Gambar';
					}else{
						document.querySelector('.cover-image-label').innerText = 'Ganti Gambar';
						const prevImg = imgFunc(currentCover);
						target.appendChild(prevImg);
					}
				});
			}
		});
	}

	contentSwitch(mode, e) {
		const btn = e.currentTarget;

		const modeBtns = document.querySelectorAll('.editor-modes button');
		modeBtns.forEach(btnI => removes(btnI.classList, 'bg-indigo-600 text-white'));

		adds(btn.classList, 'bg-indigo-600 text-white');

		if(mode == 'editor') {
			document.querySelector('.content-editor').classList.remove('hidden');
			document.querySelector('.content-preview').classList.add('hidden');
		}else if(mode == 'preview') {
			document.querySelector('.content-editor').classList.add('hidden');
			document.querySelector('.content-preview').classList.remove('hidden');

			const content = document.querySelector('.content-area').value.trim();

			this.request({
				route: routes.post_markdown_ns,
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'post',
				body: JSON.stringify({content})
			})
			.then((data) => {
				if("parsed" in data)
					document.querySelector('.content-preview').innerHTML = data.parsed;
			})
			.catch(error => {
				document.querySelector('.content-preview').innerHTML = "Gagal parsing markdown, coba kembali.";
			});
		}
	}

	render() {
		const { postType } = this.props;
		const postData = this.postData;
		const {
			cover,
			id,
			title,
			slug,
			images,
			keyword,
			currentLinkKey,
			publish,
			statusSaving,
			edit,
			stateStatus,
			status,
			content,
			newStatus
		} = this.state;

		const {
			uploadingImage,
			totalImage,
			uploadedImage
		} = this.uploadingImageStatus();

		return (
			<>
				<nav className="fixed top-0 left-0 z-10 w-full py-3 mb-4 bg-white border-b border-gray-200">
				    <div className="container px-4 mx-auto sm:px-6 md:px-0">
				        <div className="flex items-center justify-center">
				            <a href={routes.base_url} className="flex-shrink-0 text-lg font-semibold text-indigo-600 no-underline">
				                <img alt="logo" src="data:image/png;base64,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" width="45" />
				            </a>
				            <div className="flex items-center ml-auto">
				            	<div className="mr-6 text-gray-600 capitalize save-status">
				            		{statusSaving}
				            	</div>
				            	<button onClick={this.publishWholeContent.bind(this, {status: newStatus ? newStatus : 'publish'})} className={`items-center bg-indigo-600 text-white px-4 py-2 rounded mr-6 flex` + (!publish || (this.isSlidePost() && this.isUploadingImage()) ? ' pointer-events-none opacity-50' : '')}>
				            		{edit && status.toUpperCase() == 'PUBLISH' ? 'Simpan Perubahan' : 'Publish Post'}
				            	</button>
				            </div>
			            </div>
		            </div>
	            </nav>

				<div className="fixed top-0 left-0 z-30 flex items-start justify-center hidden w-full h-full overflow-y-auto caption-modal">
				    <div className="fixed w-screen h-screen bg-black opacity-50"></div>
				    <div className="relative w-full h-full p-10 my-0 bg-white shadow-lg md:my-10 sm:w-6/12 lg:w-6/12 md:w-8/12 md:h-auto md:rounded">
				        <h2 className="text-xl font-bold">Tentukan Deskripsi</h2>
				        <p className="mt-2 leading-relaxed text-gray-600">Berikan deskripsi pada slide ini. Kamu dapat mengosongkan deskripsi bila tidak ada. <a href={routes.docs + '/create-content#captioning'} className="text-indigo-600 border-b border-indigo-600">Pelajari selengkapnya</a> tentang mengisi keterangan.</p>
				        <div className="mt-6 mb-5">
				        	<div className="flex">
				        		<button onClick={this.captionSwitch.bind(this, 'editor')} className="px-4 py-2 border-t border-l border-gray-200 rounded-tl-lg">Editor</button>
				        		<button onClick={this.captionSwitch.bind(this, 'preview')} className="px-4 py-2 border-t border-l border-r border-gray-200 rounded-tr-lg">Preview</button>
				        	</div>
				        	<div className="caption-editor">
					        	<textarea className="w-full h-64 p-4 border border-gray-200 rounded-bl-lg rounded-br-lg caption-area"></textarea>
				        	</div>
				        	<div className="hidden p-4 mb-2 overflow-auto border border-gray-200 rounded-bl-lg rounded-br-lg caption-preview markdowned">
				        		Parsing ...
				        	</div>
				        	<div className="flex items-center">
					        	<svg width="20px" className="mr-2 text-gray-600 fill-current" viewBox="0 0 256 158" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
					        	    <g>
					        	        <path d="M238.371257,157.892216 L18.3952096,157.892216 C8.43113772,157.892216 0,149.461078 0,139.497006 L0,18.3952096 C0,8.43113772 8.43113772,0 18.3952096,0 L237.60479,0 C247.568862,0 256,8.43113772 256,18.3952096 L256,139.497006 C256,149.461078 248.335329,157.892216 238.371257,157.892216 L238.371257,157.892216 Z M18.3952096,12.2634731 C15.3293413,12.2634731 12.2634731,15.3293413 12.2634731,18.3952096 L12.2634731,139.497006 C12.2634731,143.329341 15.3293413,145.628743 18.3952096,145.628743 L237.60479,145.628743 C241.437126,145.628743 243.736527,142.562874 243.736527,139.497006 L243.736527,18.3952096 C243.736527,14.5628743 240.670659,12.2634731 237.60479,12.2634731 C238.371257,12.2634731 18.3952096,12.2634731 18.3952096,12.2634731 L18.3952096,12.2634731 Z M36.7904192,121.101796 L36.7904192,36.7904192 L61.3173653,36.7904192 L85.8443114,67.4491018 L110.371257,36.7904192 L134.898204,36.7904192 L134.898204,121.101796 L110.371257,121.101796 L110.371257,72.8143713 L85.8443114,103.473054 L61.3173653,72.8143713 L61.3173653,121.101796 L36.7904192,121.101796 L36.7904192,121.101796 Z M190.850299,121.101796 L154.05988,80.4790419 L178.586826,80.4790419 L178.586826,36.7904192 L203.113772,36.7904192 L203.113772,79.7125749 L227.640719,79.7125749 L190.850299,121.101796 L190.850299,121.101796 Z"></path>
					        	    </g>
					        	</svg>
					        	<p className="text-sm text-gray-600"><a className="text-indigo-600" target="_blank" href={routes.docs + '/markdown#supported-markdown'} tabIndex="-1">Markdown</a></p>
				        	</div>
				        </div>
				        <button onClick={this.closeCaptionModal.bind(this)} className="block w-full p-4 font-semibold text-center text-white bg-indigo-600 rounded shadow" type="button">Simpan Perubahan</button>
				    </div>
				</div>
			    <div className="container px-4 mx-auto sm:px-0">
			        <div className="flex justify-center py-12 -mx-4">
			            <div className="w-full px-4 lg:w-6/12 md:w-8/12">

			            	{ stateStatus == 'LOADING' &&
					            <div className="text-center">
					            	<svg version="1.1" className="border border-gray-200 rounded-lg logo-loader" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
					            	<path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M1000,900c0,55.229-44.771,100-100,100H100
					            		C44.771,1000,0,955.229,0,900V100C0,44.771,44.771,0,100,0h800c55.229,0,100,44.771,100,100V900z"/>
				            		<path fillRule="evenodd" clipRule="evenodd" fill="#6979BB" d="M845.011,504.683c-11.729-8.214-20.504-13.022-27.63-19.614
				            			c-18.121-16.767-26.005-38.331-25.948-62.748c0.092-39.378,0.668-78.757,0.774-118.137c0.145-54.508-18.146-75.122-71.923-76.043
				            			c-21.097-0.362-19.121-11.155-19.735-25.244c-0.699-15.985,6.727-19.816,20.519-18.663c27.164,2.271,54.6,2.571,80.78,11.594
				            			c30.365,10.464,49.07,31.357,54.434,63.097c8.521,50.399,3.39,101.269,3.813,151.912c0.271,32.254,7.085,58.239,42.411,67.664
				            			c14.718,3.927,12.789,15.968,13.412,27.417c0.648,11.893-3.614,19.263-14.883,22.574c-31.535,9.271-40.672,32.007-40.929,62.699
				            			c-0.422,50.634,3.305,101.312-2.48,151.938c-3.558,31.127-19.648,51.534-47.457,63.815c-31.398,13.866-64.805,14.396-98.198,13.683
				            			c-16.771-0.358-14.147-14.142-14.868-22.8c-0.753-9.06,1.769-20.31,16.476-19.697c10.881,0.454,21.172-2.208,31.619-4.213
				            			c31.281-6.001,43.749-18.748,45.057-51.562c1.777-44.66,2.454-89.425,1.67-134.112
				            			C791.249,549.987,801.566,519.676,845.011,504.683z"/>
				            		<path fillRule="evenodd" clipRule="evenodd" fill="#3F4F58" d="M719.775,607.116c-24.218-16.028-46.734-30.998-69.324-45.857
				            			c-19.446-12.791-38.885-25.598-58.508-38.114c-10.844-6.914-16.913-16.083-4.951-25.267c43.108-33.096,87.087-65.056,132.22-98.546
				            			c5.952,20.052,2.338,32.873-13.645,43.398c-22.788,15.008-44.349,31.88-66.458,47.922c-23.566,17.105-23.595,17.111,1.782,33.435
				            			c20.697,13.314,40.88,27.563,62.329,39.532C719.869,572.911,725.476,585.112,719.775,607.116z"/>
				            		<path fillRule="evenodd" clipRule="evenodd" fill="#43525C" d="M518.568,616.226c-0.869,12.495-5.34,22.586-17.917,22.945
				            			c-13.949,0.399-19.066-10.677-19.223-22.715c-0.161-12.176,5.256-23.341,18.875-23.146
				            			C514.043,593.508,517.855,604.885,518.568,616.226z"/>
					            	<path fillRule="evenodd" clipRule="evenodd" fill="#6979BB" d="M157.989,504.683c11.729-8.214,20.503-13.022,27.629-19.614
					            		c18.121-16.767,26.005-38.331,25.948-62.748c-0.092-39.378-0.667-78.757-0.773-118.137c-0.145-54.508,18.146-75.122,71.922-76.043
					            		c21.097-0.362,19.122-11.155,19.736-25.244c0.699-15.985-6.727-19.816-20.52-18.663c-27.164,2.271-54.6,2.571-80.781,11.594
					            		c-30.365,10.464-49.069,31.357-54.434,63.097c-8.52,50.399-3.389,101.269-3.812,151.912c-0.27,32.254-7.085,58.239-42.411,67.664
					            		c-14.718,3.927-12.79,15.968-13.413,27.417c-0.648,11.893,3.614,19.263,14.883,22.574c31.536,9.271,40.672,32.007,40.929,62.699
					            		c0.42,50.634-3.305,101.312,2.48,151.938c3.558,31.127,19.648,51.534,47.456,63.815c31.398,13.866,64.806,14.396,98.199,13.683
					            		c16.77-0.358,14.147-14.142,14.867-22.8c0.754-9.06-1.768-20.31-16.474-19.697c-10.881,0.454-21.171-2.208-31.62-4.213
					            		c-31.282-6.001-43.748-18.748-45.056-51.562c-1.778-44.66-2.455-89.425-1.67-134.112
					            		C211.751,549.987,201.434,519.676,157.989,504.683z"/>
					            	<path fillRule="evenodd" clipRule="evenodd" fill="#3F4F58" d="M283.225,607.116c24.217-16.028,46.733-30.998,69.324-45.857
					            		c19.447-12.791,38.885-25.598,58.508-38.114c10.844-6.914,16.913-16.083,4.951-25.267c-43.108-33.096-87.087-65.056-132.219-98.546
					            		c-5.954,20.052-2.337,32.873,13.644,43.398c22.789,15.008,44.35,31.88,66.458,47.922c23.567,17.105,23.595,17.111-1.782,33.435
					            		c-20.697,13.314-40.879,27.563-62.329,39.532C283.131,572.911,277.523,585.112,283.225,607.116z"/>
					            	</svg>
					            	<p className="mt-2">Memuat data</p>
				            	</div>
				            }

				            { stateStatus !== 'LOADING' &&
				            	<>
				            		{ id &&
				            			<>
					            		{ status.toUpperCase() == 'PUBLISH' ?
						            		<div className="px-6 py-4 mb-4 leading-loose text-teal-600 bg-teal-100 border border-teal-200 rounded">
						            			Post ini sudah dipublikasikan – semua orang dapat melihatnya. <a href={routes.single + slug} className="pb-1 font-semibold border-b border-teal-600">Lihat post</a> atau <a href={routes.post_new} className="pb-1 font-semibold border-b border-teal-600">Buat post baru</a>
						            		</div>
						            		:
						            		<div className="px-6 py-4 mb-4 leading-loose text-blue-600 bg-blue-100 border border-blue-200 rounded">
						            			Post ini belum dipublikasikan. Tekan tombol "Publish Post" untuk mempublikasikan post ini, atau tekan tombol kombinasi <kbd className="p-1 border border-blue-600 rounded">{this.isMac() ? 'Command' : 'Ctrl'}+S</kbd> untuk menyimpannya sebagai draft.
						            		</div>
						            	}
						            	</>
						            }
									<div className="p-6 border border-gray-200 rounded md:p-8">
								        <h1 className="text-xl font-semibold text-indigo-600">{edit ? postData.titleEdit : postData.title}</h1>
								        <p className="mt-2 mb-4 text-gray-600">{postData.description}</p>

										<div className="mt-6 mb-6">
											<label className="inline-block mb-1 text-gray-600">Judul</label>
											<input onChange={this.titleOnInput.bind(this)} type="text" name="title" className="block w-full px-5 py-3 text-gray-600 border border-gray-200 rounded focus:outline-none focus:border-indigo-600" autoComplete="off" tabIndex="1" defaultValue={he.decode(title)} />
										</div>
										<div className="mt-6 mb-6">
											<label className="inline-block mb-1 text-gray-600">Slug</label>
											<input onChange={this.slugOnInput.bind(this)} onBlur={this.slugOnBlur.bind(this)} type="text" name="slug" className="block w-full px-5 py-3 text-gray-600 border border-gray-200 rounded focus:outline-none focus:border-indigo-600" autoComplete="off" defaultValue={slug} tabIndex="2" />
											<p className="mt-2 text-indigo-600 break-all ">{routes.single.replace(/slug/g, '') + slug}</p>
										</div>
										{ !id &&
											<button tabIndex="3" onClick={this.saveFirstStep.bind(this)} type="button" className="w-full p-4 text-white bg-indigo-600 rounded shadow hover:bg-indigo-700">
												Simpan &amp; Lanjutkan
											</button>
										}

										{ id && (
											<>
												<div>
													<label className="inline-block mb-1 text-gray-600">Topik</label>
													<input type="text" name="tags[]" className="block w-full px-5 py-3 text-gray-600 border border-gray-200 rounded tags focus:outline-none focus:border-indigo-600" tabIndex="3" />
												</div>
												{ this.isSlidePost() &&
													<div className="mt-6">
														<label className="inline-block mb-1 text-gray-600">Design Keyword <span className="text-sm">(Optional)</span></label>
														<input onChange={this.keywordOnInput.bind(this)} type="text" name="keyword" className="block w-full px-5 py-3 text-gray-600 border border-gray-200 rounded focus:outline-none focus:border-indigo-600" tabIndex="4" defaultValue={keyword} />
														<p className="mt-2 text-sm text-indigo-600">
															<span className="border-b border-indigo-600 border-dotted tooltip cursor-help" data-title="Keyword ini bukan untuk SEO, melainkan digunakan untuk mencari inspirasi desain ke situs di luar Kodinger, seperti Dribbble, Behance, atau Uplabs. Jadi, bila kamu sedang membahas library carousel, maka kamu dapat mengisi keyword dengan 'carousel'. Lalu, sistem akan menggunakan kata 'carousel' tadi untuk digunakan sebagai keyword pencarian ke 3 situs tadi.">
																Saya harus mengisi ini dengan apa?
															</span>
														</p>
													</div>
												}
											</>
										)}
									</div>

									{ id && (
									<>
										{ this.isSlidePost() &&
											<div className="p-6 mt-10 border border-gray-200 rounded md:p-8">
										        <h2 className="mb-4 text-xl font-semibold text-indigo-600">Media</h2>
										        <p className="mt-2 mb-6 leading-relaxed text-gray-600">Kamu dapat mengunggah gambar atau video dalam satu konten yang sama. <a href={routes.docs + '/content#form-media'} className="text-indigo-600 border-b border-indigo-600" target="_blank">Pelajari selengkapnya</a> tentang media.</p>

												<div className="mb-6">
													<div className="flex items-center justify-center w-full border border-gray-300 border-dashed rounded-lg dropzone">
														<div className="p-10 text-center md:p-20">
															<h4 className="text-xl">Tarik gambar atau video kamu ke sini</h4>
															<p className="mt-2 text-gray-600">
																Maksimal: 10MB. Format yang didukung: {[...this.allowedImageTypesReadable, ...this.allowedVideoTypesReadable].join(', ')}
															</p>
															<label className="inline-block mt-6 font-semibold text-indigo-600 cursor-pointer" htmlFor="images-input" tabIndex="5">Browse</label>
															<input type="file" multiple id="images-input" className="hidden" onChange={this.handleFiles.bind(this)} />
														</div>
													</div>

													{images.length > 0 && (
														<>
															<div className="flex mt-6 mb-2 text-sm font-semibold tracking-wider text-gray-600 uppercase">
																Media yang dipilih { this.isUploadingImage() ? '(' + uploadedImage + '/' + totalImage + ')' : '' }
																<div className="ml-auto text-blue-600">
																	<div className="custom-checkbox custom-checkbox-sm">
																		<input type="checkbox" id="single-caption" onChange={this.singleCaption.bind(this)} checked={images[0].singleCaption} />
																		<label className="tooltip" htmlFor="single-caption" data-title="Ceklis opsi ini untuk menggunakan keterangan pada slide pertama untuk semua slide.">Single caption</label>
																	</div>
																</div>
															</div>
														</>
													)}
													<div className="image-files">
														{ images.map((image) => {
															return (
																<div data-id={image.id} key={image.id} className="flex flex-col justify-center w-full mb-4 bg-white border border-gray-200 rounded md:flex-row hover:border-gray-400">
																	<div className={`handle flex-shrink-0 p-2 items-center flex md:border-r md:border-gray-200 bg-gray-100 md:mr-4 cursor-move` + (this.isUploadingImage() ? ' pointer-events-none' : '')}>
																		<svg xmlns="http://www.w3.org/2000/svg" className="w-4 text-gray-600 fill-current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><rect x="3" y="11" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="16" width="18" height="2" rx=".95" ry=".95"/><rect x="3" y="6" width="18" height="2" rx=".95" ry=".95"/></g></g></svg>
																	</div>
																	<div className="flex-shrink-0 w-full h-auto p-4 pb-0 md:w-16 md:h-16 md:p-0 md:mr-2 md:py-4">
																		<a href={image.videoThumbnailUrl || image.url} target="_blank" onClick={this.lightbox.bind(this, image.videoThumbnailUrl || image.url)}>
																			<img className={'rounded' + (image.name && image.url ? '' : ' hidden')} src={image.videoThumbnailUrl || image.url} />
																		</a>
																		<video className="hidden rounded"><source /></video>
																		<canvas className="hidden"></canvas>
																	</div>
																	<div className="w-full p-4 overflow-hidden md:py-4 md:pr-4">
																		<div className={'text-sm mb-2 font-semibold tracking-wider inline-block' + (image.status == 'UPLOADED' ? ' text-teal-600' : ' text-orange-600')}>{image.status}</div>
																		<div className="mb-1 text-indigo-600 truncate" title={image.name || image.file.name}>{image.name || image.file.name}</div>
																		<div className="text-sm text-gray-600">{this.humanFileSize(image.size || image.size == 0 ?  image.size : image.file.size)}</div>
																		<div className="flex mt-2">
																		{(!image.isAbort && image.isAbort !== undefined) &&
																			<div className="text-red-600 cursor-pointer" onClick={this.abortImage.bind(this, image)}>Batalkan</div>
																		}
																		{((image.isDirty && (image.isAbort == undefined && !image.isAbort)) || (!image.isDirty && edit)) &&
																			<>
																				<div onClick={this.removeImage.bind(this, image.id)} className="text-red-600 cursor-pointer">Hapus</div>
																				<div onClick={this.setCaption.bind(this, image.id)} className="ml-4 text-teal-600 cursor-pointer">
																					Tentukan Deskripsi {image.caption ? '👍' : ''}
																				</div>
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
										}

										{ this.isMarkdownPost() &&
											<>
												<div className="p-6 mt-10 border border-gray-200 rounded md:p-8">
                                                    <div className="flex flex-row items-center mb-4">
                                                        <h2 className="text-xl font-semibold text-indigo-600 ">Konten</h2>
                                                    </div>
											        <p className="mt-2 mb-6 leading-relaxed text-gray-600">Tulis isi post yang ingin kamu sampaikan. Kamu dapat menggunakan format Markdown, <a href=""  target="_blank">pelajari selengkapnya</a>.</p>

                                                    <div id="editorContainer">

                                                        <div className={`sticky flex items-center mb-2 z-9999 ${this.state.editorMaximized ? '' : ''}`} style={{top: '90px'}}>
                                                            <button onClick={this.uploadContentImage.bind(this)} className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded hover:border-indigo-500 hover:text-indigo-500">
                                                                <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                                                <span>Unggah Gambar</span>
                                                            </button>

                                                            <button onClick={this.toggleEditorMaximizer.bind(this)} id="maximizeButton" className="flex items-center px-4 py-2 ml-1 bg-white border border-gray-300 rounded hover:border-indigo-500 hover:text-indigo-500">
                                                                <svg className="ml-auto" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" /></svg>
                                                            </button>


                                                            <div className="flex ml-auto bg-white rounded editor-modes">
                                                                <button onClick={this.contentSwitch.bind(this, 'editor')} id="editorButton" className="px-4 py-2 text-white bg-indigo-600 border-t border-b border-l border-gray-200 rounded-tl rounded-bl">Editor</button>
                                                                <button onClick={this.contentSwitch.bind(this, 'preview')} id="previewButton" className="px-4 py-2 border-t border-b border-r border-gray-200 rounded-tr rounded-br">Preview</button>
                                                            </div>
                                                        </div>
                                                        <div className="content-editor">
                                                            <textarea name="content" onChange={this.mdContentChange.bind(this)} onPaste={this.mdContentHandlePaste.bind(this)} style={{minHeight: '50vh'}} className={`
                                                                ${this.state.editorMaximized ? 'absolute inset-0 px-10 pt-32 h-full pb-32' : 'focus:border-indigo-600 px-5 py-3 border border-gray-200 rounded'}
                                                                block
                                                                w-full
                                                                mb-2
                                                                text-gray-600  resize-y content-area focus:outline-none `}
                                                                tabIndex="4" placeholder="Tulis apapun di sini ..." defaultValue={content}>
                                                            </textarea>
                                                        </div>
                                                        <div className={`prose prose-lg max-w-full hidden overflow-auto  content-preview
                                                                ${this.state.editorMaximized ? 'absolute inset-0 px-10 pt-32 h-full w-full pb-32' : 'focus:border-indigo-600 px-5 py-3 border border-gray-200 rounded'}
                                                            `}>
                                                            Parsing ...
                                                        </div>
                                                    </div>

                                                    <p className="text-sm text-gray-600"><a className="text-indigo-600" target="_blank" href={routes.docs + '/markdown#supported-markdown'} tabIndex="-1">Markdown</a></p>

					        			        </div>

				        			        	<div className="p-6 mt-10 border border-gray-200 rounded md:p-8">
				        			                <h2 className="mb-4 text-xl font-semibold text-indigo-600">Cover</h2>
				        			                <p className="mt-2 mb-6 leading-relaxed text-gray-600">Gambar akan otomatis dipotong oleh sistem bila dimensinya tidak 500 x 300 (Maksimal: 10MB. Format yang didukung: {[...this.allowedImageTypesReadable].join(', ')}).</p>

					        			        	<div onClick={this.coverImageHandler.bind(this)} className={`group w-full border border-gray-300 rounded flex items-center justify-center cursor-pointer ${cover ? '' : 'h-64'}`}>
					        			        		{cover && <img src={cover} className="w-full rounded" />}
					        			        		<div className="absolute px-3 py-2 bg-white border border-gray-300 rounded cover-image-label group-hover:border-indigo-500 group-hover:text-indigo-500">{ cover ? 'Ganti Gambar' : 'Unggah Gambar'}</div>
					        			        	</div>
										        </div>
									        </>
									    }

									    { this.isSlidePost() &&
											<div className="p-6 mt-10 border border-gray-200 rounded md:p-8">
										        <h2 className="mb-4 text-xl font-semibold text-indigo-600">Tautan <span className="text-sm font-normal text-gray-600">(Optional)</span></h2>
										        <p className="mt-2 mb-6 leading-relaxed text-gray-600">Sertakan tautan referensi yang relevan dengan konten, bisa tautan ke halaman resmi situs web, tutorial, <code>code playground</code>, atau yang lainnya. <a href={routes.docs + '/content#form-links'} className="text-indigo-600 border-b border-indigo-600" target="_blank">Pelajari selengkapnya</a> tentang tautan.</p>

										        <div className="flex mb-4 overflow-x-auto flex-nowrap">
										        	{ Object.keys(key2str).map((name, index) => {
											        	return (
											        		<div
											        			onClick={this.setLinkKey.bind(this, name)}
											        			key={name}
											        			className={'px-4 py-2 border-t border-r border-b '+ (currentLinkKey == name ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100') +' cursor-pointer border-gray-200 flex-1 justify-center flex items-center text-center' + (index == 0 ? ' border-l rounded-tl rounded-bl' : (index == Object.keys(key2str).length - 1 ? ' rounded-tr rounded-br' : ''))}
											        		>
											        			{key2str[name]}
											        		</div>
										        		);
											        })}
										        </div>

							            		<div className="p-4 bg-gray-100 border border-gray-200 rounded">
								            		<p className="mb-3 text-gray-600">Masukkan URL valid dengan <code>http://</code> atau <code>https://</code>.</p>
						            				<div className="list">
						            					{ this.state[currentLinkKey].map((link, id) => {
								            				return (
								            					<div key={link.id} className="flex mb-4 text-blue-500 bg-white rounded shadow" id={'link-' + link.id}>
									            					<input onKeyDown={this.linkKeydownHandle.bind(this)} onKeyUp={this.linkKeyupHandle.bind(this)} onChange={this.linkInputHandle.bind(this, link.id)} tabIndex="6" type="text" name={'link-' + currentLinkKey} placeholder="Contoh: https://kodinger.com/tutorial-javascript" className="w-full px-4 py-3 rounded outline-none url" defaultValue={link.value} />
									            					<button type="button" onClick={this.removeLinkFromKey.bind(this, link.id)} className="flex items-center px-4 font-semibold text-white uppercase bg-red-500 rounded-tr rounded-br cursor-pointer hover:bg-red-600">
									            						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 text-white fill-current"><g data-name="Layer 2"><g data-name="trash"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/></g></g></svg>
									            					</button>
									            				</div>
							            					);
								            			})}
								            		</div>

							            			<button type="button" onClick={this.addLinkToKey.bind(this)} tabIndex="7" className="w-full px-4 py-3 text-center text-blue-500 bg-white rounded shadow cursor-pointer add-link-btn hover:bg-indigo-600 hover:text-white">Tambah URL</button>
							            		</div>
									        </div>
									    }

								        { status.toUpperCase() == 'PUBLISH' &&
											<div className="p-6 mt-10 border border-gray-200 rounded md:p-8">
										        <h2 className="mb-4 text-xl font-semibold text-orange-600">Visibilitas</h2>
										        <p className="mt-2 mb-6 leading-relaxed text-gray-600">Post ini sudah dipublikasikan dan semua orang dapat mengakses post ini melalui tautan, beranda, mesin pencari, atau cara lainnya. Kamu dapat mengubah status post ini menjadi "draft" untuk menyembunyikannya dari semua orang.</p>

										        <div className="custom-checkbox">
										        	<input onChange={this.toggleStatus.bind(this)} type="checkbox" id="checkbox-draft" />
										        	<label htmlFor="checkbox-draft">Sembunyikan Post (Ubah status menjadi draft)</label>
										        </div>
									        </div>
									    }
							        </>
								    )}
								</>
							}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Form;
