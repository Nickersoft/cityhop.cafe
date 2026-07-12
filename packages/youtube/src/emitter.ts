import type { EventType } from './events';
import type { PlayerEvent } from './types';

type Listener = (event: PlayerEvent) => void;

interface Emitter {
	on(this: void, eventType: EventType, listener: Listener): Listener;
	off(this: void, eventType: EventType, listener: Listener): void;
	trigger(eventType: EventType, event: PlayerEvent): void;
}

export function createEmitter(): Emitter {
	const listeners = new Map<EventType, Set<Listener>>();

	function on(this: void, eventType: EventType, listener: Listener) {
		const eventListeners = listeners.get(eventType) ?? new Set<Listener>();
		eventListeners.add(listener);
		listeners.set(eventType, eventListeners);
		return listener;
	}

	function off(this: void, eventType: EventType, listener: Listener) {
		listeners.get(eventType)?.delete(listener);
	}

	function trigger(eventType: EventType, event: PlayerEvent) {
		for (const listener of listeners.get(eventType) ?? []) {
			listener(event);
		}
	}

	return {
		on,
		off,
		trigger
	};
}
