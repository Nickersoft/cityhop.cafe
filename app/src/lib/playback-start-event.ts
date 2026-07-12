export function isPlaybackStartEvent(event: Pick<Event, 'type'> & Partial<KeyboardEvent>) {
	return !(event.type === 'keyup' && (event.metaKey || event.ctrlKey || event.altKey));
}
