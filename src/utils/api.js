const BASE_API_URL = 'https://pizza-tele.ga/api/v1';
const END_POINTS = {
	storeList: '/store/list',
	userCreate: '/user/create',
	userLogin: '/user/login',
	userInfo: '/user/my_info',
	ingredientList: '/ingredient/list',
}

export const getStoreList = () => {
	return fetch(BASE_API_URL + END_POINTS.storeList)
		.then(res => {
			if (res.ok) {
				return res.json();
			};
			throw new Error(res.error);
		})
}
