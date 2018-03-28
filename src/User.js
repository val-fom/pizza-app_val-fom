// import './scss/login.scss';

import { Component } from './framework';

import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Footer from './components/Footer';
import { AUTH_HTTP } from './auth/auth-http-service.js';

export default class User extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userData: null,
		};

		this.host = document.createElement('div');
		this.host.classList.add('login__container');

		this.header = new Header();
		this.userInfo = new UserInfo();
		this.footer = new Footer();

		this.getUserData();
	}

	getUserData() {
		return AUTH_HTTP.get('https://pizza-tele.ga/api/v1/user/my_info')
			.then(userData => this.updateState({ userData }));
	}

	render() {
		const { userData } = this.state;

		return [
			this.header.update(),
			this.userInfo.update({ userData }),
			this.footer.update(),
		];
	}
}
