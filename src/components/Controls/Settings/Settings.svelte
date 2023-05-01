<script lang="ts">
	import { clickOutside } from '$lib/actions';
	import { preferences } from '$lib/stores';

	import FullScreenOverlay from '../FullScreenOverlay.svelte';
	import VolumeControl from './VolumeControl.svelte';

	export let open: boolean;

	function handleClose() {
		open = false;
	}
</script>

<FullScreenOverlay bind:open>
	<div class="flex w-full h-full flex-col">
		<div
			use:clickOutside={handleClose}
			class="m-auto w-full max-w-4xl justify-center items-center flex flex-col gap-4"
		>
			<h1 class="text-4xl w-full mb-8">Settings</h1>
			<div class="grid w-full gap-8" style="grid-template-columns: repeat(2, max-content) auto;">
				<VolumeControl
					bind:muted={$preferences.muteScene}
					bind:value={$preferences.sceneVolume}
					label="Scene volume"
				/>
				<VolumeControl
					bind:muted={$preferences.muteMusic}
					bind:value={$preferences.musicVolume}
					label="Music volume"
				/>
			</div>
			<button
				on:click={handleClose}
				on:keyup={handleClose}
				class="btn btn-outline btn-primary hover:!bg-white transform-gpu px-16 mt-8 normal-case"
			>
				Close
			</button>
		</div>
	</div>
</FullScreenOverlay>
