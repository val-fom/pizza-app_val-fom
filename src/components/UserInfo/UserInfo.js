import './user-info.scss';

import { parseHTML } from '../../utils';
import { Component } from '../../framework/';

export default class UserInfo extends Component {
	constructor() {
		super();

		this.host = document.createElement('div');
		this.host.classList.add('user-info__container');
	}

	render() {
		const { userData } = this.props;

		if (!userData) return '';

		return `
			<table class="user-info__table">
				<caption>User Info</caption>
				<tbody id="table">
					<tr>
						<td>username</td>
						<td>${userData.username}</td>
					</tr>
					<tr>
						<td>uuid</td>
						<td>${userData.uuid}</td>
					</tr>
					<tr>
						<td>email</td>
						<td>${userData.email}</td>
					</tr>
					<tr>
						<td>created_at</td>
						<td>${userData.created_at}</td>
					</tr>
					<tr>
						<td>last_login</td>
						<td>${userData.last_login}</td>
					</tr>
				</tbody>
			</table>
		`;
	}
}
