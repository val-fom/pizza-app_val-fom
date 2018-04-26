import './timer.scss';
import { getTime, getMinutesLeft } from '../../utils';
import { Component } from '../../framework';

export default class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timePrepared: this.props.timePrepared,
			eta: getMinutesLeft(this.props.timePrepared),
		};

		this.host = document.createElement('div');
		this.host.classList.add('timer__container');

		this.timerId = setInterval(() => {
			const eta = getMinutesLeft(this.state.timePrepared);
			this.updateState({ eta });
		}, 5000);
	}

	beforeUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		let { eta } = this.state;

		return (eta < 0) ?
			`<span class="item__eta eta--ready">ready</span>`
			:
			`<time datetime="PT${Math.round(eta)}M" class="item__eta">
				ETA: ${Math.floor(eta)} min
			</time>`;
	}
}
