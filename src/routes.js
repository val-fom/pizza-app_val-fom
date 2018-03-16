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
	},
	{
		href: '/register',
		Component: Register,
	},
	{
		href: '/user',
		Component: User,
		canActivate: AUTH_SERVICE.isAuthorized,
	},
];
