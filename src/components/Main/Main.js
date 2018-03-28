import './main.scss';
import { Component } from '../../framework';

import List from '../List';

export default class Main extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('main');
		this.host.classList.add('main__container');

		this.list = new List();
	}

	render() {
		return [
			'<button class="button main__button">+ Add new pizza</button>',
			this.list.update(),
		];
	}
}
