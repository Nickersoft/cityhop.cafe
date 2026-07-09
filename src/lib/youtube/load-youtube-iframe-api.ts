import type { createEmitter } from './emitter';
import type { Options, YouTubePlayerInstance } from './types';

declare global {
	interface Window {
		YT?: {
			Player: new (element: HTMLElement | string, options: Options) => YouTubePlayerInstance;
			PlayerState?: Record<string, number>;
		};
		onYouTubeIframeAPIReady?: () => void;
	}
}

let iframeApiReady: Promise<typeof window.YT> | undefined;

export function loadYouTubeIframeApi(emitter: ReturnType<typeof createEmitter>) {
	if (iframeApiReady) {
		return iframeApiReady;
	}

	iframeApiReady = new Promise((resolve) => {
		if (window.YT?.Player instanceof Function) {
			resolve(window.YT);
			return;
		}

		const previous = window.onYouTubeIframeAPIReady;

		window.onYouTubeIframeAPIReady = () => {
			previous?.();
			resolve(window.YT);
		};

		const script = document.createElement('script');
		script.src = 'https://www.youtube.com/iframe_api';
		script.async = true;
		script.onerror = () => {
			emitter.trigger('error', { data: 'iframe_api_load_failed' });
		};
		document.head.append(script);
	});

	return iframeApiReady;
}
