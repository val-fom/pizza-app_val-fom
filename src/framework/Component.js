import { insertChildren } from '../utils';

class Component {
	constructor(props) {
		this.props = props || {};
		this.state = {};

		this.host = null;

		this.updateState = this.updateState.bind(this);
	}

	componentsStateWillUpdate(nextState) { }

	unmount() {
		this.beforeUnmount();
	}

	updateState(nextState) {
		this.componentsStateWillUpdate(nextState);
		this.state = Object.assign({}, this.state, nextState);
		this._render();

		return this.state;
	}

	update(nextProps) {
		this.beforeUpdate(nextProps);
		this.props = nextProps;

		return this._render();
	}

	beforeUpdate() { }

	beforeUnmount() { }

	_render() {
		const children = this.render();
		this.host.innerHTML = '';

		return insertChildren(this.host, children);
	}

	render() { }
}

export default Component;
