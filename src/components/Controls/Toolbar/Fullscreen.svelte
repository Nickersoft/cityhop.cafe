<script lang="ts">
	import { uiState } from '$lib/stores.svelte';

	import ToolbarButton from './ToolbarButton.svelte';

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
			uiState.isFullscreen = false;
		} else {
			document.documentElement.requestFullscreen();
			uiState.isFullscreen = true;
		}
	}
</script>

<ToolbarButton icon="material-symbols:fullscreen" action={toggleFullscreen} title="Fullscreen" />
