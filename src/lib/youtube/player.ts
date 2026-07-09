import { createEmitter } from './emitter';
import { EVENT_NAMES, type EventType } from './events';
import { FUNCTION_NAMES, type FunctionName } from './functions';
import { loadYouTubeIframeApi } from './load-youtube-iframe-api';
import type { Options, PlayerEvent, YouTubePlayer, YouTubePlayerInstance } from './types';

type PlayerMethod = (...args: unknown[]) => unknown;

function toPlayerEventName(eventName: EventType) {
	return `on${eventName.slice(0, 1).toUpperCase()}${eventName.slice(1)}`;
}

function proxyEvents(emitter: ReturnType<typeof createEmitter>) {
	return Object.fromEntries(
		EVENT_NAMES.map((eventName) => [
			toPlayerEventName(eventName),
			(event: PlayerEvent) => emitter.trigger(eventName, event)
		])
	);
}

function isPlayer(
	element: HTMLElement | string | YouTubePlayerInstance
): element is YouTubePlayerInstance {
	return (
		typeof element === 'object' &&
		element !== null &&
		'playVideo' in element &&
		element.playVideo instanceof Function
	);
}

export default function createYouTubePlayer(
	element: HTMLElement | string | YouTubePlayerInstance,
	options: Options = {}
) {
	const emitter = createEmitter();

	if (options.events) {
		throw new Error('Event handlers cannot be overwritten.');
	}

	if (typeof element === 'string' && !document.getElementById(element)) {
		throw new Error(`Element "${element}" does not exist.`);
	}

	const events = proxyEvents(emitter);

	const playerApiReady = new Promise<YouTubePlayerInstance>((resolve) => {
		if (isPlayer(element)) {
			resolve(element);
			return;
		}

		let player: YouTubePlayerInstance | undefined;

		emitter.on('ready', (event) => {
			resolve((event.target ?? player) as YouTubePlayerInstance);
		});

		if (window.YT?.Player instanceof Function) {
			player = new window.YT.Player(element, { ...options, events });
			return;
		}

		loadYouTubeIframeApi(emitter).then((YT) => {
			player = new YT!.Player(element, { ...options, events });
		});
	});

	const player = Object.fromEntries(
		FUNCTION_NAMES.map((functionName) => [
			functionName,
			(...args: unknown[]) =>
				playerApiReady.then((readyPlayer) =>
					(readyPlayer[functionName as FunctionName] as PlayerMethod)(...args)
				)
		])
	) as unknown as YouTubePlayer;

	player.on = emitter.on as YouTubePlayer['on'];
	player.off = emitter.off;

	return player;
}
