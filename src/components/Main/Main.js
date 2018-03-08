import './main.scss';
import { Component } from '../../framework';

import List from '../List';

export default class Main extends Component {
	constructor() {
		super();

		this.host = document.createElement('main');
		this.host.classList.add('main__container');

		this.addButton = document.createElement('button');
		this.addButton.classList.add('list__button', 'button');
		this.addButton.addEventListener('click', () => {});
		this.addButton.textContent = '+ Add new pizza';

		this.list = new List();
	}

	render() {
		return [
			this.addButton,
			this.list.update(),
		];
	}
}
