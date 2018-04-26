import { parseHTML } from './utils';
import { Component } from './framework';
import { API_SERVICE } from './api';

import Header from './components/Header';
import List from './components/List';
import Paginator from './components/Paginator';
import Footer from './components/Footer';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('app__container');

		this.maxPizzasOnPage = 6;

		this.header = new Header();
		this.list = new List();
		this.paginator = new Paginator(
			{ maxPizzasOnPage: this.maxPizzasOnPage }
		);
		this.footer = new Footer();

		this.main = document.createElement('main');
		this.main.classList.add('main');

		this.getPizzas(this.maxPizzasOnPage, 0);
	}

	beforeUnmount() {
		this.list.unmount();
	}

	getPizzas(limit, offset) {
		return API_SERVICE.getPizzas(limit, offset)
			.then(response => {
				console.log('response: ', response);
				this.list.update({ pizzas: response.results });
				this.paginator.update({
					unacceptedPizzasAmount: response.count,
					maxPizzasOnPage: this.maxPizzasOnPage,
					currentPage: 1,
				});
			});
	}

	render() {
		const button = `
			<a href="#/create" class="button main__button">
				+ Add new pizza
			</a>
		`;

		this.main.append(
			parseHTML(button),
			this.list.update({ pizzas: [] }),
			this.paginator.update()
		);

		return [
			this.header.update(),
			this.main,
			this.footer.update(),
		];
	}
}
