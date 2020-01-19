import React, { Component } from 'react';
import slugify from '../utils/slugify';
import objExtend from '../utils/obj-extend';
import adds from '../utils/adds';
import removes from '../utils/removes';
import Sortable from 'sortablejs';
import SimpleMDE from 'simplemde/dist/simplemde.min.js';
import 'simplemde/dist/simplemde.min.css';

/**
 * ini harusnya code-splitting wkwkwk
 */

const ImageTemplate = (props) => (
	<div className="anim-scale-up w-32 h-32 mx-2 mb-4 rounded border border-gray-200 hover:border-gray-400 relative">
		{props.dirty &&
			<div onClick={props.onRemove} className="cursor-pointer w-5 h-5 flex justify-center items-center bg-red-600 text-white rounded-full absolute top-0 right-0">&times;</div>
		}
		<label className="w-full h-full flex flex-col items-center justify-center cursor-pointer text-sm" htmlFor={'file-' + props.id}>
			<div className={'label-text' + (!props.url ? '' : ' hidden')}>
				<svg className="mx-auto fill-current text-gray-600 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="plus-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"/></g></g></svg>
				Media
			</div>
			<img className={'w-full h-full object-cover' + (props.url ? '' : ' hidden')} src={props.url ? props.url : null} />
			<video className="hidden" controls><source /></video>
			<canvas className="hidden"></canvas>
		</label>
		<input type="file" className="hidden" id={'file-' + props.id} onChange={props.onChange} />
	</div>
);

class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: '',
			slug: '',
			tags: [],
			images: [],
			currentStep: 'basic'
		}

		this.allowedVideoTypes = [
			'video/mp4',
			'video/webm',
			'video/ogg'
		];

		this.allowedImageTypes = [
			'image/png',
			'image/jpeg',
			'image/bmp',
			'image/png',
			'image/webp',
			'image/svg+xml',
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

		if(images.length > 1 && selected_image.dirty) {
			this.removeImage(id);
		}
	}

	componentDidMount() {
		this.firstMedia = false;
		this.sortable = null;
		this.simplemde = null;
	}

	addDropzone() {
		const dropzone_element = document.createElement('div');
		dropzone_element.className = 'opacity-0 invisible flex justify-center items-center border-4 border-teal-500 fixed z-50 top-0 w-full left-0 h-full dropzone';
		dropzone_element.style.transition = 'all .5s';
		dropzone_element.style.backgroundColor = 'rgba(255,255,255,.5)';
		dropzone_element.innerHTML = `
			<div class="p-10 text-2x rounded bg-teal-500 text-white">
				Lepaskan gambar atau video yang kamu seret di sini!
			</div>
		`;

		$('body').appendChild(dropzone_element);
		adds($('#app').classList, 'border-2 border-gray-200');
		$('#app').style.transition = 'transform .5s';

		function onDragover() {
			adds($('body').classList, 'overflow-hidden');
			removes($('.dropzone').classList, 'invisible opacity-0');
			$('#app').style.transform = 'scale(.95)';
			$('#app').style.filter = 'blur(5px)';
		}

		function onDragdone() {
			removes($('body').classList, 'overflow-hidden');
			adds($('.dropzone').classList, 'invisible opacity-0');
			$('#app').style.transform = 'scale(1)';
			$('#app').style.filter = 'blur(0)';
		}

		document.querySelector('body').addEventListener('dragover', function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.dataTransfer.dropEffect = 'move';

			onDragover();
		});

		document.querySelector('.dropzone').addEventListener('dragleave', function(e) {
			onDragdone();
		});

		document.querySelector('.dropzone').addEventListener('drop', (e) => {
			e.stopPropagation();
			e.preventDefault();

			onDragdone();

			if(!$('.image-files')) return false;

			let files = e.dataTransfer.files;

			if(files.length > 0) {
				files = [].slice.call(files);
				files.forEach((file) => {
					this.validateImage({
						selectedFile: file
					})
					.then(() => {
						this.addImage('prepend').then(({id, node}) => {
							this.handleImage(id, node, file);
						});
					});
				});
			}
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
	addImage(position=false) {
		return new Promise((resolve, reject) => {
			let id = this.generateID(),
			 	empty_images = this.state.images.filter((image) => {
					return image.file == undefined;
				}).length;

			// if there are empty images, reject promise
			if(empty_images && !position) return reject();

			this.setState(prevState => {
				// collect images from previous state
				let images = [
						...prevState.images
					],
					new_image = {id};

				if(position == 'prepend') {
					let array_pos = images.length - 1;

					// push new_image before last image of an array
					images.splice(array_pos, 0, new_image);
				}else{
					images.push(new_image);
				}

				return {
					images
				}
			}, () => {
				let node, 
					image_elements = $('.image-files').children,
					image_elements_length = image_elements.length;

				if(position == 'prepend') {
					// set node to the before last element
					node = image_elements[image_elements_length - 2];
				}else{
					// set node to the last element
					node = $('.image-files').lastChild;
				}

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

	handleImage(id, e, file) {
		const target = e instanceof Element ? e : e.target.parentNode;
		const target_file = target.querySelector('input');
		const selected_file = (file instanceof File) ? file : (target_file.files ? target_file.files[0] : false);
		const selected_file_type = selected_file ? selected_file.type : false;

		this.validateImage({
			selectedFile: selected_file 
		})
		.then(() => {
			let promise_preview;

			if(this.allowedImageTypes.includes(selected_file_type)) {
				promise_preview = function() {
					return new Promise((resolve, reject) => {
						let img = target.querySelector('img');
						// set selected image into the src attribute via createObjectURL API
						let url_media = URL.createObjectURL(selected_file);
						img.src = url_media;
						// show the image
						img.classList.remove('hidden');
						// hide the label text element
						target.querySelector('.label-text').classList.add('hidden');

						return resolve(url_media);
					});
				}
			}

			// if video
			if(this.allowedVideoTypes.includes(selected_file_type)) {
				promise_preview = function() { 
					return new Promise((resolve, reject) => {
						// hide label-text element
						target.querySelector('.label-text').classList.add('hidden');

						let video = target.querySelector('video'),
							video_source = video.querySelector('source'),
							canvas = target.querySelector('canvas'),
							ctx = canvas.getContext('2d'),
							img = target.querySelector('img');

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

			// get images data from state
			let images = this.state.images;
			// find current image element in array by given id
			const currentImage = images.find((item) => {
				return item.id == id;
			});
			const is_dirty = currentImage.dirty;

			promise_preview().then((url_media) => {
				objExtend(currentImage, {
					id,
					dirty: true,
					file: selected_file,
					url: url_media
				});

				// update it!
				this.setState({
					images
				});

				// if image isn't dirty
				if(!is_dirty) {
					// add another image
					this.addImage().catch(function() {});
				}
			});
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

	handleStep(step) {
		this.setState({
			currentStep: step
		});
	}

	componentDidUpdate() {
		const { currentStep } = this.state;

		if(!this.firstMedia && currentStep == 'media') {
			this.addDropzone();
			this.addImage();
			this.firstMedia = true;
		}

		if(currentStep == 'caption') {
			// destroy all libraries
			if(this.simplemde) {
				this.simplemde.toTextArea();
				this.simplemde = null;
			}
			if(this.sortable) {
				this.sortable.destroy();
			}

			// init all libraries
			this.sortable = Sortable.create(document.querySelector('.images'));

			this.simplemde = new SimpleMDE({
				element: document.querySelector('.simplemde'),
				hideIcons: ['image', 'fullscreen', 'side-by-side', 'guide'],
				status: false
			});
		}
	}

	componentWillUnmount() {
	}

	titleOnInput(e) {
		this.setState({
			title: e.target.value,
			slug: slugify(e.target.value)
		});
	}

	render() {
		const { message } = this.props;
		const { title, slug, images, currentStep } = this.state;

		return (
			<>
			    <div className="container mx-auto px-4 sm:px-0">
			        <div className="flex py-12 -mx-4 justify-center">
			            <div className="w-full lg:w-6/12 px-4 md:w-8/12">
			            	{currentStep == 'basic' &&
								<form className="border-2 border-gray-200 p-8 rounded" autoComplete="off">
							        <h1 className="text-indigo-600 text-xl font-semibold">Buat Post</h1>
							        <p className="mb-4 mt-2 text-sm text-gray-600">Bagikan pengetahuan kamu dengan developer lain; begitu pula dengan developer lain, mereka akan melakukan hal serupa.</p>

									<div className="mb-6 mt-6">
										<label className="mb-1 text-sm inline-block text-gray-600">Judul</label>
										<input onChange={this.titleOnInput.bind(this)} type="text" name="title" className="text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" />
										<p className="mt-2 text-sm text-indigo-600">{routes.single.replace(/slug/g, '') + slug}</p>
									</div>
									<div className="mb-6">
										<label className="mb-1 text-sm inline-block text-gray-600">Topik</label>
										<input type="text" name="tags[]" className="tags text-gray-600 border-2 border-gray-200 rounded block w-full py-3 px-5 focus:outline-none focus:border-indigo-600" />
									</div>

									<a className="text-white cursor-pointer hover:bg-indigo-700 bg-indigo-600 p-4 block text-sm rounded shadow-md text-center" onClick={this.handleStep.bind(this, 'media')}>Simpan &amp; Lanjutkan</a>
								</form>
							}

							{currentStep == 'media' &&
								<form onSubmit={this.submitMedia.bind(this)} className="border-2 border-gray-200 p-8 rounded" autoComplete="off">
							        <h2 className="text-indigo-600 text-xl font-semibold">Media</h2>
									<p className="mt-1 text-sm mb-4 text-gray-600">Pilih <span className="tooltip cursor-help border-b-2 border-dotted border-black" title={this.allowedImageTypes.join('\n')}>gambar</span> atau <span className="cursor-help border-b-2 border-dotted border-black tooltip" title={this.allowedVideoTypes.join('\n')}>video</span> yang hendak diunggah. Kamu dapat menentukan urutan media pada langkah berikutnya.</p>

									<div className="mb-6">
										<div className="flex image-files -mx-2 flex-wrap justify-center">
											{ images.map((item) => {
												return <ImageTemplate 
													key={item.id} 
													id={item.id}
													dirty={item.dirty}
													onChange={this.handleImage.bind(this, item.id)}
													onRemove={this.handleRemove.bind(this, item.id)}
													url={item.url}
												/>;
											}) }
										</div>
									</div>

									<button type="submit" className="text-white cursor-pointer hover:bg-indigo-700 bg-indigo-600 p-4 block text-sm rounded shadow-md text-center block w-full">Unggah &amp; Lanjutkan</button>
								</form>
							}

							{currentStep == 'caption' &&
								<form className="border-2 border-gray-200 p-8 rounded" autoComplete="off">
							        <h2 className="text-indigo-600 text-xl font-semibold">Caption</h2>
									<p className="mt-1 text-sm mb-4 text-gray-600">Buat deskripsi untuk setiap media yang kamu unggah. Kamu juga dapat mengurutkan gambar bila belum sesuai.</p>

									<div className="mb-6">
										<div className="images counter flex -mx-1 overflow-auto">
											{ images.map((item, index) => {
												if(item.url) {
													return (
														<div key={item.id} className="relative mx-1 flex-shrink-0">
															<div className="w-5 h-5 flex justify-center items-center bg-black text-white rounded-full absolute top-0 left-0 counter-item"></div>
															<img src={item.url} alt={item.url} className="w-20 h-20 object-cover rounded border-2 border-gray-200" key={item.id} />
														</div>
													);
												}
											}) }
										</div>
									</div>

									<div className="">
										<textarea className="simplemde"></textarea>
									</div>

									<a className="text-white cursor-pointer hover:bg-indigo-700 bg-indigo-600 p-4 block text-sm rounded shadow-md text-center block" onClick={this.handleStep.bind(this, 'caption')}>Unggah &amp; Lanjutkan</a>

									<div className="mt-4 text-center">
										<a onClick={this.handleStep.bind(this, 'media')} className="text-sm text-indigo-600 cursor-pointer">&lsaquo; Kembali</a>
									</div>
								</form>
							}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Form;