import routes from './src/routes';
import Router from './src/framework/Router';

const router = new Router(routes);

const root = document.getElementById('root');
root.appendChild(router.host);
