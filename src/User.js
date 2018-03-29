// import './scss/login.scss';

import { Component } from './framework';

import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Footer from './components/Footer';
import { API_SERVICE } from './api';

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
		return API_SERVICE.getUserInfo()
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
