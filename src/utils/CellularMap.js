import { getRandomInt, getRandomFloat } from ".";

export class CellularMap {
	constructor(diameter, cellSize, maxNumberOfIngredients, amplitude) {
		this.diameter = diameter;
		this.cellSize = cellSize;
		this.dx = 3 * cellSize / Math.sqrt(3) / 2;
		this.dy = cellSize / 2;
		this.amplitude = amplitude;
		this.map = this._createMap();
		this.maxNumberOfIngredients = maxNumberOfIngredients;
		this.maxNumberOfCopies = Math.floor(this.map.length /
			this.maxNumberOfIngredients);
		this.ingredients = [];
	}

	_createMap() {
		const map = [];

		let x = 0;
		let y = 0;
		let width = 0;
		let height = 0;
		let k = 0;

		while (y <= this.diameter) {
			if (height < y) height = y;
			while (x <= this.diameter) {
				if (width < x) width = x;
				map.push({
					x: Math.round(x),
					y: Math.round(y),
					ingredient: null,
					hidden: false,
					angle: getRandomFloat(0, 2 * Math.PI),
				});
				x += 2 * this.dx;
			}
			k++;
			y = k * this.dy;
			(k % 2) ? x = this.dx : x = 0;
		}

		this.diameter = Math.max(width, height);

		const circledMap = map.filter(cell => {
			const cellRadius = Math.pow(this.diameter / 2 - cell.x, 2) +
				Math.pow(this.diameter / 2 - cell.y, 2);

			return cellRadius <= Math.pow(this.diameter / 2, 2);
		});

		if (!this.amplitude) return circledMap;

		const shackedMap = circledMap.map(cell => {
			cell.x += getRandomInt(-this.amplitude, this.amplitude);
			cell.y += getRandomInt(-this.amplitude, this.amplitude);
			return cell;
		});

		return shackedMap;
	}

	spread(ingredients) {
		if (ingredients.length > this.maxNumberOfIngredients) return;

		this._removeMissingIngredients(ingredients);

		ingredients.forEach(ingredient => {
			if (this.ingredients.includes(ingredient)) return;

			let copiesNumber = this.maxNumberOfCopies;

			while (copiesNumber--) {

				const freeCellsIndexes = this.map.reduce((acc, cell, i) => {
					if (!cell.ingredient) acc.push(i);
					return acc;
				}, []);

				const randomFreeCellIndex = freeCellsIndexes[Math.floor
					(Math.random() * freeCellsIndexes.length)];

				this.map[randomFreeCellIndex].ingredient = ingredient;
			}
		});

		this.ingredients = ingredients;
	}

	_removeMissingIngredients(ingredients) {
		const missingIngredients = this.ingredients.filter(ingr => {
			return !ingredients.includes(ingr);
		});

		missingIngredients.forEach(missingIngr => {
			this.map.forEach(cell => {
				if (cell.ingredient === missingIngr) {
					cell.ingredient = null;
				}
			});
		});
	}

	hideExcessCells(sizeFactor) {
		const radius = this.diameter / 2;

		for (let i = this.map.length - 1; i >= 0; i--) {
			const cell = this.map[i];

			const cellRadius = Math.pow(radius - cell.x, 2) +
				Math.pow(radius - cell.y, 2);

			cell.hidden = (cellRadius > Math.pow(radius * sizeFactor, 2));
		}
	}
}
