export const getTime = () => {
	const now = new Date();
	const ss = now.getSeconds().toString().padStart(2, '0');
	const mm = now.getMinutes().toString().padStart(2, '0');
	const hh = now.getHours().toString().padStart(2, '0');

	return `${hh}:${mm}:${ss}`;
}

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
			parent.insertAdjacentHTML('beforeend', child):
				parent.append(child);
		});
	} else {
		parent.append(children);
	}

	return parent;
}

export const status = res => {
	if (res.ok || res.status === 400) return res;
	throw new Error(res.statusText);
}

export const json = res => res.json();

export const errorHandler = res => {
	if (res.validations) {
		throw new Error(res.error + ':\n' + res.validations.join('\n'));
	} else {
		throw new Error(res.error);
	}
};
