import './register-form.scss';

import { parseHTML } from '../../utils';
import { Component } from '../../framework';
import { API_SERVICE } from '../../api';
import Message from '../Message';

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stores: [],
		};

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');

		this.host.addEventListener('submit', ev => this.handleSubmit(ev));

		this.message = new Message();

		this.getStores();
	}

	getStores() {
		return API_SERVICE.getStoreList()
			.then(stores => this.updateState({ stores }));
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const userData = {
			username: ev.target.username.value,
			password: ev.target.password.value,
			password_repeat: ev.target.password_repeat.value,
			email: ev.target.email.value,
			store_id: +ev.target.store_id.value,
			store_password: ev.target.store_password.value,
		};

		return API_SERVICE.createUser(userData)
			.then(response => {
				if (response.success) {
					this.message.update({ response });
					// redirect to '/login'
					setTimeout(() => {
						window.location.hash = '/login';
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
		const { stores } = this.state;

		const options = stores.map(store => {
			let selected = '';
			if (store.id == 2) selected = 'selected';
			return `<option value="${store.id}" ${selected}>${store.name}</option>`;
		}).join('');

		const form = `
<form class="register-form" method="post">
	<label for="username">Username:</label>
	<input type="text" class="register-form__name" name="username" id="username" required>
	<label for="email">Email:</label>
	<input type="email" class="register-form__email" name="email" id="email" required>
	<label for="password">Password:</label>
	<input type="password" class="register-form__password" name="password"
		id="password" required>
	<label for="password_repeat">Confirm password:</label>
	<input type="password" class="register-form__password" name="password_repeat"
		id="password_repeat" required>
	<label for="store_id">Choose your store:</label>
	<select class="register-form__store_id" name="store_id"
		id="store_id" required>
		${options}
	</select>
	<label for="store_password">Store password:</label>
	<input type="password" class="register-form__store_password" name="store_password"
		id="store_password" required>
	<input type="submit" class="button register-form__button button--register"
		value="Sign up">
</form>
		`;

		return [
			form,
			this.message.update(),
		];
	}
}
