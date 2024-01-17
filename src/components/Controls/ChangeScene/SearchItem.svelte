<script lang="ts" context="module">
	import { Tags } from '$data/tags';
	import type { Continent, Country, Scene, SceneGroup } from '$lib/types';

	export type Item = Continent | Country | SceneGroup | Scene;
</script>

<script lang="ts">
	import { getVideoThumbnail } from '$lib/utils';
	import { dash } from 'radash';

	export let item: Item;
	export let emoji: string | undefined = undefined;

	function getThumbnail(_item: Item) {
		if ('videoID' in _item) {
			return getVideoThumbnail(_item.videoID);
		}

		if ('countries' in _item) {
			return getThumbnail(_item.countries[0]);
		}

		if ('scenes' in _item) {
			return getThumbnail(_item.scenes[0]);
		}
	}

	let icon: string | undefined = undefined;

	$: {
		if ('emoji' in item) {
			if (item.emoji === 'flag') {
				icon = `twemoji:flag-${dash(item.name)}`;
			} else {
				icon = `twemoji:${item.emoji}`;
			}
		} else if (emoji) {
			icon = `twemoji:${emoji}`;
		}
	}
</script>

<button
	on:click|stopPropagation
	class="flex cursor-pointer rounded-2xl p-4 hover:bg-white/10 transition-colors duration-300 ease-in-out items-start gap-4 justify-start flex-col"
>
	<div class="w-full h-48">
		<img
			loading="lazy"
			decoding="async"
			src={getThumbnail(item)}
			width="480"
			height="360"
			class="rounded-xl w-full h-full object-center object-cover"
			alt={item.name}
		/>
	</div>

	<div class="flex flex-row gap-2 px-1 items-center">
		{#if icon}
			<iconify-icon {icon} />
		{/if}

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
