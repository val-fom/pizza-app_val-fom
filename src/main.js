'use strict';

function getTime() {
	const now = new Date();
	const ss = now.getSeconds().toString().padStart(2, '0');
	const mm = now.getMinutes().toString().padStart(2, '0');
	const hh = now.getHours().toString().padStart(2, '0');

	return `${hh}:${mm}:${ss}`;
}

const clock = document.querySelector('#current-time');

setInterval( () => {
	clock.innerHTML = getTime();
}, 1000);

