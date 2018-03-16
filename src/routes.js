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
	},
	{
		href: '/register',
		Component: Register,
	},
	{
		href: '/user',
		Component: User,
		onEnter: (/*params, */handleRedirect, nextRoute, applyRoute) => {
			if (!AUTH_SERVICE.isAuthorized()) {
				handleRedirect(nextRoute.redirectTo);
				console.log('is not authorized');
			} else {
				applyRoute(nextRoute, nextRoute.href);
				console.log('is authorized');
			}

			// TODO: move this to guard service

		},
		redirectTo: '/login',
	}
];
