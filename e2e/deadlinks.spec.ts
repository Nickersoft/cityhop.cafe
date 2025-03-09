import { describe } from 'node:test';

import { expect, test, type Page } from '@playwright/test';

import { stations } from '$server/data/stations';
import { scenes } from '$server/data/scenes';

test.describe.configure({ mode: 'parallel' });

async function validateVideoLink(page: Page, videoID: string): Promise<boolean> {
	await page.goto(`https://www.youtube.com/watch?v=${videoID}`, { waitUntil: 'domcontentloaded' });
	const pageContent = await page.content();
	const unavailableTexts = ['Video unavailable', 'This video is unavailable'];
	const isUnavailable = unavailableTexts.some((text) => pageContent.includes(text));
	return !isUnavailable;
}

describe('Validate station links', () => {
	for (const station of stations) {
		const videoID = station.trackID as string;

		test(`Check station ${station.name} (${videoID})`, async ({ page }) => {
			test.slow();
			const valid = await validateVideoLink(page, videoID);
			expect(valid, `Video unavailable for station ${station.name} (${videoID})`).toBeTruthy();
		});
	}
});

describe('Validate scene links', () => {
	for (const scene of scenes) {
		const videoID = scene.videoID as string;

		test(`Check scene ${scene.name} (${videoID})`, async ({ page }) => {
			test.slow();
			const valid = await validateVideoLink(page, videoID);
			expect(valid, `Video unavailable for scene ${scene.name} (${videoID})`).toBeTruthy();
		});
	}
});
