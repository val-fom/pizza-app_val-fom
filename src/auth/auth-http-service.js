import { status, json } from '../utils';
import { AUTH_SERVICE } from './auth-login-service.js';


class AuthHttpService {
	get(url, /*headers*/) {
		if (!AUTH_SERVICE.isAuthorized) {
			throw new Error('Non-authorized request');
		}

		const headers = new Headers();

		headers.append('Authorization', `Bearer ${AUTH_SERVICE.token}`);
		headers.append('content-type', 'application/json');

		return fetch(url, {
			method: 'GET',
			headers,
		})
		.then(status)
		.then(json)
		.then(console.log);
	}

	post() {

	}

	patch() {

	}

}

export const AUTH_HTTP = new AuthHttpService();
