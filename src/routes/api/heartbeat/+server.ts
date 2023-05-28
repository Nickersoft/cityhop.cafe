import { PostHog } from 'posthog-node';

import type { RequestHandler } from './$types';

import { PUBLIC_PH_TOKEN } from '$env/static/public';

export const POST: RequestHandler = async ({ request }) => {
	const ph = new PostHog(PUBLIC_PH_TOKEN, {
		host: 'https://app.posthog.com',
		flushAt: 1,
		flushInterval: 0
	});

	const body = await request.json();

	ph.capture({ distinctId: body.distinctID, event: 'heartbeat' });

	await ph.shutdownAsync();

	return new Response(JSON.stringify({ success: true }));
};
