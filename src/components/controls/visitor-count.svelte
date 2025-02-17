<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import { Typography } from '$components/ui';
	import { HandPeace } from '$icons';

	let visitorCount = $state<Optional<number>>();

	async function updateVisitorCount() {
		const result = await fetch('/api/visitors').then((r) => r.text());
		visitorCount = Number.parseInt(result, 10);
	}

	onMount(() => {
		updateVisitorCount();

		window.addEventListener('focus', updateVisitorCount);

		return () => {
			window.removeEventListener('focus', updateVisitorCount);
		};
	});
</script>

{#if visitorCount && visitorCount > 0}
	<div transition:fade={{ duration: 500 }} class="flex flex-row items-center gap-0">
		<HandPeace class="size-4" />
		<Typography variant="body" color="subtle" class="flex-1 pr-4 pl-2">
			<span class="text-foreground">{visitorCount}</span> other
			{visitorCount === 1 ? 'person' : 'people'} are vibin here
		</Typography>
	</div>
{/if}
