type Fetcher = typeof globalThis.fetch;

export function makeCall<T>(url: string | URL, customFetch?: Fetcher): Promise<T> {
	const fn = customFetch ? customFetch(`/api/${url}`) : fetch(`/api/${url}`);
	return fn.then((res) => res.json());
}
