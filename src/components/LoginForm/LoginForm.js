import './login-form.scss';

import { Component } from '../../framework';
import { AUTH_SERVICE } from '../../auth/auth-login-service';
import { errorHandler } from '../../utils/';

export default class LoginForm extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');

		this.host.addEventListener('submit', ev => this.handleSubmit(ev))
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const userData = {
			username: ev.target.username.value,
			password: ev.target.password.value,
		};

		AUTH_SERVICE.login(userData)
			.then(res => {
				if (res.success) {
					// redirect to '/user_info'
				} else {
					errorHandler(res);
				}
			})
			.catch(console.error);
	}

	render() {
		const { errorMessage } = this.state;

		return `
<form class="login-form" method="post">
	<label for="username">Username:</label>
	<input type="text" class="login-form__name" name="username" id="username" required>
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
