import Component from './Component';

export default class Router extends Component {
	constructor(routes) {
		super();

		this.state = {
			activeRoute: null,
			activeComponent: null,
			routes,
		};

		this.host = document.createElement('div');
		this.host.classList.add('router__container');

		window.addEventListener('hashchange', () => {
			this.handleUrlChange(this.path);
		})

		this.handleUrlChange(this.path);
	}

	get path() {
		return window.location.hash.slice(1);
	}

	handleUrlChange(url) {
		const { routes } = this.state;
		const nextRoute = routes.find(({ href }) => href === url);

		this.applyRoute(nextRoute, url);
	}

	applyRoute(route, url) {
		const { Component } = route;

		const componentsInstance = new Component();

		this.updateState({
			activeRoute: route,
			activeComponent: componentsInstance,
		})
	}

	render() {
		return this.state.activeComponent.update();
	}
}
