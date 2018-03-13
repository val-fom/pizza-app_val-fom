import App from './App';
import Login from './Login';
import Register from './Register';

export default [
	{
		href: '',
		redirectTo: '/',
	},
	{
		href: '/',
		Component: App,
		authRequired: true,
		// onEnter: () => {
		// 	if (!!'auth check') {
		// 		console.log(this);
		// 		// navigateTo(this.redirectTo);
		// 	}
		// },
	},
	{
		href: '/login',
		Component: Login,
		authRequired: false,
	},
	{
		href: '/register',
		Component: Register,
		authRequired: false,
	},
];
