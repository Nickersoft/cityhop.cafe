import type { StationWithGenre } from '$server/data/stations';
import type { Scene } from '$server/schema';
import { Tags } from './enums';
import { nowPlaying } from './state.svelte';

type Fetcher = typeof globalThis.fetch;

function makeCall<T>(
	url: string,
	params: Record<string, unknown> = {},
	customFetch?: Fetcher
): Promise<T> {
	const queryString = new URLSearchParams(
		Object.entries(params).reduce(
			(acc, [key, value]) => {
				const v = Array.isArray(value) ? value.join(',') : value?.toString();
				if (v) acc[key] = v;
				return acc;
			},
			{} as Record<string, string>
		)
	).toString();

	const finalUrl = `/api/${url}${queryString ? `?${queryString}` : ''}`;
	const fn = customFetch ? customFetch(finalUrl) : fetch(finalUrl);

	return fn.then((res) => res.json());
}

export function randomScene(
	params: Record<string, unknown> = {},
	fetch: Fetcher = window.fetch
): Promise<Scene> {
	return makeCall<Scene>('random/scene', params, fetch);
}

export function randomStation(
	params: Record<string, string | string[]> = {},
	fetch: Fetcher = window.fetch
): Promise<StationWithGenre> {
	return makeCall<StationWithGenre>('random/station', params, fetch);
}

export function getSceneByID(id: string, fetch: Fetcher): Promise<Scene> {
	return makeCall<Scene>(`scenes/${id}`, {}, fetch);
}

export function getStationByID(id: string, fetch: Fetcher): Promise<StationWithGenre> {
	return makeCall<StationWithGenre>(`stations/${id}`, {}, fetch);
}

export async function getSpooky() {
	nowPlaying.scene = await makeCall<Scene>('random/scene', { tags: Tags.halloween });
	nowPlaying.station = await makeCall<StationWithGenre>('random/station', { tags: Tags.halloween });
}

export async function getFestive() {
	nowPlaying.scene = await makeCall<Scene>('random/scene', { tags: Tags.christmas });
	nowPlaying.station = await makeCall<StationWithGenre>('random/station', { tags: Tags.christmas });
}
