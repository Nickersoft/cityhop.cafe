import { afterEach, describe, expect, test, vi } from 'vite-plus/test';

import { createYouTubePlayer } from './player';

describe('createYouTubePlayer', () => {
	afterEach(() => {
		vi.restoreAllMocks();
		vi.unstubAllGlobals();
	});

	test('proxies onAutoplayBlocked', async () => {
		const element = {};

		let events: Record<string, (event: object) => void> = {};

		vi.stubGlobal('window', {
			YT: {
				Player: vi.fn(function (_element, options) {
					events = options.events;

					const player = {
						addEventListener: vi.fn(),
						destroy: vi.fn(),
						getIframe: vi.fn(),
						loadVideoById: vi.fn(),
						on: vi.fn(),
						off: vi.fn(),
						playVideo: vi.fn()
					};

					queueMicrotask(() => {
						events.onReady({ target: player });
					});

					return player;
				})
			}
		});

		const player = createYouTubePlayer(element as HTMLElement);
		const blocked = vi.fn();

		player.on('autoplayBlocked', blocked);
		events.onAutoplayBlocked({ data: 'blocked' });

		expect(blocked).toHaveBeenCalledWith({ data: 'blocked' });
	});
});
