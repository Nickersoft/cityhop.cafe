import dayjs from 'dayjs';

import { PH_API_KEY, PH_PROJECT_ID } from '$env/static/private';

import type { RequestHandler } from './$types';
import { group } from 'radash';

interface Event {
	id: string;
	distinct_id: string;
	properties: Record<string, unknown>;
	event: string;
	timestamp: string;
	person: Record<string, unknown>;
	elements: [];
	elements_chain: string;
}

interface EventResponse {
	next: null;
	results: Event[];
}

export const GET: RequestHandler = async () => {
	const threshold = dayjs().subtract(15, 'minute').toISOString();

	const url = new URL(`https://app.posthog.com/api/projects/${PH_PROJECT_ID}/events/`);

	url.searchParams.set('after', threshold);

	const init: RequestInit = { headers: { Authorization: `Bearer ${PH_API_KEY}` } };

	const result = (await fetch(url.toString(), init).then((res) => res.json())) as EventResponse;

	const groupedUsers = group(result.results, (r) => r.distinct_id);

	const count = Object.keys(groupedUsers).length;

	return new Response(String(count));
};
