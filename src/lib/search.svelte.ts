import { page } from '$app/state';

import { mapValues, groupBy, sortBy, debounce } from 'es-toolkit';

import type { SceneTypes, Tags } from '$lib/enums';
import type { SearchResultItem } from '$lib/types';
import { isScene } from '$lib/guards';

import type { SearchParams } from '$server/schema';
import type { Scene } from '$server/schema';

export type SearchFn<T> = (params: SearchParams) => Promise<T[]>;

export class Searcher<T = SearchResultItem> {
	#loading = $state(false);

	#items: T[] = $state([]);

	#path = $state<string[]>([]);

	#query = $state('');

	#tags = $state<Tags[]>([]);

	constructor(private searchFn: SearchFn<T>) {
		$effect(() => {
			this.#loading = true;

			this.searchFn({
				query: this.#query,
				path: this.#path.join(''),
				tags: this.#tags
			})
				.then((data) => {
					this.#items = data;
				})
				.finally(() => {
					this.#loading = false;
				})
				.catch((error) => {
					console.error(error);
				});
		});
	}

	get items() {
		return this.#items;
	}

	get path() {
		return this.#path;
	}

	setTags(tags: Tags[]) {
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
		this.searchFn({
			query: this.#query,
			path: [...this.#path, component].join(''),
			tags: this.#tags
		});
	}

	search = debounce((q) => {
		this.#query = q;
	}, 150);

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
			groupBy(this.items.filter(isScene), (scene) => scene.type),
			(s) => sortBy(s ?? [], ['name'])
		) as Record<SceneTypes, Scene[]>;
	}

	get groups() {
		return sortBy(
			this.items.filter((scene) => !isScene(scene)),
			['name']
		) as Exclude<SearchResultItem, Scene>[];
	}
}
