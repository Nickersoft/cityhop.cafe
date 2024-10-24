<script lang="ts">
	import MuteButton from '../MuteButton.svelte';

	interface Props {
		label: string;
		muted: boolean;
		value: number;
	}

	let { label, muted = $bindable(), value = $bindable() }: Props = $props();

	$effect(() => {
		if (value === 0) {
			muted = true;
		}
	});
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
