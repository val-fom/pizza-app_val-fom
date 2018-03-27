import { insertChildren } from '../utils';

class Component {
	constructor(props) {
		this.props = props || {};
		this.state = {};

		this.host = null;

		this.updateState = this.updateState.bind(this);
	}

	componentsStateWillUpdate(nextState) { }

	updateState(nextState) {
		this.componentsStateWillUpdate(nextState);
		this.state = Object.assign({}, this.state, nextState);
		this._render();
		// console.log(this.constructor.name + ': _state_ updated:', this.state);
		return this.state;
	}

	update(nextProps) {
		this.beforeUpdate(nextProps);
		this.props = nextProps;
		// console.log(this.constructor.name + ': _props_ updated:', this.props);
		return this._render();
	}

	beforeUpdate() { }

	_render() {
		const children = this.render();
		this.host.innerHTML = '';

		return insertChildren(this.host, children);
	}

	render() { }
}

export default Component;
