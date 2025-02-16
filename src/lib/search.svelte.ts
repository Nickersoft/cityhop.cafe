import { isScene, type Scene, type SearchResultItem } from '$schema';
import type { SceneTypes } from '$enums';

import { page } from '$app/state';

import { alphabetical, debounce, group, mapValues } from './utils';
import { untrack } from 'svelte';

export class Searcher<T = SearchResultItem> {
	#loading = $state(false);

	#items: T[] = $state([]);

	#query = $state('');

	#url = $derived.by(() => {
		const url = new URL(`/api/${this.route}`, page.url.origin);

		if (this.#query) {
			url.searchParams.delete('p');
			url.searchParams.set('q', this.#query);
		} else if (this.path && this.path.length > 0) {
			url.searchParams.delete('q');
			url.searchParams.set('p', this.path.join(''));
		}

		return url;
	});

	path = $state<string[]>([]);

	constructor(private route: string) {
		$effect(() => {
			this.#loading = true;

			fetch(this.#url)
				.then((res) => res.json())
				.then((data) => {
					this.#items = data;
				})
				.finally(() => {
					this.#loading = false;
				});
		});
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
