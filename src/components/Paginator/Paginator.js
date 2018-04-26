import './paginator.scss';
import { Component } from '../../framework';

export default class Paginator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			maxPizzasOnPage: this.props.maxPizzasOnPage,
		};

		this.host = document.createElement('div');
		this.host.classList.add('paginator__container');
	}

	_getPages() {
		const { unacceptedPizzasAmount } = this.props;
		const { maxPizzasOnPage } = this.state;

		const pagesAmount = Math.ceil(unacceptedPizzasAmount / maxPizzasOnPage);
		return new Array(pagesAmount);
	}

	render() {
		if (!this.props) return '';

		const { currentPage } = this.props;

		const pages = this._getPages();

		console.log('pages: ', pages);

		// const html = `			
		// 	<nav>
		// 		<ul>
		// 		</ul>
		// 	</nav>
		// `;

		return `
			<nav>
				<ul>
					${
			pages.reduce((html, page, i) => {
				console.log('i: ', i);
				return html += `
							<li>
								<a href="#/list/1">1</a>
							</li>
						`;
			}, '')
			}
				</ul>
			</nav >
	`;
	}
}
