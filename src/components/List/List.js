import './list.scss';
import { Component } from '../../framework';
import { API_SERVICE, WS_SERVICE } from '../../api';
import { getTime, parseHTML } from "../../utils";

import Timer from '../Timer';

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

		this.unsubAdd = WS_SERVICE.subscribe('CREATE_PIZZA', data =>
			this.addPizza(data));
		this.unsubRemove = WS_SERVICE.subscribe('ACCEPT_PIZZA', data =>
			this.removePizzas(data));

		this.timers = new Map();
	}

	beforeUnmount() {
		this.unsubAdd();
		this.unsubRemove();
		this.timers.forEach(timer => timer.unmount());
		WS_SERVICE.close();
	}

	addPizza(newPizza) {
		let { pizzas } = this.state;

		pizzas = pizzas.concat(newPizza);
		this.updateState({ pizzas });
		console.log('ADD:', newPizza);
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
				this.timers.get(uuid).unmount();
			}
		});

		this.updateState({ pizzas });
	}

	getPizzas() {
		return API_SERVICE.getPizzas()
			.then(pizzas => {
				console.log('pizzas: ', pizzas);
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

		return pizzas.map((pizza, i) => {
			const timer = new Timer({
				timePrepared: pizza.time_prepared,
			});

			this.timers.set(pizza.uuid, timer);

			const html = `
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
					<div id="timer"></div>
					<span class="item__price">
						$${pizza.price.toFixed(2)}
					</span>
				</article>
			`;

			const fragment = parseHTML(html);
			fragment.getElementById('timer').append(timer.update());

			return fragment;
		});
	}
}
