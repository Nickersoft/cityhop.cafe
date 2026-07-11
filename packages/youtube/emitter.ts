import type { EventType } from './events';
import type { PlayerEvent } from './types';

type Listener = (event: PlayerEvent) => void;

export function createEmitter() {
	const listeners = new Map<EventType, Set<Listener>>();

	return {
		on(eventType: EventType, listener: Listener) {
			const eventListeners = listeners.get(eventType) ?? new Set<Listener>();
			eventListeners.add(listener);
			listeners.set(eventType, eventListeners);
			return listener;
		},
		off(eventType: EventType, listener: Listener) {
			listeners.get(eventType)?.delete(listener);
		},
		trigger(eventType: EventType, event: PlayerEvent) {
			for (const listener of listeners.get(eventType) ?? []) {
				listener(event);
			}
		}
	};
}
