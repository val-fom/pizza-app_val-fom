import './total.scss';
import { Component } from '../../framework';

export default class Total extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('total__container');
	}

	_calcPrice(ingredients, checkedIngredients, size) {
		return ingredients
			.filter(ingr => checkedIngredients.includes(ingr.name))
			.reduce((total, ingr) => total + ingr.price, size / 5)
			.toFixed(2);
	}

	render() {
		let price = '0.00';

		if (this.props) {
			const { ingredients, checkedIngredients, size } = this.props;
			price = this._calcPrice(
				ingredients,
				checkedIngredients,
				size
			);
		}

		return `
			<h3 class="total__heading">Total price:</h3>
			<span class="total__price">$ ${price}<span>
		`;
	}
}
