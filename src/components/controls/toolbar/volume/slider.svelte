<script lang="ts">
	import MuteToggle from '$components/mute-toggle.svelte';

	// interface Props {
	// 	label: string;
	// 	muted: boolean;
	// 	value: number;
	// }

	// let { label, muted = $bindable(), value = $bindable() }: Props = $props();

	// $effect(() => {
	// 	if (value === 0) {
	// 		muted = true;
	// 	}
	// });

	function onChange() {
		console.log('onChange');
	}
</script>

<MuteToggle class="text-xl" onchange={onChange} />

<!-- {label}

<input
	disabled={muted}
	bind:value
	type="range"
	min="0"
	max="100"
	class="range range-primary transition-all duration-150 disabled:opacity-25"
/> -->
