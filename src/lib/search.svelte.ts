import type { SearchResultItem } from '$types';

import { page } from '$app/state';

import { debounce } from './utils';

export class Searcher<T = SearchResultItem> {
	#loading = $state(false);
	#items: T[] = $state([]);

	constructor(private route: string) {}

	get #url() {
		return new URL(`/api/${this.route}`, page.url.origin);
	}

	search = debounce({ delay: 1000 }, (q) => {
		const url = this.#url;

		if (q) {
			url.searchParams.set('q', q);
		}

		this.#loading = true;

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				this.#items = data;
			})
			.finally(() => {
				this.#loading = false;
			});
	});

	get props() {
		return {
			items: this.#items,
			loading: this.#loading
		};
	}
}
