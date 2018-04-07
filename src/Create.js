import { Component } from './framework';

import Header from './components/Header';
import CreatePizza from './components/CreatePizza';
import Footer from './components/Footer';

export default class Create extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('create__container');

		this.header = new Header();
		this.createPizza = new CreatePizza();
		this.footer = new Footer();

		this.main = document.createElement('main');
		this.main.classList.add('main');
	}

	render() {
		this.main.append(this.createPizza.update());

		return [
			this.header.update(),
			this.main,
			this.footer.update(),
		];
	}
}
