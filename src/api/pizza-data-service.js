import { API_SERVICE } from '.';

class PizzaDataService {
	constructor() {
		this.ingredients = [];
		this.tags = [];

		this.getIngredients();
		this.getTags();

		this.crust_pizza = 'https://pizza-tele.ga/static/images/pizza.png';
	}

	getIngredients() {
		return API_SERVICE.getIngredientList()
			.then(data => this.ingredients = data.results);
	}

	getTags() {
		return API_SERVICE.getTagList()
			.then(data => this.tags = data.results);
	}

	// TODO: preload and encapsulate all images;

	// loadImage(url) {
	// 	return new Promise((resolve, reject) => {
	// 		const image = new Image();
	// 		image.src = url;
	// 		image.onload = () => resolve(image);
	// 		image.onerror = () => reject(image);
	// 	});
	// }

	// loadResources() {
	// 	let promises = [];
	// }

	// this.loadImage(this.crust_pizza)
	// 	.then(image => {
	// 	this.ctx.drawImage(image, 10, 10, 300, 300);
	// });
}

export const PIZZA_SERVICE = new PizzaDataService();
