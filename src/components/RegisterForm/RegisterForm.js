import './register-form.scss';

import { Component } from '../../framework';

export default class RegisterForm extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');
	}

	render() {
		return `
<form class="register-form" method="post">
	<label for="username">Username:</label>
	<input type="text" class="register-form__name" name="username" id="username" required>
	<label for="email">Email:</label>
	<input type="email" class="register-form__email" name="email" id="email" required>
	<label for="password">Password:</label>
	<input type="password" class="register-form__password" name="password"
		id="password" required>
	<label for="password-confirm">Confirm password:</label>
	<input type="password" class="register-form__password" name="password-confirm"
		id="password-confirm" required>
	<input type="submit" class="button register-form__button button--register"
		value="Sign up">
</form>
		`;
	}
}
