import { Component } from './framework';

import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';

export default class Register extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('register__container');

		this.header = new Header();
		this.registerForm = new RegisterForm();
		this.footer = new Footer();

		this.main = document.createElement('main');
		this.main.classList.add('main');
	}

	render() {
		this.main.append(this.registerForm.update());

		return [
			this.header.update(),
			this.main,
			this.footer.update(),
		];
	}
}
