<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let visitorCount: number;

	async function updateVisitorCount() {
		const result = await fetch('/api/visitors').then((r) => r.text());
		visitorCount = parseInt(result, 10);
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
	<span transition:fade={{ duration: 500 }} class="text-white pl-2 flex-1 glow pr-4">
		You're chilling with
		<span class="text-yellow-400">{visitorCount}</span> other
		{visitorCount === 1 ? 'person' : 'people'}
	</span>
{/if}
