import './list.scss';
import { Component } from '../../framework';
import { API_SERVICE } from '../../api';
import { getTime } from "../../utils";

export default class List extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('list__container');
	}

	render() {
		if (!this.props) return '<p class="message--success">Loading...</p>';

		const { pizzas } = this.props;
		console.log('pizzas: ', pizzas);

		return pizzas.reduce((html, pizza, i) => {
			const eta = (new Date(pizza.time_prepared) - Date.now()) / 60000;

			return html += `
				<article class="list__item">
					<img src="${API_SERVICE.DOMAIN}/${pizza.img_url}" alt="" class="item__pic" crossOrigin>
					<time class="item__order-time">${getTime(new Date(pizza.created_date))}</time >
					<h3 class="item__number-in-queue">#${pizzas.length - i}</h3>
					<time datetime="0h 1m 0s" class="item__eta">ETA:
						${Math.floor(eta)} min
					</time>
					<span class="item__price">$${pizza.price.toFixed(2)}</span>
				</article >
			`;
		}, '');
	}
}
