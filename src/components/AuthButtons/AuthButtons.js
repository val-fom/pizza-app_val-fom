import './auth-buttons.scss';
import { AUTH_SERVICE } from '../../api';
import { Component } from '../../framework';

export default class AuthButtons extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: null,
		};

		this.host = document.createElement('div');
		this.host.classList.add('auth__container');

		this.getAuthData();
	}

	getAuthData() {
		const userName = AUTH_SERVICE.username;
		this.updateState({ userName });
	}

	render() {
		const { userName } = this.state;

		return `
	<a href="${userName ? '#/user' : '#/register'}" class="button auth__button">
		<i class="fa ${userName ? 'fa-user' : 'fa-user-plus'}"></i>
		${userName ? userName : 'Sign up'}
	</a>
	<a href="${userName ? '#/logout' : '#/login'}" class="button auth__button">
		<i class="fa ${userName ? 'fa-sign-out' : 'fa-sign-in'}"></i>
		${userName ? 'Logout' : 'Login'}
	</a>
		`;
	}
}
