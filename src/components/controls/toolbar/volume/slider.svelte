<script lang="ts">
	import MuteToggle from '$components/mute-toggle.svelte';

	import { Slider, Stack } from '$components/ui';

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

<Stack orientation="row" align="center">
	<MuteToggle class="text-xl" bind:pressed={muted} />
	<Slider class="grow" disabled={muted} min={0} max={100} bind:value />
</Stack>
<!-- {label}

<input
	disabled={muted}
	bind:value
	type="range"
	min="0"
	max="100"
	class="range range-primary transition-all duration-150 disabled:opacity-25"
/> -->
