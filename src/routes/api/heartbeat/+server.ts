import { PostHog } from 'posthog-node';

import type { RequestHandler } from './$types';

import { PUBLIC_PH_TOKEN } from '$env/static/public';

const ph = new PostHog(PUBLIC_PH_TOKEN);

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	ph.capture({ distinctId: body.distinctID, event: 'heartbeat' });

	return new Response(JSON.stringify({ success: true }));
};
