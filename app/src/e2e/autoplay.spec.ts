import { expect, test } from '@playwright/test';

test.use({
	launchOptions: {
		args: [
			'--autoplay-policy=user-gesture-required',
			'--disable-features=PreloadMediaEngagementData,MediaEngagementBypassAutoplayPolicies'
		]
	}
});

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

test('plays replacement scene and station videos without rebuilding the players', async ({
	page
}) => {
	await page.addInitScript(() => {
		type EventHandler = (event: { data?: number; target: Player }) => void;
		type Events = {
			onReady?: EventHandler;
			onStateChange?: EventHandler;
		};
		type Call = { player: string; method: 'cue' | 'load'; videoId: string };
		type PlayerWindow = { youTubeCalls: Call[] };

		class Player {
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

			getDuration() {
				return 3600;
			}

			getIframe() {
				return this.iframe;
			}

			seekTo() {}

			destroy() {}
		}

		const playerWindow = window as unknown as PlayerWindow;
		playerWindow.youTubeCalls = [];
		(window as unknown as { YT: { Player: typeof Player } }).YT = { Player };
	});

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
