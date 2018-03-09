import App from './App';
import Login from './Login';
import Register from './Register';

export default [
	{
		href: '/',
		Component: App,
		// redirectTo: '/login',
		onEnter: () => {
			if (!!'auth check') {
				console.log(this);
				// navigateTo(this.redirectTo);
			}
		},
	},
	{
		href: '/login',
		Component: Login,
	},
	{
		href: '/register',
		Component: Register,
	},
];
