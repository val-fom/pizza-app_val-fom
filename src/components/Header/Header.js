import './header.scss';
import { parseHTML } from '../../utils';
import { Component } from '../../framework';

import Clock from '../Clock';

export default class Header extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('header__container');

		this.clock = new Clock();
	}

	render() {
		const html = `
			<header class="header">
				<div class="header__time" id="time">
				</div>
				<div class="header__logo">
					<a href="#/">
						<img class="logo__img" src="img/pizza-logo.png"
							alt="Pizza app logo">
					</a>
				</div>
				<div class="header__login">
					<a href="#/user" class="button login__button">
						<i class="fa fa-sign-in"></i>
						Login/Signup
					</a>
				</div>
			</header>
		`;

		const fragment = parseHTML(html);
		fragment.getElementById('time').append(this.clock.update());

		return fragment;
	}
}
