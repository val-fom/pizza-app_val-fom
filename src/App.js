import './scss/main.scss';

import { Component } from './framework';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('app__container');

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
