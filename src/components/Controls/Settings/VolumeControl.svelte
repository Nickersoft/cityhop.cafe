<script lang="ts">
	export let label: string;
	export let muted: boolean;
	export let value: number;

	function handleMute(event: Event) {
		const el = event.target as HTMLInputElement;

		if (el.checked) {
			muted = true;
		} else {
			muted = false;
		}
	}

	$: if (value === 0) {
		muted = true;
	}
</script>

<label class="swap text-xl">
	<input type="checkbox" on:change={handleMute} checked={muted} />
	<iconify-icon class="swap-on" icon="mdi:mute" />
	<iconify-icon class="swap-off" icon="mdi:volume" />
</label>

{label}

<input
	disabled={muted}
	bind:value
	type="range"
	min="0"
	max="100"
	class="disabled:opacity-25 transition-all duration-150 range range-primary"
/>
