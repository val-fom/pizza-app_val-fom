import { API_SERVICE } from '.';
import { EventEmitter } from "../utils/event-emitter";

class WsService {
	constructor() {
		this.ws = null;
		this._emitter = new EventEmitter();
	}

	get isOpen() {
		return !!this.ws && this.ws.readyState === this.ws.OPEN;
	}

	_onmessage(event) {
		event = JSON.parse(event);
		this._emitter.emit(event.event_name, event.data);
	}

	_onclose(ev) {
		if (ev.code === 4001) {
			alert('Unauthorised');
		} else {
			console.log('Lost connection reconnect');
			setTimeout(this.establish, 2000);
		}
	}

	subscribe(eventName, callBack) {
		this._emitter.subscribe(eventName, callBack);
	}

	establish() {
		this._shakeHand()
			.then(ticket => {
				this.ws = new WebSocket(`${API_SERVICE.WS_PATH}?key=${ticket}`);
				this.ws.onopen = console.log;
				this.ws.onmessage = ev => this._onmessage(ev.data);
				this.ws.onclose = this._onclose;
			});
	}

	_shakeHand() {
		return API_SERVICE.getTicket()
			.then(response => {
				const { token, success } = response;
				if (success) {
					return token;
				}
				return response;
			});
	}
}

export const WS_SERVICE = new WsService();
