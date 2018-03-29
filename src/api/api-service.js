import { status, json } from '../utils';

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

	loginUser(credentials) {
		return this.post(this.END_POINTS.userLogin, credentials);
	}

	createUser(userData) {
		return this.post(this.END_POINTS.userCreate, userData);
	}

	get(endpoint) {
		return fetch(this.BASE_API_URL + endpoint)
			.then(status)
			.then(json);
	}

	post(endpoint, payload) {
		return fetch(this.BASE_API_URL + endpoint, {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: { 'content-type': 'application/json' },
		})
			.then(status)
			.then(json);
	}
}

export const API_SERVICE = new ApiService();
