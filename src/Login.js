import { Component } from './framework';

import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('login__container');

		this.header = new Header();
		this.loginForm = new LoginForm();
		this.footer = new Footer();

		this.main = document.createElement('main');
		this.main.classList.add('main');
	}

	render() {
		this.main.append(this.loginForm.update());

		return [
			this.header.update(),
			this.main,
			this.footer.update(),
		];
	}
}
