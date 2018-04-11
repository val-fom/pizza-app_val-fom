import './canvas.scss';

import { parseHTML, getRandomInt } from '../../utils';
import { PIZZA_SERVICE } from '../../api';
import { Component } from '../../framework';

export default class CreatePizza extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('canvas__container');

		this.canvas = document.createElement('canvas');
		this.canvas.classList.add('canvas__canvas');
		this.ctx = this.canvas.getContext('2d');

		this.canvas.width = 320;
		this.canvas.height = 320;
	}

	draw(images) {
		this.ctx.drawImage(PIZZA_SERVICE.images.crust, 10, 10, 300, 300);

		if (!this.props) return;
		const { ingredients } = this.props;

		ingredients.forEach(ingredient => {
			const image = PIZZA_SERVICE.images[ingredient];
			this.ctx.drawImage(
				image,
				getRandomInt(100, 200),
				getRandomInt(100, 200)
			);
		});
	}

	render() {
		this.draw();

		return this.canvas;
	}
}
