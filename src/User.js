// import './scss/login.scss';

import { Component } from './framework';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

export default class User extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('login__container');

		this.header = new Header();

		this.footer = new Footer();
	}

	render() {
		return [
			this.header.update(),
			'user info goes here',
			this.footer.update(),
		];
	}
}
