import './create-pizza.scss';

import { Component } from '../../framework';
import { API_SERVICE } from '../../api';
import Message from '../Message';

export default class CreatePizza extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('pizza__container');

		this.host.addEventListener('submit', ev => this.handleSubmit(ev));

		this.message = new Message();
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
		const { ingredients, tags, images } = this.props;
		console.log('this.props: ', this.props);

		const form = `
	<form class="create-pizza__form" method="post">
		<label for="pizza-name">Pizza name:</label>
		<input type="text" class="create-pizza__name" name="name" id="pizza-name" required min="3" max="24">
		
		<fieldset>
			<legend class="create-pizza__legend">Pizza size:</legend>
			<div class="create-pizza__fieldset-inner">
				<input type="radio" class="size__choice" name="size" id="pizzaSize30" value="30" required>
				<label for="pizzaSize30">Ø30</label>
				<input type="radio" class="size__choice" name="size" id="pizzaSize45" value="45" required>
				<label for="pizzaSize45">Ø45</label>
				<input type="radio" class="size__choice" name="size" id="pizzaSize60" value="60" required>
				<label for="pizzaSize60">Ø60</label>
			</div>
		</fieldset>
	
		<fieldset>
			<legend class="create-pizza__legend">Ingredients:</legend>
			<div class="create-pizza__fieldset-inner">
			${ingredients.reduce((html, ingredient) => {
				return html += `
				<label class="create-pizza__checkbox-label">
					<input class="create-pizza__checkbox"
						type="checkbox" name="${ingredient.name}">
					<span class="create-pizza__checkbox-span create-pizza__checkbox-span--ingredient" style="background-image: url(${API_SERVICE.DOMAIN}/${ingredient.image_url})">
						${ingredient.name}
					</span>
				</label>
			`;
			}, '')}
			</div>
		</fieldset>
	
		<fieldset>
			<legend class="create-pizza__legend">Tags:</legend>
			<div class="create-pizza__fieldset-inner">
				${tags.reduce((html, tag) => {
				return html += `
					<label class="create-pizza__checkbox-label">
						<input class="create-pizza__checkbox" type="checkbox" name="${tag.name}">
						<span class="create-pizza__checkbox-span">${tag.name}</span>
					</label>
				`;
			}, '')}
			</div>
		</fieldset>
	
		<input 
			type="submit" 
			class="button create-pizza__button" 
			value="Create Pizza"
		>
	</form>
		`;

		return [
			form,
			this.message.update(),
		];
	}
}
