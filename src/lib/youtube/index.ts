import { on } from 'svelte/events';

import { PlayerState } from '$lib/enums';

import type { EventType } from './events';
import createYouTubePlayer from './player';
import type { Options, PlayerEvent } from './types';

export function getYouTubeLink(videoId?: string) {
	return `https://www.youtube.com/watch?v=${videoId}`;
}

export function getThumbnail(videoID: string, num = 3): string {
	return `https://img.youtube.com/vi/${videoID}/hq${num}.jpg`;
}

type EventHandler = <T>(event: CustomEvent<T>) => void;

export interface PlayerEvents {
	onReady?: EventHandler;
	onError?: EventHandler;
	onEnd?: EventHandler;
	onAPIChange?: EventHandler;
	onVolumeChange?: EventHandler;
	onAutoplayBlocked?: EventHandler;
	onPlay?: EventHandler;
	onPause?: EventHandler;
	onStateChange?: EventHandler;
	onPlaybackRateChange?: EventHandler;
	onPlaybackQualityChange?: EventHandler;
	onTimeChange?: EventHandler;
}

export type InitPlayerOptions = Options & PlayerEvents;

function toCustomEvent(event: string, detail: PlayerEvent) {
	return new CustomEvent(event, { detail });
}

export function initPlayer(el: HTMLElement, options: InitPlayerOptions = {}) {
	const {
		onReady,
		onError,
		onEnd,
		onPlay,
		onPause,
		onAPIChange,
		onVolumeChange,
		onAutoplayBlocked,
		onStateChange,
		onPlaybackRateChange,
		onPlaybackQualityChange,
		onTimeChange
	} = options;

	const eventMap: Record<Exclude<EventType, 'stateChange'>, Optional<EventHandler>> = {
		ready: onReady,
		error: onError,
		apiChange: onAPIChange,
		volumeChange: onVolumeChange,
		autoplayBlocked: onAutoplayBlocked,
		playbackRateChange: onPlaybackRateChange,
		playbackQualityChange: onPlaybackQualityChange
	};

	const player = createYouTubePlayer(el, options);

	for (const [event, callback] of Object.entries(eventMap)) {
		if (callback) {
			player.on(event as EventType, (detail) => {
				callback(toCustomEvent(event, detail));
			});
		}
	}

	player.on('stateChange', (detail) => {
		const event = toCustomEvent('stateChange', detail);

		onStateChange?.(event);

		switch (detail.data) {
			case PlayerState.ENDED: {
				onEnd?.(event);
				break;
			}
			case PlayerState.PLAYING: {
				onPlay?.(event);
				break;
			}
			case PlayerState.PAUSED: {
				onPause?.(event);
				break;
			}
			default:
		}
	});

	let lastTimeUpdate = 0;
	let iframeWindow: Window | null = null;

	player.getIframe().then((frame) => {
		iframeWindow = frame.contentWindow;
	});

	function observe<T extends string>(event: MessageEvent<T>) {
		if (!iframeWindow) return;

		if (event.source === iframeWindow) {
			const data = JSON.parse(event.data);

			if (data.event === 'infoDelivery' && data.info && data.info.currentTime) {
				const time = Math.floor(data.info.currentTime);

				if (time !== lastTimeUpdate) {
					lastTimeUpdate = time;
					onTimeChange?.(new CustomEvent('timeChange', { detail: { time, target: player } }));
				}
			}
		}
	}

	const untrackProgress = on(window, 'message', observe);

	return [
		player,
		() => {
			player.destroy();
			untrackProgress();
		}
	] as const;
}
