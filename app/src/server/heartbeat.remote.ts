import z from 'zod';
import { env } from '$env/dynamic/public';
import { PostHog } from 'posthog-node';

import { getRequestEvent, query } from '$app/server';

import { sceneSchema, stationSchema } from './schema';

export const heartbeat = query(
	z.object({
		distinctID: z.string(),
		nowPlaying: sceneSchema.nullable(),
		currentStation: stationSchema.nullable()
	}),
	async ({ distinctID, nowPlaying, currentStation }) => {
		if (!env.PUBLIC_PH_TOKEN) {
			return true;
		}

		const { getClientAddress } = getRequestEvent();

		const ph = new PostHog(env.PUBLIC_PH_TOKEN, {
			host: 'https://app.posthog.com',
			flushAt: 1,
			flushInterval: 0
		});

		ph.capture({
			distinctId: distinctID,
			event: 'heartbeat',
			disableGeoip: false,
			properties: {
				$ip: getClientAddress(),
				nowPlaying: nowPlaying,
				currentStation: currentStation
			}
		});

		await ph.shutdown();

		return true;
	}
);
