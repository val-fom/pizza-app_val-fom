import './canvas.scss';

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
		// console.log('crust: ', crust);
		this.ctx.fillRect(10, 10, 100, 100);
	}

	render() {
		// const { images } = this.props;

		this.draw(/* images */);

		return this.canvas;
	}
}
