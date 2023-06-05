<script lang="ts">
	export let muted: boolean;

	let className: string = '';

	export { className as class };

	function handleMute(event: Event) {
		const el = event.target as HTMLInputElement;

		if (el.checked) {
			muted = true;
		} else {
			muted = false;
		}
	}
</script>

<div class="tooltip translate-y-[3px] tooltip-top" data-tip="Mute music">
	<label class="swap {className}">
		<input type="checkbox" on:change={handleMute} checked={muted} />
		<iconify-icon class="swap-on" icon="mdi:mute" />
		<iconify-icon class="swap-off" icon="mdi:volume" />
	</label>
</div>
