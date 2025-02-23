import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const v = event.url.searchParams.get('v');

	if (v && v.trim().length > 0) {
		const [videoID, audioID] = atob(v).split(':');

		if (videoID && audioID) {
			event.locals = { videoID, audioID };
		}
	}

	return resolve(event);
};
