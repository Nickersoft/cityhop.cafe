<script lang="ts">
	import { Tags } from '$data/tags';
	import { getVideoThumbnail } from '$lib/utils';
	import { dash } from 'radashi';

	import type { Item } from './types';

	interface Props {
		item: Item;
		onclick: (e: MouseEvent) => void;
		emoji?: string | undefined;
	}

	let { onclick, item, emoji = undefined }: Props = $props();

	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		onclick?.(e);
	}

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

	let icon: string | undefined = $derived.by(() => {
		if ('emoji' in item) {
			if (item.emoji === 'flag') {
				return `twemoji:flag-${dash(item.name)}`;
			} else {
				return `twemoji:${item.emoji}`;
			}
		} else if (emoji) {
			return `twemoji:${emoji}`;
		}
	});
</script>

<button
	onclick={handleClick}
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
			<iconify-icon {icon}></iconify-icon>
		{/if}

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
