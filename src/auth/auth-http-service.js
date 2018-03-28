import { status, json } from '../utils';
import { AUTH_SERVICE } from './auth-login-service.js';


class AuthHttpService {
	get(url/*, headers*/) {
		if (!AUTH_SERVICE.isAuthorized()) {
			throw new Error('Non-authorized request');
		}

		return fetch(url, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${AUTH_SERVICE.token}`,
				'content-type': 'application/json'
			}
		})
			.then(status)
			.then(json)
			.then(response => {
				if (response.error === 'Wrong authorization data') {
					window.location.hash = '/logout';
				} else {
					return response;
				}
			});
	}

	post() {

	}

	patch() {

	}

}

export const AUTH_HTTP = new AuthHttpService();
