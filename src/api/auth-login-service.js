import { parseJwtClaims } from '../utils';
import { API_SERVICE } from '.';

class AuthService {
	constructor() {
		this._token = localStorage.getItem('token') || null;
		this._claims = JSON.parse(localStorage.getItem('claims')) || null;

		this.isAuthorized = this.isAuthorized.bind(this);
	}

	set token(token) {
		this._token = token;
		localStorage.setItem('token', token);
	}

	get token() {
		return this._token;
	}

	set claims(claims) {
		this._claims = claims;
		localStorage.setItem('claims', JSON.stringify(claims));
	}

	get claims() {
		return this._claims;
	}

	get username() {
		if (this.isAuthorized()) return this.claims.username;
	}

	isAuthorized() {
		return this.tokenIsNotExpired();
	}

	tokenIsNotExpired() {
		if (!this.token) return false;
		return this.claims.exp < Date.now();
	}

	logout() {
		this._token = null;
		localStorage.removeItem('token');
		this._claims = null;
		localStorage.removeItem('claims');
	}

	login(credentials) {
		return API_SERVICE.loginUser(credentials)
			.then(response => {
				const { success, token } = response;
				if (success) {
					this.token = token;
					this.claims = parseJwtClaims(token);
					return { success };
					// ^ encapsulating token in login service
				}
				return response;
			});
	}
}

export const AUTH_SERVICE = new AuthService();
