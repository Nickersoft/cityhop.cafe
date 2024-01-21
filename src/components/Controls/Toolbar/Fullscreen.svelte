<script lang="ts">
	import { isFullscreen } from '$lib/stores';

	import ToolbarButton from './ToolbarButton.svelte';

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
			$isFullscreen = false;
		} else {
			document.documentElement.requestFullscreen();
			$isFullscreen = true;
		}
	}
</script>

<ToolbarButton icon="material-symbols:fullscreen" action={toggleFullscreen} title="Fullscreen" />
