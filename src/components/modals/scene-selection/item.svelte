<script lang="ts">
	import { Tags } from '$enums';
	import { Stack, Typography } from '$components/ui';
	import type { SearchResultItem, Station } from '$schema';
	import { CloudRain, Snowflake } from '$icons';

	interface Props {
		item: Exclude<SearchResultItem, Station>;
		onclick: (e: MouseEvent) => void;
		emoji?: string | undefined;
	}

	let { onclick, item, emoji = undefined }: Props = $props();

	function handleClick(e: MouseEvent) {
		e.stopPropagation();
		onclick?.(e);
	}

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
	class="group bg-card/50 hover:bg-card border-input flex cursor-pointer flex-col items-center justify-start gap-2 rounded-xl border p-2 shadow-sm transition-all duration-300 ease-in-out hover:scale-102 dark:bg-white/5 dark:hover:bg-white/10"
>
	<img
		loading="lazy"
		decoding="async"
		src={item.thumbnail}
		width="480"
		height="360"
		class="border-input aspect-video w-full rounded-md border object-cover object-center"
		alt={item.name}
	/>

	<Stack orientation="row" gap="sm" align="center" class="w-full pt-2">
		<!-- {#if icon}
			<iconify-icon {icon}></iconify-icon>
		{/if} -->

		<Typography
			class="grow text-left  opacity-85 transition-opacity duration-300 group-hover:opacity-100"
			variant="title"
			size="sm"
		>
			{item.name}
		</Typography>

		{#if 'tags' in item}
			{#if item.tags?.includes(Tags.rain)}
				<CloudRain class="size-4 opacity-50" />
			{/if}

			{#if item.tags?.includes(Tags.snow)}
				<Snowflake class="size-4 opacity-50" />
			{/if}
		{/if}
	</Stack>
</button>
