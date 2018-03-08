import './scss/main.scss';

import { Component } from './framework';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
	constructor({ host }) {
		super();

		this.state = {
		}

		this.host = host;

		this.header = new Header();
		this.main = new Main();
		this.footer = new Footer();
	}

	render() {
		return [
			this.header.update(),
			this.main.update(),
			this.footer.update(),
		];
	}
}
