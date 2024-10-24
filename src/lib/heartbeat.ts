import { PUBLIC_PH_TOKEN } from '$env/static/public';
import posthog from 'posthog-js';
import { v4 as uuid } from 'uuid';

import { nowPlaying } from './stores.svelte';

function getDistinctID() {
	const distinctIDKey = 'distinct-id';

	if (!localStorage.getItem(distinctIDKey)) {
		localStorage.setItem(distinctIDKey, uuid());
	}

	return localStorage.getItem(distinctIDKey)!;
}

export function setupHeartbeat() {
	const distinctID = getDistinctID();

	posthog.init(PUBLIC_PH_TOKEN, {
		api_host: 'https://app.posthog.com',
		loaded(ph) {
			ph.identify(distinctID);
		}
	});

	function triggerHeartbeat() {
		return fetch('/api/heartbeat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				distinctID: distinctID,
				nowPlaying: nowPlaying.scene,
				currentStation: nowPlaying.station
			})
		});
	}

	const timer = setInterval(triggerHeartbeat, 1000 * 60 * 5 /* 5 minutes */);

	return () => {
		if (timer) {
			clearTimeout(timer);
		}
	};
}
