import objExtend from '../utils/obj-extend';

class Toast {
	constructor(options) {
		this.id = 'toast-' + this.generateID();
		this.classes = {
			wrapper: 'fixed absolutely-center bottom-0 p-4  z-9999',
			toast: 'anim-fade-up transition bg-black text-white px-4 py-3 rounded mt-2 shadow'
		};

		this.options = objExtend({
			timeout: 3000
		}, options);

		this.init();

		return this;
	}

	generateID() {
		return new Date().valueOf();
	}

	elementWrapper() {
		let template = `
			<div class="${this.classes.wrapper}" id="${this.id}">
			</div>
		`;

		return template;
	}

	elementToast(string) {
		const id = 'toast-' + this.generateID();
		let template = `
			<div class="${this.classes.toast}" id="${id}">
				${string}
			</div>
		`;

		return {template, id};
	}

	insertToast({string}) {
		const template = this.elementToast(string);

		this.wrapper.insertAdjacentHTML('afterBegin', template.template);

		setTimeout(() => {
			this.disposeToast(template.id);
		}, this.options.timeout);
	}

	disposeToast(element) {
		if(typeof element == 'string') element = document.querySelector('#' + element);

		element.classList.add('anim-fade-down');
		setTimeout(() => {
			element.remove();
		}, 500);
	}

	insertWrapper() {
		const body = document.body;
		const wrapper = this.elementWrapper();

		body.insertAdjacentHTML('beforeEnd', wrapper);
		this.wrapper = document.querySelector('#' + this.id);
	}

	init() {
		this.insertWrapper();
	}

	add(string) {
		this.insertToast({string});
	}
}

export default Toast;
