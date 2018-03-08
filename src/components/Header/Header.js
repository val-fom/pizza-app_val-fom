import './header.scss';
import { getTime } from '../../utils';
import { Component } from '../../framework';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			currentTime: '00:00:00',
		}

		this.host = document.createElement('div');
		this.host.classList.add('header__container');

		// setInterval(() => {
		// 	const currentTime = getTime();
		// 	this.updateState({ currentTime })
		// }, 1000);
	}

	render() {
		const { currentTime } = this.state;

		return `
<header class="header">
	<div class="header__time">
		<i class="fa fa-clock-o"></i>
		<time class="time__current-time" id="current-time">${currentTime}</time>
	</div>
	<div class="header__logo">
		<a href="#">
			<img class="logo__img" src="img/pizza-logo.png" alt="Pizza app logo">
		</a>
	</div>
	<div class="header__login">
		<button type="button" class="button login__button">
			<i class="fa fa-sign-in"></i>
			Login/Signup
		</button>
	</div>
</header>
		`;
	}
}
