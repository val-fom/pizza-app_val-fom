import './message.scss';
import { Component } from '../../framework';

export default class Message extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('message__container');
	}

	render() {
		const { success, error, validations } = this.props;

		if (success) {
			return `<p class="message--success">Login success! Redirecting...</p>`;
		} else if (validations) {
			return `
				<p class="message--error">${error}:</p>
				<ul class="message__validations">
					${validations.map(validation =>
						`<li>${validation}</li>`).join('')}
				</ul>
			`;
		} else {
			return `<p class="message__error">${error}:</p>`;
		}
	}
}
