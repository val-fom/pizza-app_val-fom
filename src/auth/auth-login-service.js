import { loginUser } from '../utils/api';
import { errorHandler } from '../utils/';

class AuthService {
	constructor() {
		this._token = localStorage.getItem('token') || null;
		this._claims = null;
	}

	set token(token) {
		this._token = token;
		localStorage.setItem('token', token);
	}

	get token() {
		return this._token;
	}

	// set claims() {

	// }

	// get claims() {

	// }

	// isAuthorized() {

	// }

	// tokenIsNotExpired() {

	// }

	login(userData) {
		return loginUser(userData)
			.then(res => {
				if (res.success) this.token = res.token;
				return res;
			});
	}
}

export const AUTH_SERVICE = new AuthService();
