import './canvas.scss';

import { Sprite } from '../../utils/Sprite';
import { CellularMap } from '../../utils/CellularMap';
import { PIZZA_SERVICE } from '../../api';
import { Component } from '../../framework';

export default class CreatePizza extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('canvas__container');

		this.canvas = document.createElement('canvas');
		this.canvas.id = 'canvas';

		this.ctx = this.canvas.getContext('2d');

		this.canvas.width = 320;
		this.canvas.height = 320;

		const { maxNumberOfIngredients } = PIZZA_SERVICE;
		this.cellularMap = new CellularMap(255, 20, maxNumberOfIngredients, 5);

		this.offsetX = (this.canvas.width - this.cellularMap.diameter) / 2;
		this.offsetY = (this.canvas.height - this.cellularMap.diameter) / 2;
	}

	_clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	_drawCrust(size = 1, maxSize = 1) {
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
		this.cellularMap.map.forEach(cell => {
			if (cell.hidden || !cell.ingredient) return;

			const sprite = new Sprite(
				PIZZA_SERVICE.images[cell.ingredient],
				cell.x + this.offsetX,
				cell.y + this.offsetY,
				17, 17,
				cell.angle
			);
			sprite.draw(this.ctx);
		});
	}

	render() {
		this._clearCanvas();

		if (!this.props) {
			this._drawCrust();
			return this.canvas;
		}

		const { ingredients, size, maxSize } = this.props;

		this.cellularMap.spread(ingredients);
		this.cellularMap.hideExcessCells(size / maxSize);

		this._drawCrust(size, maxSize);
		this._drawIngredients();

		return this.canvas;
	}
}
