import { API_SERVICE } from '.';

class PizzaDataService {
	constructor() {
		this.ingredients = [];
		this.tags = [];

		this.getIngredients();
		this.getTags();
	}

	getIngredients() {
		return API_SERVICE.getIngredientList()
			.then(data => this.ingredients = data.results);
	}

	getTags() {
		return API_SERVICE.getTagList()
			.then(data => this.tags = data.results);
	}
}

export const PIZZA_SERVICE = new PizzaDataService();
