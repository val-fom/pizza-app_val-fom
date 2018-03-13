import {AUTH_SERVICE} from './auth-login-service.js';

class AuthHttpService {
	get(url, headers) {
		if (!AUTH_SERVICE.isAuthorized) {
			throw new Error('Non-authorized request');
		}
		const headers = new Headers().append('')
	}

	post() {

	}

	patch() {

	}

}

export const AUTH_HTTP = new AuthHttpService();
