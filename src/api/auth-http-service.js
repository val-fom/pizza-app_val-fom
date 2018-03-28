import { status, json } from '../utils';
import { AUTH_SERVICE } from './auth-login-service';


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
					// the token is not expired, but is invalid
					// it looks like someone logged in with another browser
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
