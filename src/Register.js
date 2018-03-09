// import './scss/login.scss';

import { Component } from './framework';

import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

export default class Register extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('register__container');

		this.header = new Header();
		this.registerForm = new RegisterForm();
		this.footer = new Footer();
	}

	render() {
		return [
			this.header.update(),
			this.registerForm.update(),
			this.footer.update(),
		];
	}
}