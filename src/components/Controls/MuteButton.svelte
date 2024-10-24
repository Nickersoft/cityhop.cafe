<script lang="ts">

	interface Props {
		muted: boolean;
		class?: string;
	}

	let { muted = $bindable(), class: className = '' }: Props = $props();

	

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
		<input type="checkbox" onchange={handleMute} checked={muted} />
		<iconify-icon class="swap-on" icon="mdi:mute"></iconify-icon>
		<iconify-icon class="swap-off" icon="mdi:volume"></iconify-icon>
	</label>
</div>
