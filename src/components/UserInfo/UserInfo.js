import './user-info.scss';

import { AUTH_SERVICE } from '../../auth/auth-login-service';
import { parseHTML } from '../../utils';
import { Component } from '../../framework/';

export default class UserInfo extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('user-info__container');

		this.host.addEventListener('click', ev => this.handleLogout(ev));
	}

	handleLogout(ev) {
		if (ev.target.dataset.action = 'logout') {
			AUTH_SERVICE.clearToken();
		};
	}

	render() {
		const { userData } = this.props;

		if (!userData) return '';

		const html = `
			<table class="user-info__table">
				<caption>User Info</caption>
				<tbody id="table">
				</tbody>
			</table>
			<div class="user-info__button-wrapper">
				<a href="#/" class="button user-info__button">Pizza List</a>
				<a href="#/login" class="button user-info__button button--red"
					data-action="logout">Log out</a>
			</div>
		`;

		const fragment = parseHTML(html);
		const table = fragment.getElementById('table');

		for (let key in userData) {
			const row = parseHTML(`
					<tr>
						<td>${key}:</td>
						<td>${userData[key]}</td>
					</tr>
				`);
			table.append(row);
		}

		return fragment;
	}
}
