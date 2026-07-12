<script lang="ts">
	import { fade } from 'svelte/transition';

	import { Typography } from '$components/ui';
	import { HandPeace } from '$lib/icons';
	import { getVisitors } from '$server/visitors.remote';

	const visitorCount = await getVisitors();
</script>

<svelte:window onfocus={() => getVisitors().refresh()} />

<div>
	{#if visitorCount && visitorCount > 0}
		<div transition:fade={{ duration: 500 }} class="flex flex-row items-center gap-0">
			<HandPeace class="size-4" />
			<Typography variant="body" color="subtle" class="flex-1 pr-4 pl-2">
				<span class="text-foreground">{visitorCount}</span> other
				{visitorCount === 1 ? 'person' : 'people'} are vibin here
			</Typography>
		</div>
	{/if}
</div>
