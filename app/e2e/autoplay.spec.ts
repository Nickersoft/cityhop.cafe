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
