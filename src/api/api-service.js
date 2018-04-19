import { status, json } from '../utils';
import { AUTH_SERVICE } from '.';
import Header from '../components/Header';

class ApiService {
	constructor() {
		this.DOMAIN = 'https://pizza-tele.ga';
		this.WS_PATH = 'wss://pizza-tele.ga/ws';
		this.BASE_API_URL = this.DOMAIN + '/api/v1';
		this.END_POINTS = {
			storeList: '/store/list',
			userCreate: '/user/create',
			userLogin: '/user/login',
			userInfo: '/user/my_info',
			ingredientList: '/ingredient/list',
			tagList: '/tag/list',
			pizzaCreate: '/pizza/create',
			pizzaList: '/pizza/list',
			getTicket: '/ws/ticket',
		};
	}

	getTicket() {
		return this.get(this.END_POINTS.getTicket, AUTH_SERVICE.token);
	}

	getStoreList() {
		return this.get(this.END_POINTS.storeList);
	}

	getUserInfo() {
		return this.get(this.END_POINTS.userInfo, AUTH_SERVICE.token);
	}

	getPizzas() {
		return this.get(this.END_POINTS.pizzaList, AUTH_SERVICE.token);
	}

	getIngredientList() {
		return this.get(this.END_POINTS.ingredientList, AUTH_SERVICE.token);
	}

	getTagList() {
		return this.get(this.END_POINTS.tagList, AUTH_SERVICE.token);
	}

	createPizza(pizzaData) {
		return this.post(this.END_POINTS.pizzaCreate, pizzaData, AUTH_SERVICE.token);
	}

	loginUser(credentials) {
		return this.post(this.END_POINTS.userLogin,
			JSON.stringify(credentials));
	}

	createUser(userData) {
		return this.post(this.END_POINTS.userCreate,
			JSON.stringify(userData));
	}

	get(endpoint, token) {
		const headers = new Headers({ 'accept': 'application/json' });

		if (token) {
			headers.append('Authorization', `Bearer ${token}`);
		}

		return fetch(this.BASE_API_URL + endpoint, { headers })
			.then(status)
			.then(json)
			.catch(console.error);
	}

	post(endpoint, payload, token) {
		const headers = new Headers();

		if (token) {
			headers.append('Authorization', `Bearer ${token}`);
		}

		return fetch(this.BASE_API_URL + endpoint, {
			method: 'POST',
			body: payload,
			headers,
		})
			.then(status)
			.then(json)
			.catch(console.error);
	}
}

export const API_SERVICE = new ApiService();
