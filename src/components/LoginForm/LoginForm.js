import './login-form.scss';

import { Component } from '../../framework';

export default class LoginForm extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');
	}

	render() {
		return `
<form class="login-form" method="post">
	<label for="name">Login:</label>
	<input type="text" class="login-form__name" name="login" id="login" required>
	<label for="password">Password:</label>
	<input type="password" class="login-form__password" name="password"
		id="password" required>
	<div class="login-form__button-wrapper">
		<input type="submit" class="button login-form__button button--sign-in"
			value="Sign in">
		<a href="#/register" class="button login-form__button button--sign-up">
			Sign up
		</a>
	</div>
</form>
		`;
	}
}
