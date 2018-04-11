export const getTime = () => {
	const now = new Date();
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
	if (res.ok || res.status === 400 || res.status === 403) return res;
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

export const createHoneycombMap = (diameter, cellSize) => {
	const map = [];
	const dx = 3 * cellSize / Math.sqrt(3) / 2;
	const dy = cellSize / 2;

	let x = 0;
	let y = 0;
	let k = 0;
	while (y <= diameter) {
		while (x <= diameter) {
			map.push({ x: Math.round(x), y: Math.round(y) });
			x += 2 * dx;
		}
		k++;
		y = k * dy;
		(k % 2) ? x = dx : x = 0;
	}

	const circledMap = map.filter(cell => {
		const cellRadius = Math.pow(diameter / 2 - cell.x, 2) +
			Math.pow(diameter / 2 - cell.y, 2);

		return cellRadius < Math.pow(diameter / 2, 2);
	});

	return circledMap;
};
