import './login-form.scss';

import { parseHTML } from '../../utils';
import { Component } from '../../framework';
import { AUTH_SERVICE } from '../../auth/auth-login-service';
import Message from '../Message';

export default class LoginForm extends Component {
	constructor() {
		super();

		this.state = {
			response: null,
		}

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');

		this.host.addEventListener('submit', ev => this.handleSubmit(ev))

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
					this.updateState({ response });
					// redirect to '/user'
					setTimeout(() => {
						window.location.hash = '/user';
					}, 1000);
					// TODO: employ callback here. Like so:
					// this.props.onSuccess();
				} else {
					this.updateState({ response });
				}
			})
			.catch(console.error);
	}

	render() {
		const { response } = this.state;

		const html = `
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
		const fragment = parseHTML(html);

		if (response) {
			fragment.append(this.message.update(response));
		}

		return fragment;
	}
}
