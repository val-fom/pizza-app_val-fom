import { parseHTML } from './utils';
import { Component } from './framework';
import { API_SERVICE } from './api';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('app__container');

		this.header = new Header();
		this.list = new List();
		this.footer = new Footer();

		this.main = document.createElement('main');
		this.main.classList.add('main');
	}

	beforeUnmount() {
		this.list.unmount();
	}

	render() {
		const button = `
			<a href="#/create" class="button main__button">
				+ Add new pizza
			</a>
		`;

		this.main.append(
			parseHTML(button),
			this.list.update()
		);

		return [
			this.header.update(),
			this.main,
			this.footer.update(),
		];
	}
}
