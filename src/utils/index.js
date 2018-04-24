export const getTime = (now = new Date()) => {
	const ss = now.getSeconds().toString().padStart(2, '0');
	const mm = now.getMinutes().toString().padStart(2, '0');
	const hh = now.getHours().toString().padStart(2, '0');

	return `${hh}:${mm}:${ss}`;
};

export const parseHTML = html => {
	const template = document.createElement('template');
	template.innerHTML = html.trim();

	return template.content;
};

export const insertChildren = (parent, children) => {
	if (typeof children === 'string') {
		parent.insertAdjacentHTML('beforeend', children);
	} else if (Array.isArray(children)) {
		children.forEach(child => {
			(typeof child === 'string') ?
				parent.insertAdjacentHTML('beforeend', child) :
				parent.append(child);
		});
	} else {
		parent.append(children);
	}

	return parent;
};

export const status = res => {
	if (res.ok || res.status === 400) return res;
	console.log('response:', res);
	throw new Error(res.statusText);
};

export const json = res => res.json();

export const parseJwtClaims = jwtToken => {
	const base64Url = jwtToken.split('.')[1];
	const base64 = base64Url.replace('-', '+').replace('_', '/');
	return JSON.parse(window.atob(base64));
};

export const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomFloat = (min, max) => {
	return Math.random() * (max - min) + min;
};

export const getCanvasAsFile = canvas => {
	return new Promise((resolve, reject) => {
		canvas.toBlob(resolve);
	});
};

export const getMinutesLeft = time => {
	time = new Date(time);
	const minutesLeft = (time - Date.now()) / 1000 / 60;
	return minutesLeft;
};
