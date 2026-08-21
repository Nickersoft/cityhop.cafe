import type { YouTubePlayer } from './types';

export function observeYouTubeProgress(
	player: Pick<YouTubePlayer, 'getCurrentTime'>,
	onTimeChange: (elapsedSecond: number) => void,
	interval = 250
) {
	let active = true;
	let lastElapsedSecond: number | undefined;
	let timeout: number | undefined;

	const schedule = () => {
		if (active) {
			timeout = window.setTimeout(poll, interval);
		}
	};

	const poll = async () => {
		if (!active) return;

		try {
			const currentTime = await player.getCurrentTime().catch(() => undefined);

			if (!active || currentTime === undefined) return;

			const elapsedSecond = Math.floor(currentTime);

			if (elapsedSecond !== lastElapsedSecond) {
				lastElapsedSecond = elapsedSecond;
				onTimeChange(elapsedSecond);
			}
		} finally {
			schedule();
		}
	};

	schedule();

	return () => {
		if (!active) return;

		active = false;

		if (timeout !== undefined) {
			window.clearTimeout(timeout);
		}
	};
}
