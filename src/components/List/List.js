import './list.scss';
import { Component } from '../../framework';

export default class List extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('list__container');
	}

	render() {
		const list = [];
		for (var i = 11; i >= 0; i--) {
			const article = `
				<article class="list__item">
					<img src="img/item__pizza_2x.png" alt="" class="item__pic">
					<time class="item__order-time">10:25:46</time>
					<h3 class="item__number-in-queue">#1</h3>
					<time datetime="0h 1m 0s" class="item__eta">ETA: 1min</time>
					<span class="item__price">$5.00</span>
				</article>
			`;
			list.push(article);
		}

		return list;
	}
}
