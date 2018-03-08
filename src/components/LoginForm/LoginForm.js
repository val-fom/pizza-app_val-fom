import './login-form.scss';

import { Component } from '../../framework';

export default class LoginForm extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('login__container');
	}

	render() {
		return `
			<form class="login">
				<input type="text" class="login__name" required>
				<input type="password" class="login__password" required>
				<input type="submit" value="Sign in">
			</form>
		`;
	}
}
