import { AUTH_SERVICE } from './auth/auth-login-service';

import App from './App';
import Login from './Login';
import Register from './Register';
import User from './User';

export default [
	{
		href: '',
		redirectTo: '/',
	},
	{
		href: '/',
		Component: App,
		canActivate: AUTH_SERVICE.isAuthorized,
	},
	{
		href: '/login',
		Component: Login,
		canActivate: true,
	},
	{
		href: '/register',
		Component: Register,
		canActivate: true,
	},
	{
		href: '/user',
		Component: User,
		canActivate: AUTH_SERVICE.isAuthorized,
	},
	// {
	// 	href: '/logout',
	// 	onEnter(params, redirect) {
	// 		AUTH_SERVICE.logout();
	// 		redirect('/');
	// 	}
	// }
];

