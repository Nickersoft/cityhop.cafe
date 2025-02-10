<script lang="ts" module>
	import type { Continent, Country, Scene, SceneGroup } from '$lib/types';
	export type ResultItem = Continent | Country | SceneGroup | Scene;
</script>

<script lang="ts">
	import { Tags } from '$lib/enums';

	interface Props {
		item: ResultItem;
		onclick: (e: MouseEvent) => void;
		emoji?: string | undefined;
	}

	let { onclick, item, emoji = undefined }: Props = $props();

	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		onclick?.(e);
	}

	// function getThumbnail(_item: Item) {
	// 	if ('videoID' in _item) {
	// 		return getVideoThumbnail(_item.videoID);
	// 	}

	// 	if ('countries' in _item) {
	// 		return getThumbnail(_item.countries[0]);
	// 	}

	// 	if ('scenes' in _item) {
	// 		return getThumbnail(_item.scenes[0]);
	// 	}
	// }

	// let icon: string | undefined = $derived.by(() => {
	// 	if ('emoji' in item) {
	// 		if (item.emoji === 'flag') {
	// 			return `twemoji:flag-${dash(item.name)}`;
	// 		} else {
	// 			return `twemoji:${item.emoji}`;
	// 		}
	// 	} else if (emoji) {
	// 		return `twemoji:${emoji}`;
	// 	}
	// });
</script>

<button
	onclick={handleClick}
	class="flex cursor-pointer flex-col items-start justify-start gap-4 rounded-2xl p-4 transition-colors duration-300 ease-in-out hover:bg-white/10"
>
	<div class="h-48 w-full">
		<!-- <img
			loading="lazy"
			decoding="async"
			src={getThumbnail(item)}
			width="480"
			height="360"
			class="h-full w-full rounded-xl object-cover object-center"
			alt={item.name}
		/> -->
	</div>

	<div class="flex flex-row items-center gap-2 px-1">
		<!-- {#if icon}
			<iconify-icon {icon}></iconify-icon>
		{/if} -->

		<p>{item.name}</p>

		{#if 'tags' in item}
			{#if item.tags?.includes(Tags.rain)}
				<iconify-icon icon="twemoji:cloud-with-rain"></iconify-icon>
			{/if}

			{#if item.tags?.includes(Tags.snow)}
				<iconify-icon icon="twemoji:snowflake"></iconify-icon>
			{/if}
		{/if}
	</div>
</button>
