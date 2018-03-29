import './login-form.scss';

import { parseHTML } from '../../utils';
import { Component } from '../../framework';
import { AUTH_SERVICE } from '../../api';
import Message from '../Message';

export default class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');

		this.host.addEventListener('submit', ev => this.handleSubmit(ev));

		this.message = new Message();
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const userData = {
			username: ev.target.username.value,
			password: ev.target.password.value,
		};

		AUTH_SERVICE.login(userData)
			.then(response => {
				if (response.success) {
					this.message.update({ response });
					// redirect to '/user'
					setTimeout(() => {
						window.location.hash = '/user';
					}, 1000);
					// TODO: employ callback here. Like so:
					// this.props.onSuccess();
				} else {
					this.message.update({ response });
				}
			})
			.catch(console.error);
	}

	render() {
		const form = `
<form class="login-form" method="post">
	<label for="username">Username:</label>
	<input type="text" class="login-form__name" name="username" id="username" required>
	<label for="password">Password:</label>
	<input type="password" class="login-form__password" name="password"
		id="password" required>
	<div class="login-form__button-wrapper">
		<input type="submit" class="button login-form__button button--sign-in"
			value="Login">
		<a href="#/register" class="button login-form__button button--sign-up">
			Sign up
		</a>
	</div>
</form>
		`;

		return [
			form,
			this.message.update(),
		];
	}
}
