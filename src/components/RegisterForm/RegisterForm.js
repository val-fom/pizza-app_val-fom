import './register-form.scss';

import { Component } from '../../framework';
import * as api from '../../utils/api';

export default class RegisterForm extends Component {
	constructor() {
		super();

		this.state = {
			stores: [],
		}

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');


		this.getStores();
	}

	getStores() {
		return api.getStoreList()
			.then(stores => this.updateState({ stores }));
	}

	render() {
		const { stores } = this.state;

		const options = stores.map(store => {
			return `<option value="${store.id}">${store.name}</option>`;
		}).join();

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
	<label for="store-select">Choose your store:</label>
	<select class="register-form__store" name="store-select"
		id="store-select" required>
		${options}
	</select>
	<input type="submit" class="button register-form__button button--register"
		value="Sign up">
</form>
		`;
	}
}
