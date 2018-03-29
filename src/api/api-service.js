import { status, json } from '../utils';
import { AUTH_SERVICE } from '.';
import Header from '../components/Header';

class ApiService {
	constructor() {
		this.BASE_API_URL = 'https://pizza-tele.ga/api/v1';
		this.END_POINTS = {
			storeList: '/store/list',
			userCreate: '/user/create',
			userLogin: '/user/login',
			userInfo: '/user/my_info',
			ingredientList: '/ingredient/list',
		};
	}

	getStoreList() {
		return this.get(this.END_POINTS.storeList);
	}

	getUserInfo() {
		return this.get(this.END_POINTS.userInfo, AUTH_SERVICE.token);
	}

	loginUser(credentials) {
		return this.post(this.END_POINTS.userLogin, credentials);
	}

	createUser(userData) {
		return this.post(this.END_POINTS.userCreate, userData);
	}

	get(endpoint, token) {
		const headers = new Headers({ 'accept': 'application/json' });

		if (token) {
			headers.append('Authorization', `Bearer ${token}`);
		}

		return fetch(this.BASE_API_URL + endpoint, { headers })
			.then(status)
			.then(json)
			.then(response => {
				if (response.error === 'Wrong authorization data') {
					// the token is not expired, but is invalid
					// it looks like someone logged in with another browser
					window.location.hash = '/logout';
					throw new Error(response.error);
				} else {
					return response;
				}
			})
			.catch(console.error);
	}

	post(endpoint, payload) {
		return fetch(this.BASE_API_URL + endpoint, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: new Headers({ 'content-type': 'application/json' }),
		})
			.then(status)
			.then(json);
	}
}

export const API_SERVICE = new ApiService();
