import { page } from '$app/state';

import type { SceneTypes } from '$lib/enums';
import type { Scene } from '$server/schema';
import { alphabetical, debounce, group, mapValues } from '$lib/utils';
import type { SearchResultItem } from '$lib/types';
import { isScene } from '$lib/guards';

export class Searcher<T = SearchResultItem> {
	#loading = $state(false);

	#items: T[] = $state([]);

	#path = $state<string[]>([]);

	#query = $state('');

	#tags = $state<string[]>([]);

	#cache = new Map<URL, SearchResultItem[]>();

	#url = $derived.by(() => {
		const url = new URL(`/api/${this.route}`, page.url.origin);

		if (this.#query) {
			url.searchParams.delete('p');
			url.searchParams.set('q', this.#query);
		} else if (this.#path && this.#path.length > 0) {
			url.searchParams.delete('q');
			url.searchParams.set('p', this.#path.join(''));
		}

		if (this.#tags && this.#tags.length > 0) {
			url.searchParams.set('t', this.#tags.join(','));
		}

		return url;
	});

	constructor(private route: string) {
		$effect(() => {
			this.#loading = true;

			if (this.#cache.has(this.#url)) {
				this.#items = this.#cache.get(this.#url) as T[];
				return;
			}

			fetch(this.#url)
				.then((res) => res.json())
				.then((data) => {
					this.#items = data;
					this.#cache.set(this.#url, data);
				})
				.finally(() => {
					this.#loading = false;
				});
		});
	}

	get items() {
		return this.#items;
	}

	get path() {
		return this.#path;
	}

	setTags(tags: string[]) {
		this.#tags = tags;
	}

	clearPath() {
		if (this.#path.length > 0) {
			this.#path = [];
		}
	}

	pushPathComponent(component: string) {
		this.#path.push(component);
	}

	popPathComponent() {
		return this.#path.pop();
	}

	prefetch(component: string) {
		const url = new URL(`/api/${this.route}`, page.url.origin);

		url.searchParams.set('p', [...this.#path, component].join(''));

		if (!this.#cache.has(url)) {
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					this.#cache.set(url, data);
				});
		}
	}

	search = debounce({ delay: 150 }, (q) => {
		this.#query = q;
	});

	get props() {
		return {
			items: this.#items,
			loading: this.#loading
		};
	}
}

export class SearchResults {
	items: SearchResultItem[] = $state([]);

	constructor(items: SearchResultItem[]) {
		this.items = items;
	}

	get scenes() {
		return mapValues(
			group(this.items.filter(isScene), (scene) => scene.type),
			(s) => alphabetical(s ?? [], ({ name }) => name)
		) as Record<SceneTypes, Scene[]>;
	}

	get groups() {
		return alphabetical(
			this.items.filter((scene) => !isScene(scene)),
			({ name }) => name
		) as Exclude<SearchResultItem, Scene>[];
	}
}
