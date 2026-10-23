import type { Handle } from '@sveltejs/kit/hooks';

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		preload: ({ type }) => {
			return type === 'font';
		}
	});
};
