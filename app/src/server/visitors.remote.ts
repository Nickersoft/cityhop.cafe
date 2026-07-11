import dayjs from 'dayjs';

import { omitBy, sortBy } from 'es-toolkit';

import { env } from '$env/dynamic/private';

import { query } from '$app/server';

interface Event {
	id: string;
	distinct_id: string;
	properties: Record<string, unknown>;
	event: string;
	timestamp: string;
	person: {
		is_identified: false;
		distinct_ids: string[];
		properties: Record<string, unknown>;
	};
	elements: [];
	elements_chain: string;
}

interface EventResponse {
	next: null;
	results: Event[];
}

export const getVisitors = query(async () => {
	const threshold = dayjs().subtract(5, 'minute').toISOString();

	const url = new URL(`https://app.posthog.com/api/projects/${env.PH_PROJECT_ID}/events/`);

	url.searchParams.set('after', threshold);

	const init: RequestInit = { headers: { Authorization: `Bearer ${env.PH_API_KEY}` } };

	const result = (await fetch(url.toString(), init).then((res) => res.json())) as EventResponse;

	if (!result.results || result.results.length === 0) {
		return 0;
	}

	const groupedUsers = omitBy(
		Object.groupBy(result.results, (r) => r.distinct_id),
		(v: Event[] = []) => {
			const sorted = sortBy(v, [(r) => dayjs(r.timestamp).unix()]);
			const entered = sorted.findLastIndex((r) => r.event === '$pageview');
			const left = sorted.findLastIndex((r) => r.event === '$pageleave');
			return entered < left;
		}
	);

	// Subtract 1 to account for current user
	return Object.keys(groupedUsers).length - 1;
});
