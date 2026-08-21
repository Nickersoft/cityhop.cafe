import { afterEach, beforeEach, describe, expect, test, vi } from 'vite-plus/test';

import { observeYouTubeProgress } from './progress';

describe('observeYouTubeProgress', () => {
	beforeEach(() => {
		vi.useFakeTimers();
		vi.stubGlobal('window', globalThis);
	});

	afterEach(() => {
		vi.useRealTimers();
		vi.restoreAllMocks();
		vi.unstubAllGlobals();
	});

	test('notifies once for fractional times in the same second', async () => {
		const getCurrentTime = vi.fn().mockResolvedValueOnce(1.2).mockResolvedValueOnce(1.9);
		const onTimeChange = vi.fn();

		observeYouTubeProgress({ getCurrentTime }, onTimeChange);

		await vi.advanceTimersByTimeAsync(500);

		expect(onTimeChange).toHaveBeenCalledTimes(1);
		expect(onTimeChange).toHaveBeenCalledWith(1);
	});

	test('notifies again after crossing a whole-second boundary', async () => {
		const getCurrentTime = vi.fn().mockResolvedValueOnce(1.9).mockResolvedValueOnce(2);
		const onTimeChange = vi.fn();

		observeYouTubeProgress({ getCurrentTime }, onTimeChange);

		await vi.advanceTimersByTimeAsync(500);

		expect(onTimeChange).toHaveBeenNthCalledWith(1, 1);
		expect(onTimeChange).toHaveBeenNthCalledWith(2, 2);
	});

	test('does not overlap slow reads', async () => {
		let resolveFirstRead: ((time: number) => void) | undefined;
		const firstRead = new Promise<number>((resolve) => {
			resolveFirstRead = resolve;
		});
		const getCurrentTime = vi.fn().mockReturnValueOnce(firstRead).mockResolvedValue(2);

		observeYouTubeProgress({ getCurrentTime }, vi.fn());

		await vi.advanceTimersByTimeAsync(1000);
		expect(getCurrentTime).toHaveBeenCalledTimes(1);

		resolveFirstRead?.(1);
		await vi.advanceTimersByTimeAsync(250);

		expect(getCurrentTime).toHaveBeenCalledTimes(2);
	});

	test('recovers after a rejected read', async () => {
		const getCurrentTime = vi
			.fn()
			.mockRejectedValueOnce(new Error('Player unavailable'))
			.mockResolvedValueOnce(3.4);
		const onTimeChange = vi.fn();

		observeYouTubeProgress({ getCurrentTime }, onTimeChange);

		await vi.advanceTimersByTimeAsync(500);

		expect(getCurrentTime).toHaveBeenCalledTimes(2);
		expect(onTimeChange).toHaveBeenCalledWith(3);
	});

	test('cleanup prevents new reads and a pending callback', async () => {
		let resolveRead: ((time: number) => void) | undefined;
		const read = new Promise<number>((resolve) => {
			resolveRead = resolve;
		});
		const getCurrentTime = vi.fn().mockReturnValue(read);
		const onTimeChange = vi.fn();
		const cleanup = observeYouTubeProgress({ getCurrentTime }, onTimeChange);

		await vi.advanceTimersByTimeAsync(250);
		cleanup();
		resolveRead?.(4.5);
		await vi.advanceTimersByTimeAsync(1000);

		expect(getCurrentTime).toHaveBeenCalledTimes(1);
		expect(onTimeChange).not.toHaveBeenCalled();
	});

	test('cleanup is idempotent', async () => {
		const getCurrentTime = vi.fn().mockResolvedValue(1);
		const cleanup = observeYouTubeProgress({ getCurrentTime }, vi.fn());

		cleanup();
		cleanup();
		await vi.advanceTimersByTimeAsync(1000);

		expect(getCurrentTime).not.toHaveBeenCalled();
	});
});
