import './header.scss';
import { parseHTML } from '../../utils';
import { Component } from '../../framework';

import Clock from '../Clock';
import AuthButtons from '../AuthButtons';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('header__container');

		this.clock = new Clock();
		this.authButtons = new AuthButtons();
	}

	render() {
		const html = `
			<header class="header">
				<div class="header__time" id="time">
				</div>
				<div class="header__logo">
					<a href="#/list">
						<img class="logo__img" src="img/pizza-logo.png"
							alt="Pizza app logo">
					</a>
				</div>
				<div class="header__auth" id="buttons">
				</div>
			</header>
		`;

		const fragment = parseHTML(html);
		fragment.getElementById('time').append(this.clock.update());
		fragment.getElementById('buttons').append(this.authButtons.update());

		return fragment;
	}
}
