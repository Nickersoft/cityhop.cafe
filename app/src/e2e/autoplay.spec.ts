import { expect, test, type Page } from '@playwright/test';

test.use({
	launchOptions: {
		args: [
			'--autoplay-policy=user-gesture-required',
			'--disable-features=PreloadMediaEngagementData,MediaEngagementBypassAutoplayPolicies'
		]
	}
});

async function installFakeYouTube(page: Page) {
	await page.addInitScript(() => {
		type EventHandler = (event: { data?: number; target: Player }) => void;
		type Events = {
			onReady?: EventHandler;
			onStateChange?: EventHandler;
		};
		type Call = { player: string; method: 'cue' | 'load'; videoId: string };
		type SeekCall = { player: string; seconds: number; allowSeekAhead: boolean };
		type PlayerWindow = {
			youTubeCalls: Call[];
			youTubeCurrentTimeReads: string[];
			youTubeDurationReads: string[];
			youTubeSeekCalls: SeekCall[];
			setYouTubeCurrentTime: (player: string, currentTime: number) => void;
		};
		const players = new Map<string, Player>();

		class Player {
			private currentTime = 0;
			private readonly events: Events | undefined;
			private readonly iframe: HTMLIFrameElement;
			private readonly playerId: string;

			constructor(element: HTMLElement | string, options: { events?: Events }) {
				const host = typeof element === 'string' ? document.getElementById(element) : element;

				if (!host) {
					throw new Error('Missing YouTube player host');
				}

				this.events = options.events;
				this.playerId = host.id;
				this.iframe = document.createElement('iframe');
				this.iframe.id = host.id;
				host.replaceChildren(this.iframe);
				players.set(this.playerId, this);

				window.setTimeout(() => this.events?.onReady?.({ target: this }), 0);
			}

			cueVideoById(videoId: string) {
				playerWindow.youTubeCalls.push({ player: this.playerId, method: 'cue', videoId });
			}

			loadVideoById(videoId: string) {
				playerWindow.youTubeCalls.push({ player: this.playerId, method: 'load', videoId });
				this.events?.onStateChange?.({ data: 1, target: this });
			}

			playVideo() {
				this.events?.onStateChange?.({ data: 1, target: this });
			}

			setVolume() {}

			getCurrentTime() {
				playerWindow.youTubeCurrentTimeReads.push(this.playerId);
				return this.currentTime;
			}

			getDuration() {
				playerWindow.youTubeDurationReads.push(this.playerId);
				return 3600;
			}

			getIframe() {
				return this.iframe;
			}

			seekTo(seconds: number, allowSeekAhead: boolean) {
				playerWindow.youTubeSeekCalls.push({ player: this.playerId, seconds, allowSeekAhead });
			}

			destroy() {}

			setCurrentTime(currentTime: number) {
				this.currentTime = currentTime;
			}
		}

		const playerWindow = window as unknown as PlayerWindow;
		playerWindow.youTubeCalls = [];
		playerWindow.youTubeCurrentTimeReads = [];
		playerWindow.youTubeDurationReads = [];
		playerWindow.youTubeSeekCalls = [];
		playerWindow.setYouTubeCurrentTime = (player, currentTime) => {
			const target = players.get(player);

			if (!target) {
				throw new Error(`Missing YouTube player ${player}`);
			}

			target.setCurrentTime(currentTime);
		};
		(window as unknown as { YT: { Player: typeof Player } }).YT = { Player };
	});
}

test('starts the scene after the explicit start gesture when autoplay is blocked', async ({
	page
}) => {
	await page.goto('/');

	await expect(page.getByText('Press any key or click anywhere to begin')).toBeVisible();

	await page.keyboard.press('Enter');

	await expect(page.getByText("Let's go...")).toBeHidden({ timeout: 15000 });
	await expect(page.locator('iframe#video')).toBeVisible();
});

test('shows a retry state if playback does not start after the gesture', async ({ page }) => {
	await page.route('https://www.youtube.com/**', (route) => route.abort());

	await page.goto('/');
	await page.keyboard.press('Enter');

	await expect(page.getByText('Playback needs another tap.')).toBeHidden({ timeout: 6000 });
	await expect(page.getByText('Playback needs another tap.')).toBeVisible({ timeout: 4000 });
	await expect(page.getByRole('button', { name: 'Try again' })).toBeVisible();
});

test('does not treat browser reload shortcuts as a playback start gesture', async ({ page }) => {
	await page.route('https://www.youtube.com/**', (route) => route.abort());

	await page.goto('/');
	await page.evaluate(() => {
		document.dispatchEvent(new KeyboardEvent('keyup', { key: 'r', metaKey: true, bubbles: true }));
	});

	await expect(page.getByText('Press any key or click anywhere to begin')).toBeVisible();
	await expect(page.getByText("Let's go...")).toBeHidden();
	await expect(page.getByText('Playback needs another tap.')).toBeHidden();
});

test('uses the first start gesture once the YouTube player becomes ready', async ({ page }) => {
	let interceptedPlayerApi = false;
	let sawRetry = false;

	await page.route('https://www.youtube.com/iframe_api', async (route) => {
		interceptedPlayerApi = true;
		await new Promise((resolve) => setTimeout(resolve, 1000));
		await route.continue();
	});

	await page.goto('/');
	void page
		.getByText('Playback needs another tap.')
		.waitFor({ state: 'visible', timeout: 7000 })
		.then(
			() => {
				sawRetry = true;
			},
			() => {}
		);
	await page.keyboard.press('Enter');

	await expect(page.getByText('Playback needs another tap.')).toBeHidden({ timeout: 10000 });
	await expect(page.locator('iframe#video')).toBeVisible();
	expect(interceptedPlayerApi).toBe(true);
	expect(sawRetry).toBe(false);
});

test('keeps the audio iframe measurable for YouTube', async ({ page }) => {
	await page.goto('/');

	const audioBox = await page.locator('iframe#audio').boundingBox();

	expect(audioBox?.width).toBeGreaterThanOrEqual(200);
	expect(audioBox?.height).toBeGreaterThanOrEqual(200);
});

test('loops the scene from public playback progress without seeking audio', async ({ page }) => {
	await installFakeYouTube(page);
	await page.goto('/?v=bE40M2lucEkybGs6ckZaSE9IbC1MOEE%3D');
	await expect(page.getByText('Press any key or click anywhere to begin')).toBeVisible();
	await expect
		.poll(() =>
			page.evaluate(
				() =>
					(window as unknown as { youTubeCalls: { method: string }[] }).youTubeCalls.filter(
						({ method }) => method === 'cue'
					).length
			)
		)
		.toBe(2);

	await page.keyboard.press('Enter');
	await expect(page.getByText('Press any key or click anywhere to begin')).toBeHidden();
	await expect
		.poll(() =>
			page.evaluate(() =>
				(window as unknown as { youTubeDurationReads: string[] }).youTubeDurationReads.includes(
					'video'
				)
			)
		)
		.toBe(true);

	await page.evaluate(() => {
		(
			window as unknown as {
				setYouTubeCurrentTime: (player: string, currentTime: number) => void;
			}
		).setYouTubeCurrentTime('video', 3571);
	});

	await expect
		.poll(() =>
			page.evaluate(() =>
				(
					window as unknown as {
						youTubeSeekCalls: {
							player: string;
							seconds: number;
							allowSeekAhead: boolean;
						}[];
					}
				).youTubeSeekCalls.find(({ player }) => player === 'video')
			)
		)
		.toEqual({ player: 'video', seconds: 30, allowSeekAhead: true });

	const progressState = await page.evaluate(() => {
		const { youTubeCurrentTimeReads, youTubeSeekCalls } = window as unknown as {
			youTubeCurrentTimeReads: string[];
			youTubeSeekCalls: { player: string }[];
		};

		return { youTubeCurrentTimeReads, youTubeSeekCalls };
	});

	expect(progressState.youTubeCurrentTimeReads).toContain('video');
	expect(progressState.youTubeCurrentTimeReads).not.toContain('audio');
	expect(progressState.youTubeSeekCalls.filter(({ player }) => player === 'audio')).toHaveLength(0);
});

test('plays replacement scene and station videos without rebuilding the players', async ({
	page
}) => {
	await installFakeYouTube(page);

	await page.goto('/');
	await expect(page.getByText('Press any key or click anywhere to begin')).toBeVisible();
	await expect
		.poll(() =>
			page.evaluate(
				() =>
					(window as unknown as { youTubeCalls: { method: string }[] }).youTubeCalls.filter(
						({ method }) => method === 'cue'
					).length
			)
		)
		.toBe(2);
	await page.keyboard.press('Enter');
	await expect(page.getByText('Press any key or click anywhere to begin')).toBeHidden();
	await expect(page.locator('iframe#video')).toBeVisible();
	const initialVideoId = await page.evaluate(
		() =>
			(
				window as unknown as { youTubeCalls: { player: string; method: string; videoId: string }[] }
			).youTubeCalls.find(({ player, method }) => player === 'video' && method === 'cue')?.videoId
	);
	const initialAudioVideoId = await page.evaluate(
		() =>
			(
				window as unknown as { youTubeCalls: { player: string; method: string; videoId: string }[] }
			).youTubeCalls.find(({ player, method }) => player === 'audio' && method === 'cue')?.videoId
	);

	await page.getByRole('button', { name: 'Change' }).first().click();
	await page
		.getByPlaceholder('Search over 200+ countries and cities worldwide')
		.pressSequentially('Paris');
	await page
		.getByRole('button', { name: /Paris/ })
		.nth(initialVideoId === 'lN43inpI2lk' ? 1 : 0)
		.click();

	await expect
		.poll(() =>
			page.evaluate(() =>
				(
					window as unknown as { youTubeCalls: { player: string; method: string }[] }
				).youTubeCalls.some(({ player, method }) => player === 'video' && method === 'load')
			)
		)
		.toBe(true);

	await page.getByRole('button', { name: 'Change' }).nth(1).click();
	await page.getByRole('button', { name: 'Lofi' }).click();
	await page
		.getByRole('button', {
			name: initialAudioVideoId === 'X4VbdwhkE10' ? /Coffee Shop Radio/ : /Lofi Girl Radio/
		})
		.click();

	await expect
		.poll(() =>
			page.evaluate(() =>
				(
					window as unknown as { youTubeCalls: { player: string; method: string }[] }
				).youTubeCalls.some(({ player, method }) => player === 'audio' && method === 'load')
			)
		)
		.toBe(true);
});
