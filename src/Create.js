import { parseHTML, getCanvasAsFile } from './utils';
import { Component } from './framework';
import { PIZZA_SERVICE, API_SERVICE } from './api';

import Header from './components/Header';
import Canvas from './components/Canvas';
import CreatePizza from './components/CreatePizza';
import Footer from './components/Footer';

import Message from './components/Message';

export default class Create extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('create__container');

		this.header = new Header();
		this.canvas = new Canvas();
		this.createPizza = new CreatePizza();
		this.footer = new Footer();

		this.message = new Message();

		this.main = document.createElement('main');
		this.main.classList.add('main', 'main--create');

		this.onFormChange = this.onFormChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormChange(ingredients, size, maxSize) {
		this.canvas.update({
			ingredients,
			size,
			maxSize,
		});
	}

	onFormSubmit(formData) {
		const canvas = document.getElementById('canvas');

		getCanvasAsFile(canvas)
			.then(blob => {
				formData.append('image', blob);
				return API_SERVICE.createPizza(formData);
			})
			.then(response => {
				if (response.success) {
					this.message.update({ response });
					// redirect to '/list'
					setTimeout(() => {
						window.location.hash = '/list';
					}, 1000);
					// TODO: employ callback here. Like so:
					// this.props.onSuccess();
				} else {
					this.message.update({ response });
				}
			})
			.catch(console.error);
	}

	beforeUpdate() {
		PIZZA_SERVICE.preloadAllPizzaData()
			.then(() => {
				const { ingredients, tags, images,
					maxNumberOfIngredients } = PIZZA_SERVICE;

				this.main.append(this.canvas.update());
				this.main.append(this.createPizza.update({
					ingredients, tags, images,
					maxNumberOfIngredients,
					onChange: this.onFormChange,
					onSubmit: this.onFormSubmit,
				}));
			});
	}

	render() {
		const heading = `
			<h2 class="main__heading">Create and order your pizza!</h2>
			`;

		this.main.append(
			parseHTML(heading)
		);

		return [
			this.header.update(),
			this.main,
			this.message.update(),
			this.footer.update(),
		];
	}
}
