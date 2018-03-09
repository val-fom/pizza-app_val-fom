import App from './App';
import Login from './Login';
import Register from './Register';

export default [
	{
		href: '/',
		Component: App,
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
