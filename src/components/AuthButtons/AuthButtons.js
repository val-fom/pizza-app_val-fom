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
		this.host.classList.add('buttons__container');
	}

	render() {
		return `
		<a href="#/user" class="button login__button">
			<i class="fa fa-sign-in"></i>
			Login/Signup
		</a>
		`;
	}
}
