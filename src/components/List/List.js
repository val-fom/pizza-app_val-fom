import './list.scss';
import { Component } from '../../framework';
import { API_SERVICE, WS_SERVICE } from '../../api';
import { getTime } from "../../utils";

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pizzas: null,
		};

		this.host = document.createElement('div');
		this.host.classList.add('list__container');

		this.getPizzas();

		if (!WS_SERVICE.isOpen) WS_SERVICE.establish();

		WS_SERVICE.subscribe('CREATE_PIZZA', data => this.addPizza(data));
		WS_SERVICE.subscribe('ACCEPT_PIZZA', data => this.removePizzas(data));
		// TODO: problem: this^ produces many identical functions for each event
	}

	addPizza(newPizza) {
		let { pizzas } = this.state;
		pizzas = pizzas.concat(newPizza);
		this.updateState({ pizzas });
		console.log(this.state);
	}

	removePizzas(uuids) {
		const pizzas = this.state.pizzas.slice();

		uuids.forEach(uuid => {
			const index = pizzas.findIndex(pizza => {
				return pizza.uuid === uuid;
			});
			if (~index) {
				console.log('DELETE:', pizzas[index]);
				pizzas.splice(index, 1);
			}
		});

		this.updateState({ pizzas });
	}

	getPizzas() {
		return API_SERVICE.getPizzas()
			.then(pizzas => {
				this.updateState({ pizzas: pizzas.results });
			});
	}

	render() {
		const { pizzas } = this.state;

		if (!pizzas) return `
			<p class="message--success">
				Loading...
			</p>`;

		if (!pizzas.length) return `
			<p class="message--success">
				Pizza queue is empty
			</p>
		`;

		return pizzas.reduce((html, pizza, i) => {
			let eta = Math.floor((new Date(pizza.time_prepared) -
				Date.now()) / 60000);

			if (eta < 0) {
				eta = 'ready';
			} else {
				eta += ' min';
			}

			return html += `
				<article class="list__item">
					<img
						src="${API_SERVICE.DOMAIN}/${pizza.img_url}" 
						alt="pizza" 
						class="item__pic" 
						crossOrigin
					>
					<time class="item__order-time">
						${getTime(new Date(pizza.created_date))}
					</time >
					<h3 class="item__number-in-queue">
						#${i + 1}
					</h3>
					<time
						datetime="PT${Math.floor(eta)}M"
						class="item__eta">
							ETA: ${eta}
					</time>
					<span class="item__price">
						$${pizza.price.toFixed(2)}
					</span>
				</article>
			`;
		}, '');
	}
}
