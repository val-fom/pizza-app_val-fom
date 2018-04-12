import './canvas.scss';

import { Sprite } from '../../utils/Sprite';
import { HoneycombMap } from '../../utils/HoneycombMap';
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

		this.honeycombMap = new HoneycombMap(250, 20, 5);

		this.offsetX = (this.canvas.width - this.honeycombMap.diameter) / 2;
		this.offsetY = (this.canvas.height - this.honeycombMap.diameter) / 2;
	}

	_drawCrust(size = 1, maxSize = 1) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		const crust = new Sprite(
			PIZZA_SERVICE.images.crust,
			160,
			160,
			310 * size / maxSize,
			310 * size / maxSize
		);
		crust.draw(this.ctx);
	}

	_drawIngredients() {
		this.honeycombMap.map.forEach(cell => {
			if (cell.hidden || !cell.ingredient) return;

			const sprite = new Sprite(
				PIZZA_SERVICE.images[cell.ingredient],
				cell.x + this.offsetX,
				cell.y + this.offsetY,
				15, 15
			);
			sprite.draw(this.ctx);
		});
	}

	render() {
		if (!this.props) {
			this._drawCrust();
			return this.canvas;
		}

		const { ingredients, size, maxSize } = this.props;

		this.honeycombMap.spread(ingredients);
		this.honeycombMap.hideOutOfBounds(size / maxSize);

		this._drawCrust(size, maxSize);
		this._drawIngredients();

		return this.canvas;
	}
}
