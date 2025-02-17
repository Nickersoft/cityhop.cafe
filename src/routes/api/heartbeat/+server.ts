import { PUBLIC_PH_TOKEN } from '$env/static/public';
import { PostHog } from 'posthog-node';

import type { Scene, Station } from '$schema';

import type { RequestHandler } from './$types';

interface HeartbeatBody {
	distinctID: string;
	nowPlaying: Scene;
	currentStation: Station;
}

export const POST: RequestHandler = async ({ getClientAddress, request }) => {
	const ph = new PostHog(PUBLIC_PH_TOKEN, {
		host: 'https://app.posthog.com',
		flushAt: 1,
		flushInterval: 0
	});

	const body: HeartbeatBody = await request.json();

	ph.capture({
		distinctId: body.distinctID,
		event: 'heartbeat',
		disableGeoip: false,
		properties: {
			$ip: getClientAddress(),
			nowPlaying: body.nowPlaying,
			currentStation: body.currentStation
		}
	});

	await ph.shutdown();

	return new Response(JSON.stringify({ success: true }));
};
