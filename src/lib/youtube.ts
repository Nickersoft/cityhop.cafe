import { on } from 'svelte/events';
import type { Options, YouTubePlayer } from 'youtube-player/dist/types';
import type { EventType } from 'youtube-player/dist/eventNames';

import createYouTubePlayer from 'youtube-player';

import { PlayerState } from '$enums';

export function getYouTubeLink(videoId?: string) {
	return `https://www.youtube.com/watch?v=${videoId}`;
}

/**
 * Returns the thumbnail of a scene item
 * @param item - The scene to get the thumbnail of
 * @param num - The number of the thumbnail to get
 * @returns The URL of the thumbnail
 */
export function getThumbnail(videoID: string, num = 3): string {
	return `https://img.youtube.com/vi/${videoID}/hq${num}.jpg`;
}

/**
 * Observes the current time of the YouTube player
 * @param player - The YouTube player
 * @param callback - The callback to be called when the time changes
 * @returns A function to stop observing the player
 */
const observePlayerProgress = (() => {
	let lastTimeUpdate = 0;
	let iframeWindow: Window | null = null;

	return (player: YouTubePlayer, callback: (progress: number) => void) => {
		player.getIframe().then((frame) => {
			iframeWindow = frame.contentWindow;
			console.log(iframeWindow);
		});

		// Approach taken from https://gist.github.com/zavan/75ed641de5afb1296dbc02185ebf1ea0
		// Let's hope it always works
		function observe<T extends string>(event: MessageEvent<T>) {
			if (!iframeWindow) return;

			// Check that the event was sent from the YouTube IFrame.
			if (event.source === iframeWindow) {
				const data = JSON.parse(event.data);
				console.log(data);
				// The "infoDelivery" event is used by YT to transmit any
				// kind of information change in the player,
				// such as the current time or a playback quality change.
				if (data.event === 'infoDelivery' && data.info && data.info.currentTime) {
					// currentTime is emitted very frequently,
					// but we only care about whole second changes.
					const time = Math.floor(data.info.currentTime);
					console.log(time);
					if (time !== lastTimeUpdate) {
						lastTimeUpdate = time;
						callback(time);
					}
				}
			}
		}
		console.log('called');
		return on(window, 'message', observe);
	};
})();

type EventHandler = <T>(event: CustomEvent<T>) => void;

export interface PlayerEvents {
	onReady?: EventHandler;
	onError?: EventHandler;
	onEnd?: EventHandler;
	onAPIChange?: EventHandler;
	onVolumeChange?: EventHandler;
	onPlay?: EventHandler;
	onPause?: EventHandler;
	onStateChange?: EventHandler;
	onPlaybackRateChange?: EventHandler;
	onPlaybackQualityChange?: EventHandler;
	onTimeChange?: EventHandler;
}

export type InitPlayerOptions = Options & PlayerEvents;

export function initPlayer(el: HTMLElement, options: InitPlayerOptions = {}) {
	const {
		onReady,
		onError,
		onEnd,
		onPlay,
		onPause,
		onAPIChange,
		onVolumeChange,
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
		playbackRateChange: onPlaybackRateChange,
		playbackQualityChange: onPlaybackQualityChange
	};

	const player = createYouTubePlayer(el, options);

	for (const [event, callback] of Object.entries(eventMap)) {
		if (callback) {
			player.on(event as EventType, (detail) => {
				callback(new CustomEvent(event, { detail }));
			});
		}
	}

	player.on('stateChange', (event) => {
		onStateChange?.(event);

		switch (event.data) {
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

	// Approach taken from https://gist.github.com/zavan/75ed641de5afb1296dbc02185ebf1ea0
	// Let's hope it always works
	function observe<T extends string>(event: MessageEvent<T>) {
		if (!iframeWindow) return;

		// Check that the event was sent from the YouTube IFrame.
		if (event.source === iframeWindow) {
			const data = JSON.parse(event.data);

			// The "infoDelivery" event is used by YT to transmit any
			// kind of information change in the player,
			// such as the current time or a playback quality change.
			if (data.event === 'infoDelivery' && data.info && data.info.currentTime) {
				// currentTime is emitted very frequently,
				// but we only care about whole second changes.
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
