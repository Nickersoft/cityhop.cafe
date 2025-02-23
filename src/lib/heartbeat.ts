import { posthog } from 'posthog-js';
import { nanoid } from 'nanoid';

import { PUBLIC_PH_TOKEN } from '$env/static/public';

import { nowPlaying } from '$lib/state.svelte';

function createID() {
	const distinctIDKey = 'distinct-id';

	if (!localStorage.getItem(distinctIDKey)) {
		localStorage.setItem(distinctIDKey, nanoid());
	}

	return localStorage.getItem(distinctIDKey)!;
}

function trigger(id: string) {
	return fetch('/api/heartbeat', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			distinctID: id,
			nowPlaying: nowPlaying.scene,
			currentStation: nowPlaying.station
		})
	});
}

export default function setupHeartbeat() {
	const distinctID = createID();

	posthog.init(PUBLIC_PH_TOKEN, {
		api_host: 'https://app.posthog.com',
		loaded(ph) {
			ph.identify(distinctID);
		}
	});

	const timer = setInterval(() => trigger(distinctID), 1000 * 60 * 5 /* 5 minutes */);

	return () => {
		if (timer) {
			clearTimeout(timer);
		}
	};
}
