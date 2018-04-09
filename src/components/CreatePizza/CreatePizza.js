import './create-pizza.scss';

import { Component } from '../../framework';
import { API_SERVICE } from '../../api';
import { PIZZA_SERVICE } from '../../api';
import Message from '../Message';

export default class CreatePizza extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredients: [],
			tags: [],
		};

		this.host = document.createElement('div');
		this.host.classList.add('pizza__container');

		this.host.addEventListener('submit', ev => this.handleSubmit(ev));

		this.message = new Message();

		this.getLists();
	}

	getLists() {
		return Promise.all([
			PIZZA_SERVICE.getIngredients(),
			PIZZA_SERVICE.getTags(),
		]).then(([ingredients, tags]) =>
			this.updateState({ ingredients, tags })
		);
	}


	handleSubmit(ev) {
		ev.preventDefault();
		const pizzaData = {
			username: ev.target.username.value,
			password: ev.target.password.value,
			password_repeat: ev.target.password_repeat.value,
			email: ev.target.email.value,
			store_id: +ev.target.store_id.value,
			store_password: ev.target.store_password.value,
		};

		return API_SERVICE.createPizza(pizzaData)
			.then(response => {
				if (response.success) {
					this.message.update({ response });
					// redirect to '/login'
					setTimeout(() => {
						window.location.hash = '/login';
					}, 1000);
					// TODO: employ callback here. Like so:
					// this.props.onSuccess();
				} else {
					this.message.update({ response });
				}
			})
			.catch(console.error);
	}

	render() {
		const { ingredients, tags } = this.state;
		console.log('ingredients, tags: ', ingredients, tags);

		// const options = ingredients.map(ingredient => {
		// 	let selected = '';
		// 	if (ingredient.id == 2) selected = 'selected';
		// 	return `<option value="${ingredient.id}" ${selected}>${ingredient.name}</option>`;
		// }).join('');

		const form = `
	<form class="create-pizza__form" method="post">
		<label for="pizza-name">Pizza name:</label>
		<input type="text" class="create-pizza__name" name="name" id="pizza-name" required min="3" max="24">
		
		<fieldset>
			<legend>Pizza size:</legend>
			<input type="radio" class="size__choice" name="size" id="pizzaSize30" value="30" required>
			<label for="pizzaSize30">Ø30</label>
			<input type="radio" class="size__choice" name="size" id="pizzaSize45" value="45" required>
			<label for="pizzaSize45">Ø45</label>
			<input type="radio" class="size__choice" name="size" id="pizzaSize60" value="60" required>
			<label for="pizzaSize60">Ø60</label>
		</fieldset>
	
		<fieldset>
			<legend>Ingredients:</legend>
			${ingredients.reduce((html, ingredient) => {
				// console.log(ingredient);
				return html += `
				<label>
					<img src="${API_SERVICE.DOMAIN}/${ingredient.image_url}" alt="">
					<input type="checkbox" name="${ingredient.name}">
				</label>
			`;
			}, '')}
		</fieldset>
	
		<fieldset>
			<legend>Tags:</legend>
			${tags.reduce((html, tag) => {
				// console.log(tag);
				return html += `
				<label>
					${tag.name}
					<input type="checkbox" name="${tag.name}">
				</label>
			`;
			}, '')}
		</fieldset>
	
		<input type="submit" class="button pizza__button" value="Create Pizza">
	</form>
		`;

		return [
			form,
			this.message.update(),
		];
	}
}
