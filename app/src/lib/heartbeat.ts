import { nanoid } from 'nanoid';

import { PUBLIC_PH_TOKEN } from '$app/env/public';

import { heartbeat } from '#lib/remote/heartbeat.remote';

import { nowPlaying } from '#lib/state.svelte.js';

function createID() {
	const distinctIDKey = 'distinct-id';

	if (!localStorage.getItem(distinctIDKey)) {
		localStorage.setItem(distinctIDKey, nanoid());
	}

	return localStorage.getItem(distinctIDKey) as string;
}

export default function setupHeartbeat() {
	const token = PUBLIC_PH_TOKEN;

	if (!token) {
		return () => {};
	}

	const distinctID = createID();

	void import('posthog-js').then(({ posthog }) => {
		posthog.init(token, {
			api_host: 'https://app.posthog.com',
			loaded(ph) {
				ph.identify(distinctID);
			}
		});
	});

	const timer = setInterval(
		() => {
			void heartbeat({
				distinctID,
				nowPlaying: nowPlaying.scene,
				currentStation: nowPlaying.station
			});
		},
		1000 * 60 * 5 /* 5 minutes */
	);

	return () => {
		if (timer) {
			clearInterval(timer);
		}
	};
}
