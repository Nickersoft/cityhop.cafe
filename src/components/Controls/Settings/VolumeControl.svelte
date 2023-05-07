<script lang="ts">
	import MuteButton from '../MuteButton.svelte';

	export let label: string;
	export let muted: boolean;
	export let value: number;

	$: if (value === 0) {
		muted = true;
	}
</script>

<MuteButton class="text-xl" bind:muted />

{label}

<input
	disabled={muted}
	bind:value
	type="range"
	min="0"
	max="100"
	class="disabled:opacity-25 transition-all duration-150 range range-primary"
/>
