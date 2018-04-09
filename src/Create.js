import { Component } from './framework';

import Header from './components/Header';
import Canvas from './components/Canvas';
import CreatePizza from './components/CreatePizza';
import Footer from './components/Footer';

export default class Create extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('create__container');

		this.header = new Header();
		this.canvas = new Canvas();
		this.createPizza = new CreatePizza({
			onChange: this.onFormChange,
		});
		this.footer = new Footer();

		this.main = document.createElement('main');
		this.main.classList.add('main', 'main--create');

		this.onFormChange = this.onFormChange.bind(this);

	}

	onFormChange(ingredients) {
		this.canvas.update({
			ingredients,
		});
	}

	render() {
		this.main.append(this.canvas.update());
		this.main.append(this.createPizza.update());

		return [
			this.header.update(),
			this.main,
			this.footer.update(),
		];
	}
}
