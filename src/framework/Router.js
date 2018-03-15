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
		});

		this.handleUrlChange(this.path);
	}

	get path() {
		return window.location.hash.slice(1);
	}

	handleUrlChange(url) {
		const { routes } = this.state;
		const nextRoute = routes.find(({ href }) => href === url);

		if (!!nextRoute.redirectTo) {
			return this.handleRedirect(nextRoute.redirectTo);
		}

		if (!!nextRoute.onEnter) {
			return this.handleOnEnter(nextRoute, url)
		}

		this.applyRoute(nextRoute, url);
	}

	handleRedirect(url) {
		console.log('redirectTo', url);
		this.navigateTo(url);
	}

	navigateTo(url) {
		window.location.hash = url;
	}

	handleOnEnter(nextRoute) {
		nextRoute.onEnter();
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
