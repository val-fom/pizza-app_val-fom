import { loginUser } from '../utils/api';
import { errorHandler } from '../utils/';

class AuthService {
	constructor() {
		this._token = localStorage.getItem('token') || null;
		this._claims = JSON.parse(localStorage.getItem('claims')) || null;
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
		return this.claims.username;
	}

	get isAuthorized() {
		return this.tokenIsNotExpired();
	}

	tokenIsNotExpired() {
		if (!this.token) return false;
		return this.claims.exp < Date.now();
	}

	clearToken() {
		this._token = null;
		localStorage.removeItem('token');
		this._claims = null;
		localStorage.removeItem('claims');
	}

	login(userData) {
		return loginUser(userData)
			.then(response => {
				const { success, token } = response;
				if (success) {
					this.token = token;
					this.claims = this.parseJwtClaims(token);
					return { success };
					// ^ encapsulating token in login service
				}
				return response;
			});
	}

	parseJwtClaims(jwtToken) {
		const base64Url = jwtToken.split('.')[1];
		const base64 = base64Url.replace('-', '+').replace('_', '/');
		// console.log(JSON.parse(window.atob(base64)));
		return JSON.parse(window.atob(base64));
	}
}

export const AUTH_SERVICE = new AuthService();
