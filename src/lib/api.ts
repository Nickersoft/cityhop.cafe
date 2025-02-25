import type { StationWithGenre } from '$server/data/stations';
import type { Scene } from '$server/schema';

type Fetcher = typeof globalThis.fetch;

function makeCall<T>(url: string | URL, customFetch?: Fetcher): Promise<T> {
	const fn = customFetch ? customFetch(`/api/${url}`) : fetch(`/api/${url}`);
	return fn.then((res) => res.json());
}

export function randomScene(fetch: Fetcher = window.fetch): Promise<Scene> {
	return makeCall<Scene>('random/scene', fetch);
}

export function randomStation(fetch: Fetcher = window.fetch): Promise<StationWithGenre> {
	return makeCall<StationWithGenre>('random/station', fetch);
}

export function getSceneByID(id: string, fetch: Fetcher): Promise<Scene> {
	return makeCall<Scene>(`scenes/${id}`, fetch);
}

export function getStationByID(id: string, fetch: Fetcher): Promise<StationWithGenre> {
	return makeCall<StationWithGenre>(`stations/${id}`, fetch);
}
