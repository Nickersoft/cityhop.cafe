export const EVENT_NAMES = [
	'ready',
	'stateChange',
	'playbackQualityChange',
	'playbackRateChange',
	'error',
	'apiChange',
	'volumeChange',
	'autoplayBlocked'
] as const;

export type EventType = (typeof EVENT_NAMES)[number];
