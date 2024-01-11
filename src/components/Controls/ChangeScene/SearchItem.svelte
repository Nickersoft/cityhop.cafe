<script lang="ts" context="module">
	import { Tags } from '$data/tags';
	import type { Continent, Country, Scene, SceneGroup } from '$lib/types';

	export type Item = Continent | Country | SceneGroup | Scene;
</script>

<script lang="ts">
	import { getVideoThumbnail } from '$lib/utils';
	import { draw } from 'radash';

	export let item: Item;

	function getThumbnail(_item: Item) {
		if ('videoID' in _item) {
			return getVideoThumbnail(_item.videoID);
		}

		if ('countries' in _item) {
			return getThumbnail(draw(_item.countries)!);
		}

		if ('scenes' in _item) {
			return getThumbnail(draw(_item.scenes)!);
		}
	}
</script>

<button
	on:click|stopPropagation
	class="flex cursor-pointer rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300 ease-in-out items-start gap-4 justify-start flex-col"
>
	<img
		loading="lazy"
		decoding="async"
		src={getThumbnail(item)}
		class="w-full h-48 rounded-xl object-cover"
		alt={item.name}
	/>

	<div class="flex flex-row gap-2 px-1 items-center">
		<p>{item.name}</p>

		{#if 'tags' in item}
			{#if item.tags?.includes(Tags.rain)}
				<iconify-icon icon="twemoji:cloud-with-rain" />
			{/if}

			{#if item.tags?.includes(Tags.snow)}
				<iconify-icon icon="twemoji:snowflake" />
			{/if}
		{/if}
	</div>
</button>
