import { API_SERVICE } from '.';

class PizzaDataService {
	constructor() {
		this.ingredients = [];
		this.tags = [];
		this.images = {};
		this.maxNumberOfIngredients = 6;

		this.crust_pizza = `${API_SERVICE.DOMAIN}/static/images/pizza.png`;
	}

	preloadAllPizzaData() {
		return Promise.all([
			this._getIngredients()
				.then(() => this._loadResources())
				.then(resources => resources.forEach(resource =>
					this.images[resource.name] = resource.image)),
			this._getTags()
		]);
	}

	_getIngredients() {
		return API_SERVICE.getIngredientList()
			.then(data => this.ingredients = data.results);
	}

	_getTags() {
		return API_SERVICE.getTagList()
			.then(data => this.tags = data.results);
	}

	_loadResources() {
		let promises = [];
		promises.push(this._loadImage('crust', this.crust_pizza));
		promises = promises.concat(this.ingredients.map(ingredient => {
			const url = `${API_SERVICE.DOMAIN}/${ingredient.image_url}`;
			return this._loadImage(ingredient.name, url);
		}));

		return Promise.all(promises);
	}

	_loadImage(name, url) {
		return new Promise((resolve, reject) => {
			const image = new Image();

			image.crossOrigin = 'Anonymous';
			image.src = url;
			image.onload = () => resolve({ name, image });
			image.onerror = e => reject(e);
		});
	}
}

export const PIZZA_SERVICE = new PizzaDataService();
