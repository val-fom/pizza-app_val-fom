import './scss/main.scss';

import { Component } from './framework';

import Header from './components/Header';
import CreatePizza from './components/CreatePizza';
import Footer from './components/Footer';

export default class Create extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('app__container');

		this.header = new Header();
		this.createPizza = new CreatePizza();
		this.footer = new Footer();
	}

	render() {
		return [
			this.header.update(),
			this.createPizza.update(),
			this.footer.update(),
		];
	}
}
