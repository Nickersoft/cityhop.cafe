<script lang="ts">
	import MuteToggle from '$components/mute-toggle.svelte';

	import { Slider, Stack, Typography } from '$components/ui';

	interface Props {
		label: string;
		muted: boolean;
		value: number;
	}

	let { label, muted = $bindable(), value = $bindable() }: Props = $props();

	function handleChange(value: number) {
		if (value === 0) {
			muted = true;
		}
	}

	function handleMute(value: boolean) {
		muted = value;
	}

	const showMute = $derived(muted || value === 0);
</script>

<Stack orientation="column" align="stretch" class="w-full gap-0.5" gap="none">
	<Typography variant="body" size="md" color="subtle">
		{label}
	</Typography>

	<Stack orientation="row" align="center">
		<MuteToggle class="text-xl" pressed={showMute} onPressedChange={handleMute} />
		<Slider
			onValueCommit={handleChange}
			disabled={muted}
			class="grow"
			min={0}
			max={100}
			bind:value
		/>
	</Stack>
</Stack>
