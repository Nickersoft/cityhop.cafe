<script lang="ts">
	import ToolbarButton from './ToolbarButton.svelte';

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	}
</script>

<ToolbarButton icon="material-symbols:fullscreen" action={toggleFullscreen} title="Fullscreen" />
