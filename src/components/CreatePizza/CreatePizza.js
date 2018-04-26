import './create-pizza.scss';

import { parseHTML } from '../../utils';
import { Component } from '../../framework';
import { API_SERVICE } from '../../api';

import Total from '../Total';
import Message from '../Message';

export default class CreatePizza extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('pizza__container');

		this.ingredientInputs = null;
		this.sizeInputs = null;

		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.host.addEventListener('change', this.handleFormChange);
		this.host.addEventListener('submit', this.handleSubmit);

		this.total = new Total();
	}

	shadeIngredients() {
		this.ingredientInputs.forEach(input => {
			if (input.checked) return;
			input.nextElementSibling.classList.add('js-shadowed');
		});
	}

	restoreIngredients() {
		this.ingredientInputs.forEach(input => {
			input.nextElementSibling.classList.remove('js-shadowed');
		});
	}

	handleFormChange(ev) {
		const { maxNumberOfIngredients } = this.props;

		if (!ev.target.matches('[data-canvas]')) return;

		const checkedIngredients = [];
		this.ingredientInputs.forEach(input => {
			if (input.checked) {
				checkedIngredients.push(input.dataset.ingredient);
			}
		});

		if (checkedIngredients.length > maxNumberOfIngredients - 1) {
			this.shadeIngredients();
		} else {
			this.restoreIngredients();
		}

		if (checkedIngredients.length > maxNumberOfIngredients) {
			ev.target.checked = false;
			const excessIngrIndex = checkedIngredients
				.indexOf(ev.target.dataset.ingredient);
			checkedIngredients.splice(excessIngrIndex, 1);
		}

		let size;
		let maxSize = 0;
		this.sizeInputs.forEach(input => {
			if (input.value > maxSize) {
				maxSize = +input.value;
			}
			if (input.checked) {
				size = +input.value;
			}
		});

		this.props.onChange(checkedIngredients, size, maxSize);

		this._updateTotal(checkedIngredients, size);
	}

	_updateTotal(checkedIngredients, size) {
		const { ingredients } = this.props;

		this.total.update({
			ingredients,
			checkedIngredients,
			size
		});
	}

	handleSubmit(ev) {
		ev.preventDefault();

		const formData = new FormData(this.form);

		let tags = [];
		let ingredients = [];

		if (formData.getAll) {
			tags = formData.getAll('tag').map(Number);
			ingredients = formData.getAll('ingredient').map(Number);

			formData.delete('tag');
			formData.delete('ingredient');
		} else {
			// browser does not support FormData.getAll() method
			this.tagsInputs.forEach(input => {
				if (input.checked) tags.push(+input.value);
			});

			this.ingredientInputs.forEach(input => {
				if (input.checked) ingredients.push(+input.value);
			});
		}

		formData.append('tags', JSON.stringify(tags));
		formData.append('ingredients', JSON.stringify(ingredients));

		this.props.onSubmit(formData);
	}

	render() {
		const { ingredients, tags, images } = this.props;

		const html = `
	<form class="create-pizza__form" method="post" id="create-pizza__form">
		<label for="pizza-name">Pizza name:</label>
		<input type="text" class="create-pizza__input-text" name="name" 
			id="pizza-name" required min="3" max="24">

		<fieldset>
			<legend class="create-pizza__legend">Pizza size:</legend>
			<div class="create-pizza__fieldset-inner">
				<label class="create-pizza__radio-label">
					<input class="create-pizza__radio" type="radio" name="size"
						value="30" required data-canvas data-size>
					<span class="create-pizza__radio-span">Ø30 cm</span>
				</label>
				<label class="create-pizza__radio-label">
					<input class="create-pizza__radio" type="radio" name="size"
						value="45" required data-canvas data-size>
					<span class="create-pizza__radio-span">Ø45 cm</span>
				</label>
				<label class="create-pizza__radio-label">
					<input class="create-pizza__radio" type="radio" name="size"
						value="60" checked data-canvas data-size>
					<span class="create-pizza__radio-span">Ø60 cm</span>
				</label>
			</div>
		</fieldset>

		<label for="pizza-description">Description:</label>
		<textarea class="create-pizza__input-text" name="description"
			id="pizza-description"></textarea>
		
		<fieldset>
			<legend class="create-pizza__legend">Ingredients:</legend>
			<div class="create-pizza__fieldset-inner">
			${ingredients.reduce((html, ingredient) => {
				return html += `
					<label class="create-pizza__checkbox-label">
						<input class="create-pizza__checkbox"
							type="checkbox" name="ingredient"
							value="${ingredient.id}" data-canvas 
								data-ingredient="${ingredient.name}">
						<span class="create-pizza__checkbox-span 
							create-pizza__checkbox-span--ingredient">
							${ingredient.name}
							<img src="${API_SERVICE.DOMAIN}/
								${ingredient.image_url}" 
								class="create-pizza__span-image" crossOrigin>
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
						<input class="create-pizza__checkbox" type="checkbox"
							name="tag" value="${tag.id}"
							data-tag>
						<span class="create-pizza__checkbox-span">
							${tag.name}
						</span>
					</label>
				`;
			}, '')}
			</div>
		</fieldset>

		<article id="total"></article>
	
		<div class="create-pizza__button-wrapper">
			<a 
				href="#/list"
				class="button create-pizza__button 
					create-pizza__button--reset" 
			>Cancel</a>
			<input 
				type="submit" 
				class="button create-pizza__button 
					create-pizza__button--submit" 
				value="Order Pizza"
			>
		</div>
	</form>
		`;

		const form = parseHTML(html);

		this.form = form.getElementById('create-pizza__form');
		this.ingredientInputs = form.querySelectorAll('[data-ingredient]');
		this.tagsInputs = form.querySelectorAll('[data-tag]');
		this.sizeInputs = form.querySelectorAll('[data-size]');

		form.getElementById('total').append(this.total.update({
			ingredients: [],
			checkedIngredients: [],
			size: 60,
		}));

		return form;
	}
}
