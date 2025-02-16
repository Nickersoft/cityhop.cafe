<script lang="ts">
	import { Tags } from '$enums';

	import { getThumbnail } from '$lib/youtube';
	import Typography from '$ui/Typography.svelte';
	import type { SearchResultItem } from '$schema';

	interface Props {
		item: SearchResultItem;
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
	class="group flex cursor-pointer flex-col items-center justify-start gap-2 rounded-xl border bg-white/5 p-2 shadow-sm transition-all duration-300 ease-in-out hover:scale-102 hover:bg-white/10"
>
	<img
		loading="lazy"
		decoding="async"
		src={item.thumbnail}
		width="480"
		height="360"
		class="aspect-video w-full rounded-md border object-cover object-center"
		alt={item.name}
	/>

	<div class="flex flex-row items-center gap-2 pt-4 pb-2">
		<!-- {#if icon}
			<iconify-icon {icon}></iconify-icon>
		{/if} -->

		<Typography
			size="lg"
			class="opacity-85 transition-opacity duration-300 group-hover:opacity-100"
			variant="body"
		>
			{item.name}
		</Typography>

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
